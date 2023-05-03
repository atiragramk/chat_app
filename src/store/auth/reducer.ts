import { createSlice } from "@reduxjs/toolkit";

import { authStateCheck } from "./actions";
import { User } from "firebase/auth";

const AUTH_SLICE_NAME = "AUTH_SLICE_NAME";

export interface Auth {
  user: User | {};
}

const initialState: Auth | null = {
  user: {},
};

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    authStateCheck,
  },
});

export const { authStateCheck: authStateCheckAction } = authSlice.actions;

export default authSlice.reducer;
