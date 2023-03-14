import { Container, Box, Typography, MenuItem, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "../components/custom-styles/Form";

import UserTable from "../components/UserTable";

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
  console.log(query);
  const [userData, setUserData] = useState();

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

  useEffect(() => {
    async function fetchUserData() {
      fetch(
        `https://ts-crud-back-end.onrender.com/api/v1/user?gender=${sex}&role=${userRole}`
      )
        .then((res) => res.json())
        .then((uData) => setUserData(uData));
    }
    fetchUserData();
  }, [sex, userRole]);

  return (
    <Box>
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
