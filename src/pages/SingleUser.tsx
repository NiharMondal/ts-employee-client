import {
  LinearProgress,
  Container,
  Typography,
  Button,
  CardContent,
  Card,
  Divider,
  CardHeader,
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
      {isLoading && <LinearProgress />}

      <Container sx={{ mx: "auto", mt: 4 }}>
        {error && <Error message="Something went wrong!" />}

        {data && isSuccess && (
          <Card sx={{ p: 3, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                USER INFORMATION
              </Typography>
              <Divider />
              <CardHeader
                title={`Name: ${data.fullName}`}
                subheader={`Email: ${data.email}`}
              />

              <Typography variant="body1">User Role: {data.role}</Typography>
              <Typography variant="body1">Country: {data.country}</Typography>
              <Typography variant="body1">Gender: {data.gender}</Typography>
              <Typography variant="body1">Age: {data.age}</Typography>
              <Typography variant="subtitle1">
                Salary: ${data.salary}
              </Typography>
              <Typography variant="body1">Status: {data.status}</Typography>
              <Typography variant="body1">Gender: {data.gender}</Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              color="success"
              onClick={goBack}
            >
              Go Back
            </Button>
          </Card>
        )}
      </Container>
    </React.Fragment>
  );
}
