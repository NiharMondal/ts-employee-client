import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  background: theme.palette.neutral.main,
  color: theme.palette.neutral.contrastText,
  borderRadius: 8,
  padding: theme.spacing(2),
  marginBottom:theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 8),
    
    
  },
}));

export const Input = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(.7, 0),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(1.3,0),
  },
  "& .MuiInputLabel-root, .MuiOutlinedInput-input": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "white",
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
