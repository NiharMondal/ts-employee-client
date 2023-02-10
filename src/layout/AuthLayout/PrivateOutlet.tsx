import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import {selectCurrentToken } from "../../redux/slice/authSlice";

export default function PrivateOutlet() {

  const token = useSelector(selectCurrentToken);

  return token? <Outlet/>: (
    <Navigate to="/auth/login"  />
  );
}
