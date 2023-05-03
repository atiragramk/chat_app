import { PayloadAction } from "@reduxjs/toolkit";

import { User } from "firebase/auth";
import { Auth } from "./reducer";

export const authStateCheck = (
  state: Auth,
  action: PayloadAction<Partial<User>>
) => {
  state.user = action.payload;
};
