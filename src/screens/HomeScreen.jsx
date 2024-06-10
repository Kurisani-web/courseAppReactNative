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
import {dataCourse, setCourse, searchInput} from '~/features/courseReducer';
import {setRecruitment} from '~/features/recruitmentReducer';
import {getAllCourse} from '~/services/courseService';
import {getAllRecruitment} from '~/services/recruitmentService';

function HomeScreen() {
  const {type, search} = useSelector(dataCourse);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const fetchCourse = useCallback(() => {
    setIsLoading(true);
    getAllCourse({page: 1, perPage: 5, type: type, nameCourse: search})
      .then(course => {
        dispatch(setCourse(course.data.data));
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [type, search]);

  const fetchRecruitment = useCallback(() => {
    setIsLoading(true);
    getAllRecruitment({page: 1, perPage: 5, nameRecruitment: search})
      .then(recruitment => {
        dispatch(setRecruitment(recruitment.data));
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [search]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchCourse();
    }, 1000);
  }, []);

  useEffect(() => {
    fetchRecruitment();
  }, [fetchRecruitment]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

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
              placeholder="Tìm kiếm khóa học"
              onChangeText={text => setSearchValue(text)}
              value={search}
            />
            <TouchableOpacity
              onPress={() => dispatch(searchInput(searchValue))}>
              <VectorIcon.AntDesignVectorIcon name="search1" size={20} />
            </TouchableOpacity>
          </View>
          {search && <TouchableOpacity
            onPress={() => dispatch(searchInput(""))}
            style={{padding: 2}}>
            <VectorIcon.MaterialVectorIcon name="filter-list-off" size={24} />
          </TouchableOpacity>}
        </View>
      </View>
      <ListCourse />

      <Text style={styles.label}>Tuyển nhân sự</Text>
      <ListRecruitment />
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
  },
  searchInput: {
    width: 150,
  },
});

export default HomeScreen;
