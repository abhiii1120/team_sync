import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedUser, loginEmployee } from "./authAction";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isloading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isloading = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isloading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isloading = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isloading = false;
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isloading = false;
      })
      .addCase(currentLoggedUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(currentLoggedUser.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isloading = false;
      })
      .addCase(currentLoggedUser.rejected, (state) => {
        state.isloading = false;
      });
  },
});

let { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
