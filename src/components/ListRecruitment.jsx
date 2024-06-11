import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Constants from '~/common/Constants';

function ListRecruitment({data = []}) {
  const navigation = useNavigation();

  return (
    <>
      {data.map(item => (
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
        </TouchableOpacity>
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
  quantity: {},
});

export default ListRecruitment;
