import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Constants from '~/common/Constants';

function ButtonCustom({title, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={style || styles.btn} activeOpacity={0.9}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: Constants.darkBlue,
  },
  btnText: {
    color: Constants.white,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonCustom;
