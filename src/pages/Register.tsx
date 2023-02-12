import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import { Form, Input } from "../components/custom-styles/Form";
import Logo from "../components/Logo";
import { RegisterRequest, useRegisterMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
import CustomisedToaster from "../components/CustomisedToaster";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { data, isSuccess, error, isError }] = useRegisterMutation();

  useEffect((): void => {
    if (error && isError) {
      toast.error(error as any);
    }
    if (data && isSuccess) {
      toast.success("User created successfully");
      navigate("/users");
    }
  }, [data, isSuccess, error, isError, navigate]);
  //show and hide password
  const [show, setShow] = useState(false);
  const showPass = () => {
    setShow(!show);
  };

  const [formState, setFormState] = useState<RegisterRequest>({
    username: "",
    email: "",
    password: "",
  });

  //handle change input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  //handle register user
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await register(formState).unwrap();
      dispatch(setCredentials(user));
    } catch (e: any) {
      toast.error(e.data.error);
    }
  };
  return (
    <Container sx={{ mx: "auto", mt: 5 }}>
      <CustomisedToaster />
      <Box component="div" sx={{ mb: { xs: 3, sm: 0 } }}>
        <Logo illustraion="/mock-images/logo.png" />
      </Box>
      <Box sx={{ background: "#64748B", p: { xs: 0, sm: 2 }, borderRadius: 2 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src="/mock-images/authImg/register.png"
              alt=""
              style={{ borderRadius: 8, width: "400px" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Form onSubmit={handleRegister}>
              <Typography variant="h1" sx={{ py: 2 }}>
                Register your account
              </Typography>

              <Input
                onChange={handleChange}
                fullWidth
                label="Fullname"
                type="text"
                name="username"
                autoComplete="off"
              />

              <Input
                onChange={handleChange}
                fullWidth
                label=" Email addrress"
                type="email"
                name="email"
                autoComplete="off"
              />

              <Input
                onChange={handleChange}
                fullWidth
                label="Your Password"
                id="outlined-end-adornment"
                autoComplete="off"
                type={show ? "text" : "password"}
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {show ? (
                        <p
                          onClick={showPass}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          Hide
                        </p>
                      ) : (
                        <p
                          onClick={showPass}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          Show
                        </p>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py: 2, color: "darker", mt: 1 }}
              >
                Register
              </Button>
              <Typography
                variant="subtitle1"
                sx={{ my: 2, textAlign: "center" }}
              >
                You have an account?{" "}
                <span
                  onClick={() => navigate("/auth/login")}
                  style={{ cursor: "pointer", color: "#005A95" }}
                >
                  Login
                </span>{" "}
              </Typography>
            </Form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
