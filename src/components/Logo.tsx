import { Box } from "@mui/material";

import { Link } from "react-router-dom";
type LogoProps ={
   illustraion: string
}
export default function Logo({illustraion}: LogoProps) {
  return (
    <Link to="/">
      <Box
        component="img"
        sx={{ height: 40, width: 40, ml: 1 }}
        src={illustraion}
      />
    </Link>
  );
}
