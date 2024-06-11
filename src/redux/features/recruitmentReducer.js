const {createSlice} = require('@reduxjs/toolkit');

export const recruitmentSlice = createSlice({
  name: 'recruitmentReducer',
  initialState: {
    search: '',
    data: [],
    dataHomeRecruitment: [],
    currentPage: 1,
    totalPage: 0,
  },
  reducers: {
    setRecruitmentHome: (state, action) => {
      state.dataHomeRecruitment = action.payload;
    },
    setRecruitment: (state, action) => {
      state.data = action.payload;
    },
    searchInput: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {setRecruitment, toggleType, setRecruitmentHome, searchInput} =
  recruitmentSlice.actions;

export const dataRecruitment = state => state.recruitmentReducer;

export default recruitmentSlice.reducer;
