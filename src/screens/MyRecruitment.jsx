import {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListRecruitment from '~/components/ListRecruitment';
import {getMyRecruitment} from '~/services/recruitmentService';

function MyRecruitment() {
  const [data, setData] = useState([]);

  const fetch = useCallback(() => {
    getMyRecruitment({})
      .then(recruitment => setData(recruitment.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <View style={styles.container}>
      <ListRecruitment data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default MyRecruitment;
