import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
export default function AuthLayout() {
  return (
    <Box component="main" sx={{ p: 1 }}>
      <Outlet />
    </Box>
  );
}
