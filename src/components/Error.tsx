import { Box, Typography } from "@mui/material";


export default function Error() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexBasis: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "600px",
        width: "100%",
      }}
    >
      <div>
         <Typography variant="h4">Opps! Check your internet connection</Typography>

      </div>
    </Box>
  );
}
