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

export default function Login() {
  const nevigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const showPass = () => {
    setShow(!show);
  };
  return (
    <Container sx={{ mx: "auto", mt: 5 }}>
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
            <Form>
              <Typography variant="h1" sx={{ py: 3 }}>
                Login your account
              </Typography>

              <Input fullWidth label="Your email addrress" type="email" />
              <Input
                fullWidth
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
                  onClick={() => nevigate("/auth/register")}
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
