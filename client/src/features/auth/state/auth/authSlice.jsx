import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isloading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isloading = false;l
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isloading = false;
    },
  },
});

let { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
