import {  Typography } from "@mui/material";
type ErrorProps = {
  message: string
}
export default function Error({message}:ErrorProps) {
  return (
    <Typography variant="h3" align="center" py={6}>
      No data found!
    </Typography>
  );
}
