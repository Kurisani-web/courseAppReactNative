import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {AuthContext} from '~/common/AppContext';
import Constants from '~/common/Constants';
import ButtonCustom from '~/components/ButtonCustom';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';

const {height} = Dimensions.get('screen');

function LoginScreen() {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (name, text) => {
    setData({...data, [name]: text});
  };

  const handleLogin = () => {
    if (Object.values(data).some(field => field === '')) {
      Toast.show({
        type: 'error',
        text1: 'Vui lòng nhập đầy đủ thông tin',
      });
    } else if (data.username === 'admin') {
      Toast.show({
        type: 'error',
        text1: 'Ứng dụng không dành cho người quản lý',
      });
    } else {
      login(data);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Image
          source={require('~/assets/Images/LogoApp.png')}
          style={styles.imageLogo}
        />

        <View style={styles.boxLogin}>
          <Text style={styles.title}>Chào mừng đã đến ứng dụng</Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 13,
              marginTop: 10,
              marginBottom: 20,
            }}>
            Hãy đăng nhập ứng dụng để tận hưởng đầy đủ dịch vụ của ứng dụng
          </Text>
          <Text style={styles.labelInput}>Tài khoản</Text>
          <TextCustom
            label={'Tài khoản'}
            name={'username'}
            onChangeText={onChangeText}
            Icon={
              <VectorIcon.FontAwesomeVectorIcon
                name="user"
                size={20}
                color={Constants.darkBlue}
              />
            }
          />
          <Text style={styles.labelInput}>Mật khẩu</Text>
          <TextCustom
            label={'Mật khẩu'}
            name={'password'}
            onChangeText={onChangeText}
            password={true}
            Icon={
              <VectorIcon.FontAwesomeVectorIcon
                name="lock"
                size={20}
                color={Constants.darkBlue}
              />
            }
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 14,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPW')}>
              <Text
                style={{
                  color: Constants.darkBlue,
                  fontWeight: 'bold',
                }}>
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
          </View>

          <ButtonCustom title={'Đăng nhập'} onPress={() => handleLogin()} />

          <TouchableOpacity
            style={{marginVertical: 10}}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Chưa có tài khoản?
              <Text style={{color: Constants.darkBlue}}> Đăng ký ngay.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.mainColor,
  },
  scrollContainer: {
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: 20,
  },
  imageLogo: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    marginVertical: 40,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: Constants.darkBlue,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  boxLogin: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: height * 0.6,
    position: 'absolute',
    bottom: 0,
  },
  labelInput: {
    color: Constants.TextColor,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },
});

export default LoginScreen;
