import { Box } from "@mui/material";

import { Link } from "react-router-dom";
type LogoProps = {
  illustraion: string;
  alt?: string;
};
export default function Logo({ illustraion, alt }: LogoProps) {
  return (
    <Link to="/">
      <Box
        component="img"
        sx={{ height: 40, width: 40 }}
        src={illustraion}
        alt={alt}
      />
    </Link>
  );
}
