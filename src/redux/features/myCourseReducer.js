import {createSlice} from '@reduxjs/toolkit';

export const MyCourseSlice = createSlice({
  name: 'myCourseReducer',
  initialState: {
    dataMyCourse: [],
  },
  reducers: {
    setMyCourse: (state, action) => {
      state.dataMyCourse = action.payload;
    },
    addMyCourse: (state, action) => {
      state.dataMyCourse = [...state.dataMyCourse, action.payload];
    },
  },
});

export const {setMyCourse, addMyCourse} = MyCourseSlice.actions;

export const listMyCourse = state => state.myCourseReducer;

export default MyCourseSlice.reducer;
