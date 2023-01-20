import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateOutlet from "./components/PrivateOutlet";
import AuthLayout from "./layout/AuthLayout";
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
      { path: "/", element: <Navigate to="users" replace/> },
      {
        path: "users",
        element: <App />,
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
            path: "edit",
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
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
