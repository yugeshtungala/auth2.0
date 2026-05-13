import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../services/auth/AxiosInstance";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: any, thunkAPI?: any) => {
    try {
      const response = await axiosInstance.post("/users/register", userData);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong",
      );
    }
  },
);
