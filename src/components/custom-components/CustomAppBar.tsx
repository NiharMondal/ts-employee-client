import { styled, alpha } from "@mui/material/styles";
import { AppBar, IconButton, Typography as H6 } from "@mui/material";
import { Link } from "react-router-dom";

export const MyAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(3px)",
  WebkitBackdropFilter: "blur(3px)",
  // background: alpha(theme.palette.background.default, 0.8),
  color: theme.palette.primary.dark,
  // [theme.breakpoints.down('sm')]:{
  //   display: 'none'
  // }
})) as typeof AppBar;

export const CustomIconbutton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
    marginRight: 320,
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: 320,
  },
})) as typeof IconButton;

export const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}));
export const Typography = styled(H6)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));