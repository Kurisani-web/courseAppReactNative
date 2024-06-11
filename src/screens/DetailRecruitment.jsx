import {useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Constants from '~/common/Constants';
import ButtonCustom from '~/components/ButtonCustom';
import ConvertHTMLToText from '~/components/ConvertHTMLToText';

function DetailRecruitment() {
  const route = useRoute();
  const {data} = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titleCourse}>{data.nameRecruitment}</Text>
      <Text>Số lượng: {data.quantity}</Text>
      <ConvertHTMLToText data={data.description} />
      <ButtonCustom title={'Gửi CV ngay'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.white,
    paddingHorizontal: 10,
  },
  titleCourse: {
    color: Constants.darkBlue,
    marginTop: 10,
    fontWeight: '700',
    fontSize: 22,
  },
});

export default DetailRecruitment;
