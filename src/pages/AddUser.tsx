import { Container, Grid, Typography, Button, MenuItem } from "@mui/material";
import { toast } from "react-toastify";
import {  useState } from "react";
import { Form, Input } from "../components/custom-styles/Form";

import { useAddUserMutation } from "../redux/api/usersApi";
import CustomisedToaster from "../components/CustomisedToaster";
import { initialState } from "../utils/types";

export default function AddUser() {
  const [userInfo, setUserInfo] = useState(initialState);

  const [addUser] = useAddUserMutation();


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
      await addUser(userInfo).unwrap();
      toast.success("User created successfully");
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <Container>
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
              name="fullName"
              label="Fullname *"
              value={userInfo.fullName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              fullWidth
              color="secondary"
              name="status"
              select
              label="Select user role *"
              value={userInfo.status}
            >
              {["Active", "Inactive"].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              fullWidth
              type="email"
              color="secondary"
              name="email"
              label="Your Email Address *"
              variant="outlined"
              value={userInfo.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              color="secondary"
              name="country"
              select
              label="Select country *"
              value={userInfo.country}
            >
              {["Bangladesh", "India", "USA", "UK"].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              color="secondary"
              fullWidth
              name="gender"
              label="Gender *"
              select
              value={userInfo.gender}
            >
              {["Male", "Female"].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              type="number"
              color="secondary"
              fullWidth
              name="age"
              label="Age *"
              value={userInfo.age}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              color="secondary"
              fullWidth
              name="role"
              label="Role *"
              select
              value={userInfo.role}
            >
              {["User", "Moderator", "Editor", "Admin"].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              type="number"
              color="secondary"
              fullWidth
              name="salary"
              label="Salary *"
              value={userInfo.salary}
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
