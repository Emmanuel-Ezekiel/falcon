import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as authService from "../../../services/authServices";


interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};

export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, { rejectWithValue }) => {
  try {
    const isValid = await authService.checkToken()
    if (!isValid) {
      throw new Error("Token is invalid")
    }
    return { id: "1", email: "user@example.com", name: "User" } // Replace with actual user data
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})



export const login = createAsyncThunk(
  "auth/login",
  async (credentials: authService.LoginData, { rejectWithValue }) => {
    try {
      console.log("Calling authService.login with:", credentials);
      const response = await authService.login(credentials);
      console.log("authService.login response:", response); // Log after call
      if (!response.isSuccess) throw new Error(response.message);
      return response.data?.user;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Thunk error:", error.message);
      } else {
        console.error("Thunk error:", error);
      }
      return rejectWithValue((error as Error).message); // Properly reject for Redux
    }
  }
);


export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        checkAuth.fulfilled,
        (state, action: PayloadAction<User | undefined>) => {
          state.loading = false;
          state.user = action.payload || null;
          state.isAuthenticated = !!action.payload
        }
      )
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<User | undefined>) => {
          state.loading = false;
          state.user = action.payload || null;
          state.isAuthenticated = !!action.payload;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Login failed";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false
      })
  },
});

export default authSlice.reducer;
