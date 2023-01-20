import { Box } from "@mui/material";

import { Link } from "react-router-dom";
type LogoProps = {
  illustraion: string;
  handleClose?: ()=>void
};
export default function Logo({ illustraion,handleClose }: LogoProps) {
  return (
    <Link to="/">
      <Box
        component="img"
        sx={{ height: 40, width: 40 }}
        src={illustraion}
        onClick={handleClose}
      />
    </Link>
  );
}
