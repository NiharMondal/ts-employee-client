import { TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  color: "whitesmoke",
  fontWeight: "bold",
  padding: theme.spacing(2),
}));
