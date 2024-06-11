import {createSlice} from '@reduxjs/toolkit';

export const forgotSlice = createSlice({
  name: 'forgotReducer',
  initialState: {
    email: '',
    toggle: false,
    codeNumber: "",
  },
  reducers: {
    handleSent: (state,action) => {
      state.email = action.payload.email;
      state.toggle = true;
    },
  },
});

export const {handleSent} = forgotSlice.actions;

export const dataForgot = state => state.forgotReducer;

export default forgotSlice.reducer;
