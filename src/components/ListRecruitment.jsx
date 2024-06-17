import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import {dataUser} from '~/redux/features/userReducer';
import EmptyData from './EmptyData';

function ListRecruitment({data = [], showStatus = false}) {
  const {currentUser} = useSelector(dataUser);
  const navigation = useNavigation();

  const filterMyRecruitment = item => {
    const result = item.studentApply.filter(
      filter => filter.userId._id === currentUser._id,
    )[0]?.status;
    return result;
  };

  return (
    <>
      {data.length > 0 ? (
        data.map(item => (
          <TouchableOpacity
            style={styles.boxCourse}
            key={item._id}
            onPress={() =>
              navigation.navigate('DetailRecruitment', {data: item})
            }>
            <View style={styles.boxInfo}>
              <Text style={styles.titleRecruitment} numberOfLines={2}>
                {item.nameRecruitment}
              </Text>
              <Text style={styles.quantity} numberOfLines={2}>
                Số lượng: {item.quantity}
              </Text>
            </View>
            {showStatus && (
              <View>
                <Text>
                  Trạng thái:{' '}
                  {filterMyRecruitment(item) === 0
                    ? 'Đã ứng tuyển'
                    : filterMyRecruitment(item) === 1
                    ? 'Đã trúng tuyển'
                    : ' Đã trượt'}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))
      ) : (
        <EmptyData />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  boxCourse: {
    borderWidth: 1,
    borderColor: Constants.borderGray,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageCourse: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxInfo: {paddingHorizontal: 20, paddingVertical: 20},
  titleRecruitment: {
    fontWeight: '700',
    color: Constants.darkBlue,
  },
  quantity: {},
});

export default ListRecruitment;
