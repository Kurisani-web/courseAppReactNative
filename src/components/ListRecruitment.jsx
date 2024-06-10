import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Commons} from '~/common/Commons';
import Constants from '~/common/Constants';
import {dataRecruitment} from '~/features/recruitmentReducer';

function ListRecruitment() {
  const {data} = useSelector(dataRecruitment);

  return (
    <>
      {data.map(item => (
        <View style={styles.boxCourse} key={item._id}>
          <View style={styles.boxInfo}>
            <Text style={styles.titleRecruitment} numberOfLines={2}>
              {item.nameRecruitment}
            </Text>
            <Text style={styles.quantity} numberOfLines={2}>
              Số lượng: {item.quantity}
            </Text>
          </View>
        </View>
      ))}
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
  quantity: {
  }
});

export default ListRecruitment;
