import { Box, Typography, Toolbar, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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

  const [query, setQuery] = useState({});
  console.log(query);
  const [searchParams, setSearchParams] = useSearchParams(query);


  
  //handle change event

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
    setSearchParams({
      ...query,
      [name]: value,
    });
  };
  const { data: userData } = useGetAllUsersQuery(query);
  return (
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
        <Toolbar
          sx={{
            backgroundColor: "background.paper",
            mb: 2,
          }}
        >
          <IconButton
            color="inherit"
            size="medium"
            edge="start"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuOutlined />
          </IconButton>
          <Typography
            variant="h3"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            ALL USER
          </Typography>

          <Box component="div" />
        </Toolbar>
        <Button variant="contained" onClick={() => navigate("/admin/add")}>
          ADD USER
        </Button>
        <Box>
          <UserTable userData={userData} />
        </Box>
      </Box>
    </Box>
  );
}
