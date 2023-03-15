import {
  Container,
  Box,
  Typography,
  MenuItem,
  Stack,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "../components/custom-styles/Form";
import Error from "../components/Error";

import UserTable from "../components/UserTable";
import { useGetAllUsersQuery } from "../redux/api/usersApi";

const gender = [
  { value: "", label: "Select Gender" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const role = [
  { value: "", label: "Select Role" },
  { value: "User", label: "User" },
  { value: "Editor", label: "Editor" },
  { value: "Moderator", label: "Moderator" },
];

export default function App() {
  const [query, setQuery] = useState({ gender: "", role: "" });
  const [searchParams, setSearchParams] = useSearchParams(query);

  const sex = searchParams.get("gender");
  const userRole = searchParams.get("role");

  //handle change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
    setSearchParams({
      ...query,
      [name]: value,
    });
  };

  const {
    data: userData,
    isLoading,
    error,
  } = useGetAllUsersQuery({
    gender: sex,
    role: userRole,
  });
  return (
    <Box>
      {isLoading && <LinearProgress sx={{ height: "5px", width: "100%" }} />}
      {error && <Error />}
      <Container>
        <Box sx={{ py: 2 }}>
          <Typography variant="h3">
            Filter Users According your need!
          </Typography>

          <Stack
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            sx={{ gap: { xs: 1, md: 2 } }}
          >
            <Input
              label="Selcet gender"
              variant="outlined"
              select
              fullWidth
              name="gender"
              value={query.gender}
              onChange={handleChange}
            >
              {gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Input>
            <Input
              label="User role"
              variant="outlined"
              name="role"
              select
              fullWidth
              value={query.role}
              onChange={handleChange}
            >
              {role.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Input>
          </Stack>
        </Box>
        <UserTable userData={userData} />
      </Container>
    </Box>
  );
}
