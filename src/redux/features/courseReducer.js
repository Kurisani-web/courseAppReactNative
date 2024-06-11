const {createSlice} = require('@reduxjs/toolkit');

export const courseSlice = createSlice({
  name: 'courseReducer',
  initialState: {
    type: '',
    search: '',
    currentPage: 1,
    totalPage: 0,
    data: [],
    typeHome: '',
    searchHome: '',
    dataHome: [],
  },
  reducers: {
    setCourse: (state, action) => {
      state.data = action.payload;
    },
    searchInput: (state, action) => {
      state.search = action.payload;
    },
    toggleType: (state, action) => {
      state.type = action.payload;
    },
    setCourseHome: (state, action) => {
      state.dataHome = action.payload;
    },
    toggleTypeHome: (state, action) => {
      state.typeHome = action.payload;
    },
    searchHomeInput: (state, action) => {
      state.searchHome = action.payload;
    },
  },
});

export const {
  setCourse,
  toggleType,
  searchInput,
  setCourseHome,
  toggleTypeHome,
  searchHomeInput,
} = courseSlice.actions;

export const dataCourse = state => state.courseReducer;

export default courseSlice.reducer;
