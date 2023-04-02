import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopAppbar from "./TopAppbar";

export default function RootLayout() {
  return (
    <Box>
      <TopAppbar />
      <Box component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
