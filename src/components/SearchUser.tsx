import { Box, MenuItem, Stack, Typography, Button } from "@mui/material";
import { Input } from "./custom-styles/Form";
import { useState } from "react";
import {useQueringUsersQuery} from '../redux/api/usersApi'
const gender = [
  { value: "All", label: "All" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const role = [
  { value: "", label: "Select Role" },
  { value: "User", label: "User" },
  { value: "Editor", label: "Editor" },
  { value: "Moderator", label: "Moderator" },
];
const SearchUser = () => {

  const [query, setQuery] = useState({
    gender: {
      Male: "",
      Female: "",
      All: "",
    },
    role: {
      User: "",
      Editor: "",
      Moderator: "",
    },
  });
     const { data } = useQueringUsersQuery(query);
     console.log(data);
     
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      [event.target.name]: event.target.value as string,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h2">Filter User</Typography>
      <form onSubmit={handleSubmit}>
        <Stack
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          sx={{ gap: { xs: 1, md: 2 } }}
        >
          <Input
            type="submit"
            label="Selcet gender"
            variant="outlined"
            select
            fullWidth
            name="gender"
            defaultValue=""
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
            defaultValue=""
            name="role"
            select
            fullWidth
            onChange={handleChange}
          >
            {role.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Input>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: { md: "400px" }, height: "50px" }}
          >
            Search
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SearchUser;
