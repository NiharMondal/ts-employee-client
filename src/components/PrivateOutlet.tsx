import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
type AuthProps={
  name: string,
  email:string
}
export default function PrivateOutlet() {
  const [auth,setAuth] = useState<AuthProps>({name:'nihar',email:''});
  return auth.name ? <Outlet/>: (
    <Navigate to="/auth/register"  />
  );
}
