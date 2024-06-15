import {createSlice} from '@reduxjs/toolkit';

export const LessonReducer = createSlice({
  name: 'LessonReducer',
  initialState: {
    dataLesson: [],
  },
  reducers: {
    setLesson: (state, action) => {
      state.dataLesson = action.payload;
    },
  },
});

export const {setLesson} = LessonReducer.actions;

export const listLesson = state => state.LessonReducer;

export default LessonReducer.reducer;
