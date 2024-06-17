import {StyleSheet, Text, View} from 'react-native';

function EmptyData() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chưa có thông tin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default EmptyData;
