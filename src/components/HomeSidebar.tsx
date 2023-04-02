import { Box, Drawer } from '@mui/material'
import React,{useState} from 'react'

const HomeSidebar = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Drawer
        sx={{
          width: '250px',
          flexShrink: 10,
          "& .MuiDrawer-paper": {
            width: "250px",

            boxSizing: "border-box",
            mt:'90px'
          },
        }}
        variant="permanent"
      ></Drawer>
    </Box>
  );
}

export default HomeSidebar