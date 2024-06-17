import {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import ListCourse from '~/components/ListCourse';
import {getCourseById} from '~/services/courseService';
import {getMyCourse} from '~/services/myCourseService';

function MyCourse() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = useCallback(async () => {
    try {
      const courseResponse = await getMyCourse({});
      const courseIds = courseResponse.data.map(item => item.courseId);
      await new Promise(() => {
        for (let i = 0; i < courseIds.length; i++) {
          getCourseById({id: courseIds[i]._id})
            .then(course => setData(pre => [...pre, course.data]))
            .catch(error => console.log(error));
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData([])
      setRefreshing(false);
      fetch();
    }, 1000);
  });

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <ListCourse data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MyCourse;
