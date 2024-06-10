import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
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

  const register = () => {};

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
