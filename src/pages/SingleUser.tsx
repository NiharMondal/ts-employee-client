import {
  LinearProgress,
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import CustomisedToaster from "../components/CustomisedToaster";
import Error from "../components/Error";
import { useUserQuery, useDeleteUserMutation } from "../redux/api/usersApi";

export default function SingleUser() {
  const navigate = useNavigate();
  const [deleteUser, { data: deleteData, }] =
    useDeleteUserMutation();

  const { userId } = useParams();

  const { data, error, isLoading, isSuccess } = useUserQuery(userId);


  const handleDelete = async (id: string) => {
    try {
      if (id) {
        await deleteUser(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (deleteData) {
      toast.success("User deleted successfully!");
      setTimeout(() => {
        navigate("/users");
      }, 1000);
    }
  }, [deleteData, navigate]);
  return (
    <React.Fragment>
      {isLoading && <LinearProgress sx={{ height: "5px", width: "100%" }} />}
      <Container sx={{ mx: "auto", mt: 4 }}>
        {error && <Error />}
        <CustomisedToaster />
        {isSuccess && (
          <Paper sx={{ p: 2 }}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              direction={{ xs: "column-reverse", sm: "row" }}
            >
              <Grid item xs={10} sm={9} md={6}>
                <Box component="div">
                  <Typography variant="h3" color="#3390FF">
                    Personal Information{" "}
                  </Typography>
                  <Typography variant="h6">
                    Fullname: {data.firstName} {data.lastName}
                  </Typography>
                  <Typography variant="h6">
                    Username: {data.userName}
                  </Typography>
                  <Typography variant="h6">Gender: {data.gender}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3} md={2}>
                <Box>
                  <Button>Edit</Button>
                  {data.createdAt && (
                    <Button onClick={() => handleDelete(data._id)}>
                      Delete
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{ my: { xs: 2, sm: 2, md: 3 } }}>
              <Grid item xs></Grid>
              <Grid item xs={12} sm={7} md={5}>
                <Box component="div">
                  <Typography
                    variant="h4"
                    color="#053e85"
                    sx={{ background: "#3390FF", pl: 2, py: 1 }}
                  >
                    Contact Information
                  </Typography>
                  <Typography variant="h6">
                    Email Address: {data.contactInfo.email}
                  </Typography>
                  <Typography variant="h6">
                    Phone Number: {data.contactInfo.phone}
                  </Typography>
                  <Typography variant="h6">
                    Website: {data.contactInfo.website}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs md={4}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs></Grid>
              <Grid item xs={12} sm={5} md={4}>
                <Box component="div">
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ background: "#64748B", pl: 2, py: 1 }}
                  >
                    Permanent Address
                  </Typography>
                  <Typography variant="h6">
                    City: {data.address.city}
                  </Typography>
                  <Typography variant="h6">
                    Country: {data.address.country}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs></Grid>
            </Grid>

            <Grid container sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
              <Grid item xs></Grid>
              <Grid item xs></Grid>
              <Grid item xs></Grid>
              <Grid item xs={12} sm={5} md={4}>
                <Box component="div">
                  <Typography
                    variant="h4"
                    color="#6afa34"
                    sx={{ background: "#934737", pl: 1, py: 1 }}
                  >
                    Other Details
                  </Typography>
                  <Typography variant="h6">User Role: {data.role}</Typography>
                  <Typography variant="h6">
                    Profession: {data.profession}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Container>
    </React.Fragment>
  );
}
