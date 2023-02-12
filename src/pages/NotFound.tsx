import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  };
  return (
    <Box sx={{ position: "relative" }}>
      <img
        src="/mock-images/not-found.jpg"
        alt=""
        style={{ width: "100%", height: "700px" }}
      />
      <Button
        sx={{ position: "absolute", top: "20%", left: "50%" }}
        variant="contained"
        onClick={goBack}
      >
        Go Back
      </Button>
    </Box>
  );
}
