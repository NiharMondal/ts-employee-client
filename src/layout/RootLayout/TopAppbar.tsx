import {
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "../../components/CustomLink";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

//props type
type TopBarProps = {
  handleDrawerToggle: () => void;
};

export default function TopAppbar({ handleDrawerToggle }: TopBarProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = JSON.parse(sessionStorage.getItem("auth_token") || "{}");

  const slicedPart = sessionUser?.user?.username.slice(0, 1);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
     dispatch(logout());
    navigate("/auth/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#64748B" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <NavLink to="/users">HOME</NavLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <NavLink to="/admin/add">ADD USER</NavLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }} />
          <Box>
            {sessionUser.token ? (
              <React.Fragment>
                <Avatar
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  sx={{ cursor: "pointer", color: "cyan", background: "blue" }}
                >
                  {slicedPart?.toUpperCase()}
                </Avatar>
                <Menu
                  sx={{
                    mt: "37px",
                    "& .MuiPaper-root": {
                      p: 1,
                      width: 180,
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Typography variant="subtitle1">
                    Welcome, {sessionUser.user.username}{" "}
                  </Typography>
                  <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <Typography>
                <Link to="/auth/login">Login</Link>
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

