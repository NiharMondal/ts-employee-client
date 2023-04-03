import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.primary.main,
  borderRadius: 8,
  padding: theme.spacing(2),
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 8),
  },
}));

export const Input = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(0.7, 0),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(1.3, 0),
  },
  "& .MuiInputLabel-root, .MuiOutlinedInput-input": {
    color: theme.palette.text.secondary,
  },
  "& label.Mui-focused": {
    color: "green",
  },
  " & .MuiFormHelperText-root": {
    color: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#702383",
    },
  },
}));
