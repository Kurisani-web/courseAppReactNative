import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from '~/common/Constants';
import VectorIcon from './VectorIcon';
import {useState} from 'react';

function TextCustom({
  value,
  onChangeText,
  name,
  label,
  password,
  keyboardType,
  Icon
}) {
  const [showPassword, setShowPassword] = useState(password);
  let keyBoard = 'default';

  switch (keyboardType) {
    case 'email':
      keyBoard = 'email-address';
      break;
    case 'number':
      keyBoard = 'numeric';
      break;
    default:
      keyBoard = 'default';
      break;
  }

  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        onChangeText={text => onChangeText(name, text)}
        value={value}
        placeholder={label}
        style={styles.textInput}
        secureTextEntry={showPassword}
        keyboardType={keyBoard}
      />

      {password && (
        <TouchableOpacity
          style={styles.btnShowPass}
          onPress={() => setShowPassword(!showPassword)}>
          <VectorIcon.FeatherVectorIcon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color={Constants.gray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Constants.borderGray,
    borderWidth: 1,
    borderRadius: 10,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  textInput: {
    width: '90%',
    fontSize: 16,
    color: '#666',
    overflow: "hidden"
  },
  btnShowPass: {
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 10,
    backgroundColor: Constants.white,
    borderRadius: 10,
  },
});

export default TextCustom;
