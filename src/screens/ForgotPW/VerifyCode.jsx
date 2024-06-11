import {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import {dataForgot} from '~/redux/features/forgotReducer';

function VerifyCode() {
  const dispatch = useDispatch();
  const {codeNumber} = useSelector(dataForgot);
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

      if (index === 3) {
        console.log(13);
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

      <TouchableOpacity style={styles.btnResent}>
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
    marginTop: 20
  },
  textResent: {
    color: Constants.darkBlue,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  }
});

export default VerifyCode;
