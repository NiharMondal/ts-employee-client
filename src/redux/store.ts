import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import authReducer from "./slice/authSlice";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    //auth api 
    [authApi.reducerPath]: authApi.reducer,
    //auth slice
    auth: authReducer,
    //users api 
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
