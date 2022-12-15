import { Box, Toolbar, Button, IconButton, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MyAppBar,
  CustomIconbutton,
  CustomLink,
  Typography,
} from "./custom-components/CustomAppBar";

export default function CustomAppbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static">
        <Toolbar color="success">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <CustomIconbutton>
            <MenuIcon />
          </CustomIconbutton>
          <Typography sx={{ flexGrow: 1 }}>
            <CustomLink to="/">Home</CustomLink>
          </Typography>

          <Typography sx={{ mx: 1, flexGrow: 1 }}>
            <CustomLink to="admin/add">Add User</CustomLink>
          </Typography>

          <Button>
            <CustomLink to="/auth/register">Register</CustomLink>
          </Button>
        </Toolbar>
      </MyAppBar>
    </Box>
  );
}
