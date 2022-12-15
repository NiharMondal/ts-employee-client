import { styled } from "@mui/material/styles";
import {  NavLink  } from "react-router-dom";
export const LinkButton = styled(NavLink)(({ theme }) => ({
  padding: 2,
  textDecoration:'none',
  fontSize: '1.4rem',
  fontWeight: '1rem',
  color: 'red'


}));