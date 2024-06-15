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
import {Commons} from '~/common/Commons';

import Constants from '~/common/Constants';
import ListCourse from '~/components/ListCourse';
import VectorIcon from '~/components/VectorIcon';
import {
  dataCourse,
  searchInput,
  setCourse,
  toggleType,
} from '~/redux/features/courseReducer';
import {getAllCourse} from '~/services/courseService';

function Courses() {
  const {type, search, data} = useSelector(dataCourse);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourse = useCallback(() => {
    setIsLoading(true);
    getAllCourse({type: type, nameCourse: search})
      .then(course => {
        dispatch(setCourse(course.data.data));
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [type, search]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchCourse();
    }, 1000);
  }, []);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.flexCenter}>
        <View style={styles.boxSearch}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm khóa học"
            onChangeText={text => setSearchValue(text)}
            value={searchValue}
          />
          <TouchableOpacity onPress={() => dispatch(searchInput(searchValue))}>
            <VectorIcon.AntDesignVectorIcon name="search1" size={20} />
          </TouchableOpacity>
        </View>
        {search && (
          <TouchableOpacity
            onPress={() => dispatch(searchInput(''))}
            style={{padding: 2}}>
            <VectorIcon.MaterialVectorIcon name="filter-list-off" size={24} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.toggleType}>
        {Commons.listSelected().typeCourse.map(item => (
          <TouchableOpacity
            key={item.type}
            onPress={() => dispatch(toggleType(item.type))}>
            <Text
              style={[
                styles.textType,
                type === item.type && {
                  backgroundColor: Constants.darkGray,
                  color: Constants.white,
                },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ListCourse data={data} type={type} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Constants.white,
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Constants.grayOpacity,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Constants.borderGray,
  },
  searchInput: {
    width: '90%',
  },
  toggleType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textType: {
    fontSize: 16,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: Constants.borderGray,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});

export default Courses;
