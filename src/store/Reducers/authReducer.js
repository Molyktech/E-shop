import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log("async thunk", info);
    try {
        const { data } = await api.post("/admin-login", info, {
          withCredentials: true,
        });
        console.log("admin Login", data);
    } catch (error) {
        console.log("admin login error", error.response.data);
      return error.response.data;
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    successMessage: null,
    errorMessage: null,
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state, { payload }) => {
      state.loader = true;
    });
  },
});

export default authReducer.reducer;
