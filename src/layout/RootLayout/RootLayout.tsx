import React, { useState } from "react";

import {  Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopAppbar from "./TopAppbar";
import SideBar from "./SideBar";

export default function RootLayout() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleClose = ()=>{
    setMobileOpen(!mobileOpen)
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <React.Fragment>
      <TopAppbar handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        mobileOpen={mobileOpen}
        handleClose={handleClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box  component="main" sx={{ p: 2}}>
        <Outlet />
      </Box>
    </React.Fragment>
  );
}
