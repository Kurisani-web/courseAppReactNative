const {createSlice} = require('@reduxjs/toolkit');

export const recruitmentSlice = createSlice({
  name: 'recruitmentReducer',
  initialState: {
    type: '',
    search: '',
    currentPage: 1,
    totalPage: 0,
    data: [],
  },
  reducers: {
    setRecruitment: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setRecruitment, toggleType} = recruitmentSlice.actions;

export const dataRecruitment = state => state.recruitmentReducer;

export default recruitmentSlice.reducer;
