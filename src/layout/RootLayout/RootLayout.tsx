import React, { useState } from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopAppbar from "./TopAppbar";
import SideBar from "./SideBar";

export default function RootLayout() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <React.Fragment>
      <TopAppbar handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box component="main" sx={{ p: 1 }}>
        <Outlet />
      </Box>
    </React.Fragment>
  );
}
