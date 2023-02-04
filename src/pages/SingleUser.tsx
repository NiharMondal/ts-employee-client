import {
  LinearProgress,
  Container,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { useParams, Link } from "react-router-dom";
import Error from "../components/Error";
import { useUserQuery } from "../redux/api/usersApi";

export default function SingleUser() {
  const { userId } = useParams();
  const { data, error, isLoading, isSuccess } = useUserQuery(userId!);

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
              Full name: {data.firstName}
              <span style={{marginLeft: '5px'}}>{data.lastName}</span>
            </Typography>
            <Typography variant="subtitle1">
              Email Address: {data.email}
            </Typography>
            <Typography variant="h5">User Name: {data.userName}</Typography>
            <Typography variant="h5">Gender: {data.gender}</Typography>
            <Typography variant="h5">Age: {data.age}</Typography>
            <Typography variant="h5">Role: {data.role}</Typography>
            <Button variant="contained" sx={{ mt: 2 }} color="success">
              <Link to="/users">Go Back</Link>
            </Button>
          </Paper>
        )}
      </Container>
    </React.Fragment>
  );
}
