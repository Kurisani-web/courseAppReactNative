import {useRoute} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import Constants from '~/common/Constants';
import HeaderDrawer from '~/components/HeaderDrawer';
import VideoCustom from '~/components/VideoCustom';

function DetailLesson() {
  const route = useRoute();
  const {dataLesson} = route.params;

  return (
    <>
      <HeaderDrawer />
      <View style={styles.container}>
        <Text style={styles.title}>{dataLesson.nameLesson}</Text>
        <VideoCustom data={dataLesson} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Constants.black,
    textAlign: 'center',
  },
});

export default DetailLesson;
