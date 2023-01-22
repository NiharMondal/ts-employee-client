import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
type AuthProps={
  name: string,
  email:string,
  token: string,
}

const initialState = {
  email: '',
  name: 'nihar',
  token: ''
}
export default function PrivateOutlet() {
  const [auth, setAuth] = useState<AuthProps>(initialState);
  return auth.name ? <Outlet/>: (
    <Navigate to="/auth/register"  />
  );
}
