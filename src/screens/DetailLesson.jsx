import {useRoute} from '@react-navigation/native';
import {Linking, StyleSheet, Text, View} from 'react-native';
import Constants from '~/common/Constants';
import VideoCustom from '~/components/VideoCustom';

function DetailLesson() {
  const route = useRoute();
  const {dataLesson} = route.params;

  return (
    <>
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
    alignItems: 'center',
    backgroundColor: Constants.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Constants.black,
  },
});

export default DetailLesson;
