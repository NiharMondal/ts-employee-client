import { Container, Grid, Typography, MenuItem, Button } from "@mui/material";
import { Form, Input } from "../components/custom-components/Form";
import { selectOccupation, selectOptions } from "../utils/helper";

export default function AddUser() {
  return (
    <Container sx={{ mx: "auto" }}>
      <Form>
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" sx={{ py: 3 }}>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Input
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="lastname"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
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
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="username"
                  label="Username(example: Bret) "
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="role"
                  select
                  label="Sex"
                  variant="outlined"
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
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="street"
                  label="Street"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  autoComplete="off"
                  fullWidth
                  color="secondary"
                  name="city"
                  label="City"
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
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="phone"
                  label="Phone"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
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
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="role"
                  select
                  label="Select user role"
                  variant="outlined"
                >
                  {selectOptions.map((value, index) => (
                    <MenuItem key={index} value={value.value}>
                      {value.value}
                    </MenuItem>
                  ))}
                </Input>
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  autoComplete="off"
                  color="secondary"
                  fullWidth
                  name="occupation"
                  select
                  label="Occupation"
                  variant="outlined"
                >
                  {selectOccupation.map((value, index) => (
                    <MenuItem key={index} value={value.value}>
                      {value.value}
                    </MenuItem>
                  ))}
                </Input>
              </Grid>
              <Grid item xs={12} md={12} sx={{mt:1}}>
                <Button variant="contained" fullWidth sx={{ py: 2 }}>
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
