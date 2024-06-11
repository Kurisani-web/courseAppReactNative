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
import {useSelector} from 'react-redux';
import {AuthContext} from '~/common/AppContext';
import {Commons} from '~/common/Commons';
import Constants from '~/common/Constants';
import ButtonCustom from '~/components/ButtonCustom';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import {dataUser} from '~/redux/features/userReducer';

function EditProfile() {
  const {currentUser} = useSelector(dataUser);
  const navigation = useNavigation();
  const {editProfile} = useContext(AuthContext);
  const [data, setData] = useState({
    id: currentUser._id,
    password: '',
    confirmPW: '',
    fullName: currentUser.fullName,
    email: currentUser.email,
    phone: currentUser.phone,
    address: currentUser.address,
  });

  const onChangeText = (name, text) => {
    setData({...data, [name]: text});
  };

  const handleEdit = () => {
    if (!Commons.validateEmail(data.email)) {
      Toast.show({
        type: 'error',
        text1: 'Vui lòng nhập đúng định dạng email',
      });
    } else if (data.password) {
      if (!Commons.validatePassword(data.password)) {
        Toast.show({
          type: 'error',
          text1: 'Mật khẩu phải có độ dài tối thiểu là 8 ký tự',
          text2:
            'Mật khẩu phải có ít nhất một chữ cái viết thường, một chữ cái viết hoa, một chữ số, một ký tự đặc biệt',
        });
      } else if (data.password !== data.confirmPW) {
        Toast.show({
          type: 'error',
          text1: 'Mật khẩu không trùng khớp',
        });
      }
    } else if (!Commons.validatePhoneNumber(data.phone)) {
      Toast.show({
        type: 'error',
        text1: 'Số điện thoại không hợp lệ',
      });
    } else {
        editProfile(data);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.boxLogin}>
          <Text style={styles.title}>Bạn thấy thông tin không đúng?</Text>
          <Text style={{fontWeight: '400', fontSize: 13, marginTop: 4}}>
            Đừng lo hãy thử thay đổi nó đi
          </Text>
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
            value={data.fullName}
            Icon={
              <VectorIcon.FontAwesomeVectorIcon
                name="user"
                size={20}
                color={Constants.darkBlue}
              />
            }
          />
          <Text style={styles.labelInput}>Địa chỉ nhà</Text>
          <TextCustom
            label={'Địa chỉ nhà'}
            name={'address'}
            onChangeText={onChangeText}
            value={data.address}
            Icon={
              <VectorIcon.EntypoVectorIcon
                name="address"
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
            value={data.email}
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
            value={data.phone}
            keyboardType={'number'}
            Icon={
              <VectorIcon.FontAwesomeVectorIcon
                name="phone"
                size={20}
                color={Constants.darkBlue}
              />
            }
          />

          <ButtonCustom title={'Thay đổi'} onPress={() => handleEdit()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.white,
  },
  scrollContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    color: Constants.darkBlue,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  boxLogin: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  labelInput: {
    color: Constants.TextColor,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },
});
export default EditProfile;
