import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateOutlet from "./layout/AuthLayout/PrivateOutlet";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import RootLayout from "./layout/RootLayout/RootLayout";

import {
  AddUser,
  App,
  EditUser,
  SingleUser,
  Login,
  Register,
  NotFound,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navigate to="/users" /> },
      {
        path: "users",
        element: <App />,
        index: true,
      },
      {
        path: "users/:userId",
        element: <SingleUser />,
      },

      {
        path: "/admin",
        element: <PrivateOutlet />,
        children: [
          {
            path: "add",
            element: <AddUser />,
          },
          {
            path: "edit/:userId",
            element: <EditUser />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,

    children: [
      {
        path: "login",
        element: <Login />,
        index: true,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
