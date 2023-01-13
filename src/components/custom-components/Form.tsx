
import { styled } from "@mui/material/styles";import { TextField } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  background: theme.palette.neutral.main,
  padding: theme.spacing(2, 2, 6, 2),
  borderRadius: 8,
  color: theme.palette.neutral.contrastText,
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4,6),
  },
}));

export const Input = styled(TextField)(() => ({
  "& .MuiInputLabel-root, .MuiOutlinedInput-input": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "white",
  },
 " & .MuiFormHelperText-root":{
      color: 'red'
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
