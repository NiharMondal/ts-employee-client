import { Box, Grid, Typography, LinearProgress } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useAllUsersQuery } from "../redux/api/usersApi";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";

export default function App() {
  const navigate = useNavigate();
  const { data, error, isLoading, isSuccess } = useAllUsersQuery();

  const readMore = (id: string) => {
    if (typeof id !== "undefined") {
      navigate(`${id}`);
    }
  };

  return (
    <Box>
      {isLoading && <LinearProgress sx={{ height: "5px", width: "100%" }} />}
      <Grid container spacing={3} sx={{ p: 2 }} justifyContent="center">
        {error && <Error />}
        {isSuccess &&
          data?.map((user, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">
                  Fullname: {user.firstName} {user.lastName}
                </Typography>

                <Typography variant="body1">
                  Gender: {user.gender}
                </Typography>

                <Typography variant="subtitle1">
                  Country: {user.address.country}
                </Typography>
                <Typography variant="subtitle1" color='white' sx={{ background: "#64748B",pl:1 }}>
                  Role: {user.role}
                </Typography>
                <Typography
                  onClick={() => readMore(user._id)}
                  variant="subtitle1"
                  sx={{
                    textAlign: "right",
                    cursor: "pointer",
                    color: "#053e85",
                  }}
                >
                  Read more
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
