import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Commons} from '~/common/Commons';
import Constants from '~/common/Constants';
import {dataCourse, toggleType} from '~/features/courseReducer';

function ListCourse() {
  const {type, data} = useSelector(dataCourse);
  const navigation = useNavigation()

  return (
    <>
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

      {data.map(item => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("DetailCourse")} style={styles.boxCourse} key={item._id}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.imageCourse}
          />
          <View style={styles.boxInfo}>
            <Text style={styles.titleCourse} numberOfLines={2}>
              {item.nameCourse}
            </Text>
            <Text>{Commons.convertPrice(item.price)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
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
  titleCourse: {
    fontWeight: '700',
    color: Constants.darkBlue,
  },
});

export default ListCourse;
