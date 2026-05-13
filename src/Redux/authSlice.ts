import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./auth";

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(registerUser.pending, (state: AuthState) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state: AuthState, action: any) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state: AuthState, action: any) => {
        state.isLoading = false;
        state.error = action.payload || "Registration failed";
      });
  },
});

export default authSlice.reducer;
