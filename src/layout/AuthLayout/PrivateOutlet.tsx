
import { Navigate, Outlet } from "react-router-dom";



export default function PrivateOutlet() {

  const token = sessionStorage.getItem("auth_token");

  return token? <Outlet/>: (
    <Navigate to="/auth/login"  />
  );
}
