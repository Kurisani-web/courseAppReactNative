import {createSlice} from '@reduxjs/toolkit';

export const forgotSlice = createSlice({
  name: 'forgotReducer',
  initialState: {
    email: '',
    toggle: "Default",
    codeReset: '',
  },
  reducers: {
    handleSent: (state, action) => {
      state.email = action.payload.email;
      state.codeReset = action.payload.codeReset;
      state.toggle = action.payload.toggle;
    },
  },
});

export const {handleSent} = forgotSlice.actions;

export const dataForgot = state => state.forgotReducer;

export default forgotSlice.reducer;
