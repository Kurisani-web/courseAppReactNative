import {configureStore} from '@reduxjs/toolkit';
import courseReducer from '~/features/courseReducer';
import forgotReducer from '~/features/forgotReducer';
import recruitmentReducer from '~/features/recruitmentReducer';
import userReducer from '~/features/userReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    forgotReducer,
    courseReducer,
    recruitmentReducer,
  },
});
