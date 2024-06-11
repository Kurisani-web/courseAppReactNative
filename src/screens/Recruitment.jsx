import {useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import ListRecruitment from '~/components/ListRecruitment';
import VectorIcon from '~/components/VectorIcon';
import {
  dataRecruitment,
  searchInput,
  setRecruitment,
} from '~/redux/features/recruitmentReducer';
import {getAllRecruitment} from '~/services/recruitmentService';

function Recruitment() {
  const {data, search} = useSelector(dataRecruitment);
  const dispatch = useDispatch();
  
  const [refreshing, setRefreshing] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const fetch = useCallback(() => {
    getAllRecruitment({nameRecruitment: search})
      .then(recruitment => dispatch(setRecruitment(recruitment.data)))
      .catch(error => console.log(error));
  }, [search]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetch();
    }, 1000);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

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
            placeholder="Tìm kiếm việc"
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

      <ListRecruitment data={data} />
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
});

export default Recruitment;
