import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import Toast from 'react-native-toast-message';
import Constants from '~/common/Constants';
import ButtonCustom from '~/components/ButtonCustom';
import ConvertHTMLToText from '~/components/ConvertHTMLToText';
import {applyRecruitment} from '~/services/recruitmentService';

function DetailRecruitment() {
  const route = useRoute();
  const {data} = route.params;
  const [dataApply, setDataApply] = useState({
    fileCV: '',
    recruitmentId: '',
  });
  

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [types.pdf],
      });
      setDataApply({fileCV: res[0], recruitmentId: data._id});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Người dùng đã hủy chọn tệp');
      } else {
        console.error('Lỗi:', err);
      }
    }
  };

  const handleApply = async () => {
    if (dataApply.fileCV !== '') {
      const formData = new FormData();
      formData.append('fileCV', {
        uri: dataApply.fileCV.uri,
        type: dataApply.fileCV.type,
        name: dataApply.fileCV.name,
      });
      formData.append('recruitmentId', dataApply.recruitmentId);

      await applyRecruitment({data: formData})
        .then(apply => {
          if(apply.status === 200){

          }
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            console.log(err);
          }
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Vui lòng chọn file CV',
      });
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titleCourse}>{data.nameRecruitment}</Text>
      <Text>Số lượng: {data.quantity}</Text>
      <ConvertHTMLToText data={data.description} />

      <ButtonCustom title={'MyCV'} onPress={handleFilePick} />

      <ButtonCustom title={'Gửi CV ngay'} onPress={handleApply} />
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
