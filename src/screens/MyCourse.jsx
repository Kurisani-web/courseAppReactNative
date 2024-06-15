import {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import ListCourse from '~/components/ListCourse';
import {getMyCourse} from '~/services/myCourseService';

function MyCourse() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = useCallback(() => {
    getMyCourse({})
      .then(course => {
        const courseId = course.data.map(item => item.courseId);
        setData(courseId);
        setRefreshing(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetch();
    }, 1000);
  });

  useEffect(() => {
    fetch();
  }, [fetch]);
console.log(data);
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
