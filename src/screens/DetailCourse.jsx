import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import AvatarCustoms from '~/components/AvatarCustoms';
import ButtonCustom from '~/components/ButtonCustom';
import ConvertHTMLToText from '~/components/ConvertHTMLToText';
import {addMyCourse, listMyCourse} from '~/redux/features/myCourseReducer';
import {createUrlVnPay} from '~/services/paymentService';
import WebView from 'react-native-webview';
import {setLesson} from '~/redux/features/LessonReducer';
import HeaderDrawer from '~/components/HeaderDrawer';
import {buyCourse} from '~/services/myCourseService';

function DetailCourse() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataMyCourse} = useSelector(listMyCourse);
  const route = useRoute();
  const {data} = route.params;
  const [solid, setSolid] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const res = dataMyCourse.filter(
      item => item.courseId._id === data._id || item.courseId === data._id,
    );
    if (res.length > 0) {
      setSolid(true);
      dispatch(setLesson(data.lesson));
    } else {
      setSolid(false);
      dispatch(setLesson([]));
    }
  }, [dataMyCourse, data]);

  const handleBuy = () => {
    if (data.price === 0) {
      setSolid(true);
      dispatch(setLesson(data.lesson));
      buyCourse({courseId: data._id}).then(response => {
        dispatch(addMyCourse(response.data.data));
      });
    } else if (!solid) {
      const dataPayment = {
        amount: data.price,
        language: 'vn',
        myCourseId: data._id,
        bankCode: '',
      };
      createUrlVnPay({data: dataPayment})
        .then(payUrl => {
          setUrl(payUrl.data);
        })
        .catch(error => console.log(error));
    }
  };

  const handleEvent = event => {
    const native = event.nativeEvent.url;
    if (native.includes('payment-result')) {
      navigation.navigate('PaymentResult', {dataResult: event.nativeEvent.url});
      setTimeout(() => {
        setUrl('');
      }, 1000);
    }
  };

  return (
    <>
      {url ? (
        <WebView source={{uri: url}} onLoadEnd={handleEvent} />
      ) : (
        <View>
          <ScrollView style={styles.container}>
            <Image source={{uri: data.imageUrl}} style={styles.imageCourse} />
            <View style={styles.infoTeacher}>
              <AvatarCustoms imageUrl={data.teacherId?.imageUrl} />
              <Text style={{fontWeight: 600, color: Constants.darkBlue}}>
                {data.teacherId?.fullName}
              </Text>
            </View>
            <Text style={styles.titleCourse}>{data.nameCourse}</Text>
            <ConvertHTMLToText data={data.description} />
            <ButtonCustom
              title={
                solid ? 'Đã mua' : data.price === 0 ? 'Nhận ngay' : 'Mua ngay'
              }
              onPress={handleBuy}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: Constants.white,
  },
  imageCourse: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  titleCourse: {
    fontWeight: '700',
    color: Constants.darkBlue,
    marginTop: 10,
  },
  infoTeacher: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default DetailCourse;
