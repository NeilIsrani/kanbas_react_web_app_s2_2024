import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCourses } from "./client";
const courses = fetchAllCourses();
const initialState = {
  currentUser: null,
  courses: [],
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setCourses(state, action) {
      state.courses = action.payload;
  },
},
});
export const { setCurrentUser, setCourses } = accountSlice.actions;
export default accountSlice.reducer;
