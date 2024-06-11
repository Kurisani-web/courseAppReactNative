import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {createContext, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {loginReducer, saveInfo} from '~/redux/features/userReducer';

import * as userService from '~/services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch();

  const login = async data => {
    try {
      const user = await userService.login(data);
      AsyncStorage.setItem('currentUser', JSON.stringify(user.data));
      AsyncStorage.setItem('token', user.data.token);
      dispatch(loginReducer({currentUser: user.data, token: user.data.token}));
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

  const register = async (data, navigation) => {
    try {
      const user = await userService.register(data);
      if (user.status === 200) {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Đăng ký thành công',
        });
        navigation.navigate('Login');
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

  const editProfile = async data => {
    try {
      const editUser = await userService.editUser({data, id: data.id});
      dispatch(saveInfo(editUser.data));
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Thay đổi thành công',
      });
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
      const token = await AsyncStorage.getItem('token');
      if (currentUser && token) {
        dispatch(
          loginReducer({currentUser: JSON.parse(currentUser), token: token}),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <AuthContext.Provider value={{login, register, editProfile}}>
      {children}
    </AuthContext.Provider>
  );
};
