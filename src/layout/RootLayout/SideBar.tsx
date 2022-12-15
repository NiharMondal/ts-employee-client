import { Box, Toolbar, Drawer } from "@mui/material";
import Logo from "../../components/Logo";
import { DRAWER_WIDTH } from "../../utils/helper";

type SideBarProps = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

export default function SideBar({
  mobileOpen,
  handleDrawerToggle,
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
          },
        }}
      >
        <ul>
          <Toolbar>
            <Logo illustraion="/mock-images/logo.svg" />
          </Toolbar>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </Drawer>
    </Box>
  );
}
