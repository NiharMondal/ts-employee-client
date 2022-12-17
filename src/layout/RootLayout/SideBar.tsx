import { Box, Toolbar, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { DRAWER_WIDTH } from "../../utils/helper";

type SideBarProps = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  handleClose: () => void;
};

export default function SideBar({
  mobileOpen,
  handleDrawerToggle,
  handleClose,
}: SideBarProps) {
  return (
    <Box component="div" sx={{ width: { xs: DRAWER_WIDTH, sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },

          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            padding: 2,
          },
        }}
      >
        <Box component="div" >
          <Toolbar>
            /
            <Logo
              illustraion="/mock-images/logo.svg"
              handleClose={handleClose}
            />
          </Toolbar>
          <Box component="div">
            <Link to="/admin/add" onClick={handleClose}>
              Add User
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
