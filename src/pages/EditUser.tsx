import { Container, Grid, Typography, Button, Stack } from "@mui/material";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Form, Input } from "../components/custom-styles/Form";
import { useUpdateUserMutation } from "../redux/api/usersApi";
import { TUserResponse } from "../utils/types";
import CustomisedToaster from "../components/CustomisedToaster";
import { useUserQuery } from "../redux/api/usersApi";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditUser() {
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const { userId } = useParams();

  const { data } = useUserQuery(userId!);

  const [userInfo, setUserInfo] = useState<TUserResponse>({}as TUserResponse);

  useEffect(() => {
    setUserInfo({ ...data! });
  }, [data]);

  //hadle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  //handle update
  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateUser(userInfo);

      toast.success("User Updated successfully!");
      setTimeout(() => {
        navigate("/users");
      }, 2000);
    } catch (err: any) {
      toast.error(err.data.error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Form onSubmit={handleUpdate}>
        <CustomisedToaster />
        <Stack sx={{ pb: 3, justifyContent: "space-between" }} direction="row">
          <Typography variant="h1">Update Information</Typography>
          <Button variant="contained">
            <Link to="/users">Cancel</Link>
          </Button>
        </Stack>
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
              value={userInfo?.fullName || ""}
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
              value={userInfo?.email }
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
              value={userInfo?.userName || ""}
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
              value={userInfo?.gender || ""}
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
              value={ userInfo?.age || ""}
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
              value={ userInfo?.role || ""}
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
