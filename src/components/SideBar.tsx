import {
  Box,
  Drawer,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  
  Typography,
} from "@mui/material";

import { Stack } from "@mui/system";
import { DRAWER_WIDTH } from "../pages/App";
import { TQuery } from "../utils/types";

type SideBarProps = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  query: TQuery;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SideBar = ({
  mobileOpen,
  handleDrawerToggle,
  query,
  handleChange,
}: SideBarProps) => {
  const drawer = (
    <Box sx={{ pl: 5, pt: 2, overflowY: "auto", pb: 10 }}>
      <Box component="div" sx={{ mb: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Sort User according your need
        </Typography>
      </Box>
      <Stack direction="column" gap={2}>
        {/* gender */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              name="gender"
              value="Male"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.gender === "Male"}
                />
              }
              label="Male"
            />
            <FormControlLabel
              name="gender"
              value="Female"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.gender === "Female"}
                />
              }
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        {/* status */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              name="status"
              value="Active"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.status === "Active"}
                />
              }
              label="Active"
            />
            <FormControlLabel
              name="status"
              value="Inactive"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.status === "Inactive"}
                />
              }
              label="Inactive"
            />
          </RadioGroup>
        </FormControl>
        {/* role */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              name="role"
              value="User"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.role === "User"}
                />
              }
              label="User"
            />
            <FormControlLabel
              name="role"
              value="Editor"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.role === "Editor"}
                />
              }
              label="Editor"
            />
            <FormControlLabel
              name="role"
              value="Moderator"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.role === "Moderator"}
                />
              }
              label="Moderator"
            />
            <FormControlLabel
              name="role"
              value="Admin"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.role === "Admin"}
                />
              }
              label="Admin"
            />
          </RadioGroup>
        </FormControl>
        {/* country */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Country</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              name="country"
              value="USA"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.country === "USA"}
                />
              }
              label="USA"
            />
            <FormControlLabel
              name="country"
              value="UK"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.country === "UK"}
                />
              }
              label="UK"
            />
            <FormControlLabel
              name="country"
              value="Bangladesh"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.country === "Bangladesh"}
                />
              }
              label="Bangladesh"
            />
            <FormControlLabel
              name="country"
              value="India"
              control={
                <Radio
                  onChange={handleChange}
                  checked={query.country === "India"}
                />
              }
              label="India"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        //mobile operator
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            mt: "72px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
