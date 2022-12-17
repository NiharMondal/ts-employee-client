import { styled } from "@mui/material/styles";
import { NavLink as RouterLink } from 'react-router-dom';
export const NavLink = styled(RouterLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  
  padding: theme.spacing(1, 2),
  "&.active": {
    background: "white",
    fontWeight: "bolder",
    borderRadius: 4,
    color: "#64748B",
  },
}));


