import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
type AuthProps={
  name: string,
  email:string,
  token: string,
}

const initialState = {
  email: '',
  name: '',
  token: ''
}
export default function PrivateOutlet() {
  const [auth, setAuth] = useState<AuthProps>(initialState);
  return auth.token ? <Outlet/>: (
    <Navigate to="/auth/register"  />
  );
}
