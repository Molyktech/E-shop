import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      return fulfillWithValue(data);
    } catch (error) {
      // console.log("admin login error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


export const register_seller = createAsyncThunk(
  "auth/register_seller ",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/register-seller", info, {
        withCredentials: true,
      });
      //console.log("seller data", data);
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      return fulfillWithValue(data);
    } catch (error) {
      // console.log("admin login error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      console.log("login", data);
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      return fulfillWithValue(data);
    } catch (error) {
      // console.log("admin login error", error.response.data);
      return rejectWithValue(error.response.data);
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
  reducers: {
    clearError: (state, _) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload;
        state.successMessage = payload.message;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(register_seller.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(register_seller.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
      })
      .addCase(register_seller.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(seller_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(seller_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload;
        state.successMessage = payload.message;
      })
      .addCase(seller_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      });
  },
});

export const { clearError } = authReducer.actions; 
export default authReducer.reducer;
