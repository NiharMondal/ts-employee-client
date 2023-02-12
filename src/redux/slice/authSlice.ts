import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { User } from "../api/authApi";

export type AuthState = {
  user: User | null;
  token: string | null;
};

export const auth = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      sessionStorage.setItem(
        "auth_token",
        JSON.stringify({
          user: user,
          token: token,
        })
      );
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      sessionStorage.clear();
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials ,logout} = auth.actions;

export default auth.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectCurrentToken = (state: RootState) => state.auth.token;
