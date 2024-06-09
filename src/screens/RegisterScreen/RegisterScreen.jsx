import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import Constants from '~/common/Constants';
import ButtomCustom from '~/components/ButtomCustom';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';

const {height} = Dimensions.get('screen');

function RegisterScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (name, text) => {
    setData({...data, [name]: text});
  };

  const handleRegiter = () => {
    console.log(123);
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
          <Text style={styles.title}>Bạn chưa có tài khoản?</Text>
          <Text style={{fontWeight: '400', fontSize: 13, marginTop: 4}}>
            Không sao hãy tạo một tài khoản để sử dụng
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
          <Text style={styles.labelInput}>Nhập lại mật khẩu</Text>
          <TextCustom
            label={'Nhập lại mật khẩu'}
            name={'confirmPW'}
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
          <Text style={styles.labelInput}>Họ và tên</Text>
          <TextCustom
            label={'Họ và tên'}
            name={'fullName'}
            onChangeText={onChangeText}
            Icon={
              <VectorIcon.FontAwesomeVectorIcon
                name="user"
                size={20}
                color={Constants.darkBlue}
              />
            }
          />
          <Text style={styles.labelInput}>Địa chỉ email</Text>
          <TextCustom
            label={'Email'}
            name={'email'}
            onChangeText={onChangeText}
            Icon={
              <VectorIcon.MaterialVectorIcon
                name="alternate-email"
                size={20}
                color={Constants.darkBlue}
              />
            }
          />
          <Text style={styles.labelInput}>Số điện thoại</Text>
          <TextCustom
            label={'Số điện thoại'}
            name={'phone'}
            onChangeText={onChangeText}
            keyboardType={'number'}
            Icon={
              <VectorIcon.FontAwesomeVectorIcon
                name="phone"
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

          <ButtomCustom title={'Đăng ký'} onPress={() => handleRegiter()} />

          <TouchableOpacity
            style={{marginVertical: 10}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Đã có tài khoản?
              <Text style={{color: Constants.darkBlue}}> Đăng nhập.</Text>
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
  },
  labelInput: {
    color: Constants.TextColor,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },
});
export default RegisterScreen;
