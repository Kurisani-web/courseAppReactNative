import {createSlice} from '@reduxjs/toolkit';

export const forgotSlice = createSlice({
  name: 'forgotReducer',
  initialState: {
    email: '',
    toggle: false,
  },
  reducers: {
    handleSent: (action, payload) => {
      action.email = payload.email;
      action.toggle = true;
    },
  },
});

export const {handleSent} = forgotSlice.actions;

export const dataForgot = state => state.forgotReducer;

export default forgotSlice.reducer;
