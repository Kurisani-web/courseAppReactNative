import {useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import IsLoading from '~/components/IsLoading';

import ListCourse from '~/components/ListCourse';
import ListRecruitment from '~/components/ListRecruitment';
import VectorIcon from '~/components/VectorIcon';
import {
  dataCourse,
  searchHomeInput,
  setCourseHome,
} from '~/redux/features/courseReducer';
import { listMyCourse, setMyCourse } from '~/redux/features/myCourseReducer';
import {
  dataRecruitment,
  setRecruitmentHome,
} from '~/redux/features/recruitmentReducer';
import {getAllCourse} from '~/services/courseService';
import {getMyCourse} from '~/services/myCourseService';
import {getAllRecruitment} from '~/services/recruitmentService';

function HomeScreen() {
  const {typeHome, searchHome, dataHome} = useSelector(dataCourse);
  const {dataHomeRecruitment} = useSelector(dataRecruitment);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const fetchCourse = useCallback(() => {
    setIsLoading(true);
    getAllCourse({page: 1, perPage: 5, type: typeHome, nameCourse: searchHome})
      .then(course => {
        dispatch(setCourseHome(course.data.data));
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [typeHome, searchHome]);

  const fetchRecruitment = useCallback(() => {
    setIsLoading(true);
    getAllRecruitment({page: 1, perPage: 5, nameRecruitment: searchHome})
      .then(recruitment => {
        dispatch(setRecruitmentHome(recruitment.data));
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [searchHome]);

  const fetchMyCourse = useCallback(() => {
    getMyCourse({})
      .then(course => {
        dispatch(setMyCourse(course.data));
      })
      .catch(error => console.log(error));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchCourse();
      fetchMyCourse();
      fetchRecruitment();
    }, 1000);
  }, []);

  useEffect(() => {
    fetchCourse();
    fetchRecruitment();
    fetchMyCourse();
  }, [fetchCourse, fetchRecruitment, fetchMyCourse]);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.header}>
        <Text style={styles.label}>Khóa học</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.boxSearch}>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm khóa học và tuyển dụng"
              onChangeText={text => setSearchValue(text)}
              value={searchValue}
            />
            <TouchableOpacity
              onPress={() => dispatch(searchHomeInput(searchValue))}>
              <VectorIcon.AntDesignVectorIcon name="search1" size={20} />
            </TouchableOpacity>
          </View>
          {searchHome && (
            <TouchableOpacity
              onPress={() => dispatch(searchHomeInput(''))}
              style={{padding: 2}}>
              <VectorIcon.MaterialVectorIcon name="filter-list-off" size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ListCourse data={dataHome} type={typeHome} />

      <Text style={styles.label}>Tuyển nhân sự</Text>
      <ListRecruitment data={dataHomeRecruitment} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Constants.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  label: {
    color: Constants.darkBlue,
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },

  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Constants.grayOpacity,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Constants.borderGray,
  },
  searchInput: {
    width: 200,
  },
});

export default HomeScreen;
