import { Container, Grid, Typography, MenuItem, Button } from "@mui/material";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Form, Input } from "../components/custom-components/Form";

import { useAddUserMutation } from "../redux/api/usersApi";
import { selectOccupation, selectOptions, UserProps } from "../utils/types";
import CustomisedToaster from "../components/CustomisedToaster";

export default function AddUser() {
  const [userInfo, setUserInfo] = useState<UserProps>({} as UserProps);

  const [addUser, { data, isSuccess }] = useAddUserMutation();

  useEffect((): void => {
    if (data && isSuccess) {
      toast.success("User created successfully");
    }
  }, [data, isSuccess]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value as string,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addUser(userInfo).unwrap();
    } catch (err: any) {
      toast.error(err.data.error);
    }
  };
  return (
    <Container sx={{ mx: "auto", mt: 4 }}>
      <Form onSubmit={handleSubmit}>
        <CustomisedToaster />
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" sx={{ py: 3 }}>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
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
              <Grid item xs={12} md={12}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="gender"
                  select
                  label="Gender *"
                  id="gender"
                  variant="outlined"
                  defaultValue=""
                >
                  {["Male", "Female", "Ohters"].map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Input>
              </Grid>
            </Grid>
            <Typography variant="h2" sx={{ my: 3 }}>
              Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="city"
                  label="City *"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="country"
                  label="Country *"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ py: 3 }}>
              Contact Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="phone"
                  label="Phone *"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="website"
                  label="Website (ex: google.com)"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Typography variant="h2" sx={{ my: 3 }}>
              Role
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="role"
                  select
                  label="Select user role *"
                  variant="outlined"
                  defaultValue=""
                >
                  {selectOptions.map((value, index) => (
                    <MenuItem key={index} value={value.value}>
                      {value.label}
                    </MenuItem>
                  ))}
                </Input>
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  onChange={handleChange}
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="profession"
                  select
                  label="Profession *"
                  variant="outlined"
                  defaultValue=""
                >
                  {selectOccupation.map((value, index) => (
                    <MenuItem key={index} value={value.value}>
                      {value.label}
                    </MenuItem>
                  ))}
                </Input>
              </Grid>
              <Grid item xs={12} md={12} sx={{ mt: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}
