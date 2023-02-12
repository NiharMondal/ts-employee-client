import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  InputAdornment,
  Button,
  Box,
} from "@mui/material";
import { Form, Input } from "../components/custom-styles/Form";
import Logo from "../components/Logo";
import { LoginRequest, useLoginUserMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
import CustomisedToaster from "../components/CustomisedToaster";

export default function Login() {
  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [formState, setFormState] = useState<LoginRequest>({
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

  const showPass = () => {
    setShow(!show);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loginData = await loginUser(formState).unwrap();
      dispatch(setCredentials(loginData));
      navigate("/users");
    } catch (err: any) {
      toast.error(err.data.error);
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
              src="/mock-images/authImg/login.png"
              alt=""
              style={{
                width: "400px",
                height: "270px",
                borderRadius: 8,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Form onSubmit={handleLogin}>
              <Typography variant="h1" sx={{ py: 3 }}>
                Login your account
              </Typography>

              <Input
                onChange={handleChange}
                fullWidth
                label="Your email addrress"
                type="email"
                name="email"
              />
              <Input
                onChange={handleChange}
                fullWidth
                name="password"
                label="Your Password"
                id="outlined-end-adornment"
                type={show ? "text" : "password"}
                sx={{ my: 3 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {show ? (
                        <p onClick={showPass} style={{ cursor: "pointer" }}>
                          Hide
                        </p>
                      ) : (
                        <p onClick={showPass} style={{ cursor: "pointer" }}>
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
                sx={{ py: 2, color: "darker" }}
              >
                Log in
              </Button>
              <Typography
                variant="subtitle1"
                sx={{ my: 2, textAlign: "center" }}
              >
                Don't you have an account?{" "}
                <span
                  onClick={() => navigate("/auth/register")}
                  style={{ cursor: "pointer", color: "#005A95" }}
                >
                  Register here
                </span>{" "}
              </Typography>
            </Form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
