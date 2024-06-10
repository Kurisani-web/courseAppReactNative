const {createSlice} = require('@reduxjs/toolkit');

export const courseSlice = createSlice({
  name: 'courseReducer',
  initialState: {
    type: '',
    search: '',
    currentPage: 1,
    totalPage: 0,
    data: [],
  },
  reducers: {
    setCourse: (state, action) => {
      state.data = action.payload;
    },
    toggleType: (state, action) => {
      state.type = action.payload;
    },
    searchInput: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {setCourse, toggleType, searchInput} = courseSlice.actions;

export const dataCourse = state => state.courseReducer;

export default courseSlice.reducer;
