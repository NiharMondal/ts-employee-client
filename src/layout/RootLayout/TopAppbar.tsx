import { AppBar, IconButton, Box, Toolbar, Button } from "@mui/material";
import Logo from "../../components/Logo";

export default function TopAppbar() {
  return (
    <AppBar >
      <Toolbar>
        <IconButton
          color="inherit"
          size="medium"
          edge="start"
          aria-label="menu"
        >
          <Logo illustraion="" />
        </IconButton>
        <Box component="div" sx={{ flexGrow: 1 }} />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
