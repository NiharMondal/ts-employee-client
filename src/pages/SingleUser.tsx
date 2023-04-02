import {
  LinearProgress,
  Container,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { useUserQuery } from "../redux/api/usersApi";

export default function SingleUser() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { data, error, isLoading, isSuccess } = useUserQuery(userId!);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      {isLoading && <LinearProgress sx={{ height: "5px", width: "100%" }} />}
      <Container sx={{ mx: "auto", mt: 4 }}>
        {error && <Error />}
        {data && isSuccess && (
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h1" sx={{ py: 1 }}>
              User Information
            </Typography>
            {!data.createdAt && (
              <Typography variant="subtitle1" sx={{ py: 1 }} color="red">
                You can not delete demo record!
              </Typography>
            )}
            <Divider sx={{ mb: 2 }} />

            <Typography variant="h4">
              Full name: {data.fullName}
            </Typography>
            <Typography variant="subtitle1">
              Email Address: {data.email}
            </Typography>
            <Typography variant="h5">User Name: {data.userName}</Typography>
            <Typography variant="h5">Gender: {data.gender}</Typography>
            <Typography variant="h5">Age: {data.age}</Typography>
            <Typography variant="h5">Role: {data.role}</Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              color="success"
              onClick={goBack}
            >
              Go Back
            </Button>
          </Paper>
        )}
      </Container>
    </React.Fragment>
  );
}
