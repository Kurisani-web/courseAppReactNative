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
      state.currentUser = payload.currentUser;
    },
    login: (state, action) => {
      const payload = action.payload;
      state.currentUser = payload.currentUser;
    },
    logout: (state, action) => {
      state.currentUser = {};
      state.token = null;
    },
  },
});

export const {saveInfo, login, logout} = userSlice.actions;

export const dataUser = state => state.userReducer;

export default userSlice.reducer;
