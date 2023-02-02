import { Container, Grid, Typography,  Button } from "@mui/material";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Form, Input } from "../components/custom-components/Form";
import { useUpdateUserMutation } from "../redux/api/usersApi";
import {  TUserResponse } from "../utils/types";
import CustomisedToaster from "../components/CustomisedToaster";
import { useUserQuery } from "../redux/api/usersApi";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const { userId } = useParams();

  const { data } = useUserQuery(userId!);
  console.log(data);

  const [userInfo, setUserInfo] = useState<TUserResponse>({} as TUserResponse);

  useEffect(() => {
    setUserInfo({ ...data! });
  }, [data]);

  //hadle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  //handle update
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateUser(userInfo).unwrap();
      toast.success("User added successfully");
      navigate("/users");
    } catch (err: any) {
      toast.error(err.data.error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Form onSubmit={handleSubmit}>
        <CustomisedToaster />
        <Typography variant="h1" sx={{ py: 2 }}>
          Update Information
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Input
              onChange={handleChange}
              autoComplete="off"
              color="secondary"
              fullWidth
              name="firstName"
              label="First Name "
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
              label="Last Name "
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
              label="Your Email Address "
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
              label="Username (example: Bret) "
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
              label="Gender "
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
              label="Age "
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
              label="Role (User, Editor, Moderator) "
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
          Update User
        </Button>
      </Form>
    </Container>
  );
}
