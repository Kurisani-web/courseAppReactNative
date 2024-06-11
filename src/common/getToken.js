import AsyncStorage from "@react-native-async-storage/async-storage";

export default getToken = async () => {
  const res = await AsyncStorage.getItem('currentUser');
  return JSON.parse(res).token;
};
