import {configureStore} from '@reduxjs/toolkit';
import forgotReducer from '~/features/forgotReducer';
import userReducer from '~/features/userReducer';

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    forgotReducer: forgotReducer
  },
});
