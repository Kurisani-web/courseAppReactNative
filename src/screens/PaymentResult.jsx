import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useDispatch } from 'react-redux';
import Constants from '~/common/Constants';
import VectorIcon from '~/components/VectorIcon';
import { addMyCourse } from '~/redux/features/myCourseReducer';
import {buyCourse} from '~/services/myCourseService';
import {callbackVnPay} from '~/services/paymentService';

function PaymentResult() {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {dataResult} = route.params;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const processPaymentResult = async () => {
      try {
        const params = {};

        const queryString = dataResult.split('?')[1];
        if (queryString) {
          const queryArray = queryString.split('&');

          queryArray.forEach(item => {
            const [key, value] = item.split('=');
            params[key] = value;
          });
        }

        if (success) {
          buyCourse({courseId: params.vnp_OrderInfo}).then(response => {
            dispatch(addMyCourse(response.data.data));
          });
        }

        const response = await callbackVnPay({param: params});

        if (response.data.code === '00') {
          setSuccess(true);
          setMessage('Thanh toán thành công');
        } else if (response.data.code === '24') {
          setError(true);
          setMessage('Thanh toán không thành công');
        } else {
          setError(true);
          setMessage('Có lỗi xảy ra');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error processing payment result:', error);
          setError(true);
          setMessage('Có lỗi xảy ra khi xử lý thanh toán');
        }
      }
    };

    processPaymentResult();
  }, [dataResult, callbackVnPay,success]);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      {success && (
        <VectorIcon.AntDesignVectorIcon
          name="checkcircle"
          size={150}
          color={Constants.success}
        />
      )}
      {error && (
        <VectorIcon.AntDesignVectorIcon
          name="closecircle"
          size={150}
          color={Constants.error}
        />
      )}
      <Text style={{marginTop: 20, fontSize: 16, fontWeight: 500}}>
        {message}
      </Text>

      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 16,
            textDecorationLine: 'underline',
          }}>
          Quay về màn chính
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PaymentResult;
