import { Container, Grid, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Form, Input } from "../components/custom-styles/Form";

import { useAddUserMutation } from "../redux/api/usersApi";
import CustomisedToaster from "../components/CustomisedToaster";
import { initialState } from "../utils/types";

export default function AddUser() {
  const [userInfo, setUserInfo] = useState(initialState);

  const [addUser, { data, isSuccess, error, isError }] = useAddUserMutation();

  //shows success and error message in ui
  useEffect((): void => {
    if (error && isError) {
      toast.error("Please provide every input field");
    }
    if (data && isSuccess) {
      toast.success("User created successfully");
    }
  }, [data, isSuccess, error, isError]);

  //hangle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value as string,
    });
  };

  //handle submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await addUser(userInfo);
    } catch (err: any) {
      toast.error(err.data.error);
    }

  };

  return (
    <Container sx={{ mt: 4 }}>
      <Form onSubmit={handleSubmit}>
        <CustomisedToaster />
        <Typography variant="h1" sx={{ py: 2 }}>
          Personal Information
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              color="secondary"
              fullWidth
              name="firstName"
              label="First Name *"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              color="secondary"
              name="lastName"
              label="Last Name *"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              type="email"
              color="secondary"
              name="email"
              label="Your Email Address *"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              color="secondary"
              name="userName"
              label="Username *(example: Bret) "
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              color="secondary"
              fullWidth
              name="gender"
              label="Gender *"
              id="gender"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              color="secondary"
              fullWidth
              name="age"
              label="Age *"
              id="age"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              color="secondary"
              fullWidth
              name="role"
              label="Role (User, Editor, Moderator) *"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ py: 2, mt: 2 }}
          type="submit"
        >
          Create User
        </Button>
      </Form>
    </Container>
  );
}
