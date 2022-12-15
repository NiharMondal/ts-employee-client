import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateOutlet() {
  const [auth] = useState(true);
  return auth ? <Outlet/>: (
    <Navigate to="/auth/login"  />
  );
}
