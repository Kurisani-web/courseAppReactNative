import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {Commons} from '~/common/Commons';
import Constants from '~/common/Constants';
import ButtonCustom from '~/components/ButtonCustom';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import {dataForgot, handleSent} from '~/redux/features/forgotReducer';
import {resetPassword} from '~/services/forgotPassService';

function ResetPassword() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {email, codeReset} = useSelector(dataForgot);
  const [data, setData] = useState({password: '', rePassword: ''});

  const onChangeText = (name, text) => {
    setData({
      ...data,
      [name]: text,
    });
  };

  const onSubmit = () => {
    if (Commons.validatePassword(data.password)) {
      if (data.password === data.rePassword) {
        const dataReset = {
          email: email,
          codeReset: codeReset,
          password: data.password,
        };
        resetPassword({data: dataReset}).then(result => {
          dispatch(
            handleSent({
              email: '',
              codeReset: '',
              toggle: 'Default',
            }),
          );
          navigation.navigate('Login');
          Toast.show({
            type: 'success',
            text1: 'Thay đổi thành công',
          });
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Mật khẩu không trùng khớp',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Mật khẩu không hợp lệ',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thay đổi mật khẩu</Text>
      <Text style={styles.description}>
        Hãy đặt lại mật khẩu để sử dụng dịch vụ
      </Text>

      <Text style={styles.labelInput}>Mật khẩu</Text>
      <TextCustom
        label={'Mật khẩu'}
        name={'password'}
        password={true}
        onChangeText={onChangeText}
        Icon={
          <VectorIcon.FontAwesomeVectorIcon
            name="lock"
            size={20}
            color={Constants.darkBlue}
          />
        }
      />

      <Text style={styles.labelInput}>Nhập lại mật khẩu</Text>
      <TextCustom
        label={'Nhập lại mật khẩu'}
        name={'rePassword'}
        password={true}
        onChangeText={onChangeText}
        Icon={
          <VectorIcon.FontAwesomeVectorIcon
            name="lock"
            size={20}
            color={Constants.darkBlue}
          />
        }
      />

      <ButtonCustom
        title={'Thay đổi mật khẩu'}
        style={styles.btnSent}
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Constants.darkBlue,
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: Constants.gray,
  },
  labelInput: {
    color: Constants.TextColor,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },
  btnSent: {
    marginTop: 30,
    padding: 16,
    borderRadius: 10,
    backgroundColor: Constants.darkBlue,
  },
});

export default ResetPassword;
