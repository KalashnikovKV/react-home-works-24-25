import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../types";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  users: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      const newUser: User = {
        id: Date.now().toString(),
        username: action.payload.username,
        password: action.payload.password,
      };
      state.users.push(newUser);
    },
    login(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      const foundUser = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (foundUser) {
        state.isAuthenticated = true;
        state.user = foundUser;
      } else {
        throw new Error("Invalid username or password.");
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
