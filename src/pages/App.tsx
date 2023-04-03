import {
  Box,
  IconButton,
  Button,
  Typography,
  LinearProgress,
} from "@mui/material";
import React, { useState } from "react";

import { MenuOutlined } from "@mui/icons-material";
import UserTable from "../components/UserTable";
import { useGetAllUsersQuery } from "../redux/api/usersApi";
import SideBar from "../components/SideBar";
import { TQuery } from "../utils/types";

import { useNavigate } from "react-router-dom";


export const DRAWER_WIDTH = 270;

export default function App() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //query state
  const [query, setQuery] = useState<TQuery>({
    gender: "",
    role: "",
    status: "",
    country: "",
  });

  //handle change event

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const { data: userData, isLoading, isError } = useGetAllUsersQuery(query);

  return (
    <React.Fragment>
      {isLoading && <LinearProgress />}

      <Box
        component="div"
        sx={{
          display: "flex",
        }}
      >
        <SideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          query={query}
          handleChange={handleChange}
        />

        <Box
          component="div"
          sx={{
            flexGrow: 1,
            width: { sm: `clac(100%-${DRAWER_WIDTH})px` },
            p: 1,
            pt: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between", md: "space-around" },
              py: 1,
              borderRadius: 1,
            }}
          >
            <IconButton
              color="inherit"
              size="medium"
              edge="start"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" }, pl: 4 }}
              onClick={handleDrawerToggle}
            >
              <MenuOutlined />
            </IconButton>

            <Typography variant="subtitle1">
              TOTAL USER: {userData?.length}
            </Typography>
          </Box>
          <Box sx={{ my: 2, alignItems: "center" }}>
            <Button variant="contained" onClick={() => navigate("/admin/add")}>
              ADD USER
            </Button>
          </Box>
          <Box>
            <UserTable userData={userData} isError={isError} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
