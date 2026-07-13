import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

let loginEmployee = createAsyncThunk("auth/login", (credentials, thunkApi) => {
  try {
    let res = await axiosInstance.post("/auth/login",credentials);
    console.log(res);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
