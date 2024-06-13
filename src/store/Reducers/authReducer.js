import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    successMessage: null,
    errorMessage: null,
    loader: false,
  },
  reducers: {},
  extraReducers: () => {},
});

export default authReducer.reducer;
