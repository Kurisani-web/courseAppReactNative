import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import Constants from '~/common/Constants';
import ButtonCustom from '~/components/ButtonCustom';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import {handleSent} from '~/features/forgotReducer';

function SentEmail() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onChangeText = (name, text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Email không được để trống',
        text2: 'Hãy nhập email để quên mật khẩu',
      });
    } else {
      dispatch(handleSent({email}));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu</Text>
      <Text style={styles.description}>
        Hãy để chúng tôi lo điều đó hãy nhập email của bạn để lấy lại mật khẩu
      </Text>

      <Text style={styles.labelInput}>Email</Text>
      <TextCustom
        label={'Email'}
        name={'email'}
        keyboardType={'email'}
        onChangeText={onChangeText}
        Icon={
          <VectorIcon.MaterialVectorIcon
            name="mail"
            size={26}
            color={Constants.darkBlue}
          />
        }
      />

      <ButtonCustom
        title={'Yêu cầu lấy lại mật khẩu'}
        style={styles.btnSent}
        onPress={handleSubmit}
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

export default SentEmail;
