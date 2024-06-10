import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {createContext, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {saveInfo} from '~/features/userReducer';

import * as userService from '~/services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch();

  const login = async data => {
    try {
      const user = await userService.login(data);
      AsyncStorage.setItem('currentUser', JSON.stringify(user.data));
      dispatch(saveInfo(user.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: error.response.data.error,
        });
      }
    }
  };

  const register = async (data,navigation) => {
    try {
      const user = await userService.register(data);
      if (user.status === 200) {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: "Đăng ký thành công",
        });
        navigation.navigate("Login")
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: error.response.data.error,
        });
      }
    }
  };

  const isLogged = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('currentUser');
      if (currentUser) {
        dispatch(saveInfo(JSON.parse(currentUser)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <AuthContext.Provider value={{login, register}}>
      {children}
    </AuthContext.Provider>
  );
};
