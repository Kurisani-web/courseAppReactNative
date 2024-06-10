import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: {},
    token: null,
  },
  reducers: {
    saveInfo: (state, action) => {
      const payload = action.payload;
      state.token = payload.token;
      state.currentUser = payload;
    },
    logout: (state, action) => {
      AsyncStorage.removeItem('currentUser');
      state.currentUser = {};
      state.token = null;
    },
  },
});

export const {saveInfo, logout} = userSlice.actions;

export const dataUser = state => state.userReducer;

export default userSlice.reducer;
