import {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import {dataForgot, handleSent} from '~/redux/features/forgotReducer';
import {sentCode} from '~/services/forgotPassService';

function VerifyCode() {
  const dispatch = useDispatch();
  const {codeReset, email} = useSelector(dataForgot);
  const [values, setValues] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newValues = [...values];
      newValues[index] = text;

      setValues(newValues);
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
      if (index >= 3) {
        const convertValue = newValues.join('');
        if (parseInt(convertValue) === codeReset) {
          dispatch(
            handleSent({
              email: email,
              codeReset: codeReset,
              toggle: 'ResetPassword',
            }),
          );
        } else {
          Toast.show({
            type: 'error',
            text1: 'Mã xác nhận không đúng',
          });
        }
      }
    } else {
      const newValues = [...values];
      newValues[index] = '';
      setValues(newValues);
    }
  };

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      values[index] === ''
    ) {
      inputs.current[index - 1].focus();
    }
  };

  const reSent = () => {
    sentCode({data: {email}}).then(code => {
      if (code.status == 200) {
        Toast.show({
          type: 'success',
          text1: 'Mã xác nhận đã được gửi đến email của bạn',
        });
        dispatch(
          handleSent({
            email: code.data.data.email,
            codeReset: code.data.data.codeReset,
          }),
        );
      } else {
        Toast.show({
          type: 'error',
          text1: code.message,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vui lòng nhập mã xác thực</Text>
      <Text style={styles.description}>Chỉ còn một bước nữa thôi</Text>

      <Text style={styles.labelInput}>Mã xác thực có 4 chữ số</Text>

      <View style={styles.boxNumberCode}>
        {values.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={value}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            ref={el => (inputs.current[index] = el)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.btnResent} onPress={reSent}>
        <Text style={styles.textResent}>Chưa nhận được mã? Gửi lại</Text>
      </TouchableOpacity>
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
  boxNumberCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    textAlign: 'center',
    borderColor: Constants.grayOpacity,
    borderWidth: 2,
    borderRadius: 20,
  },
  btnResent: {
    marginTop: 20,
  },
  textResent: {
    color: Constants.darkBlue,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default VerifyCode;
