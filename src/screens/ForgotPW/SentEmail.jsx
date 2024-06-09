import {StyleSheet, Text, View} from 'react-native';

function SentEmail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default SentEmail;
