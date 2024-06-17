import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Commons} from '~/common/Commons';
import Constants from '~/common/Constants';
import EmptyData from './EmptyData';

function ListCourse({data}) {
  const navigation = useNavigation();

  return (
    <>
      {data.length > 0 ? (
        data.map(item => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('DetailCourse', {data: item})}
            style={styles.boxCourse}
            key={item._id}>
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
