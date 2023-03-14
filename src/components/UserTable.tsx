import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Box,
  Paper,
  TableBody,
  Button,
  TableCell,
  Stack,
  Divider,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomTableCell } from "./custom-styles/TableCell";
import { Link, useNavigate } from "react-router-dom";
import { TUserResponse } from "../utils/types";
import { useDeleteUserMutation } from "../redux/api/usersApi";
import { toast } from "react-toastify";

type Props = {
  userData: TUserResponse[] | undefined;
};
const UserTable = ({ userData }: Props) => {
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();

  //see single user info
  const readMore = (id: string) => {
    if (typeof id !== "undefined") {
      navigate(`${id}`);
    }
  };

  //handle delete user record
  const handleDelete = async (id: string) => {
    try {
      if (window.confirm("Do you want to delete this record?")) {
        await deleteUser(id);
        toast.success("User deleted successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
              <CustomTableCell align="left">ID</CustomTableCell>
              {["Fullname", "Email", "Gender", "Role"].map((tHead, index) => (
                <CustomTableCell align="right" key={index}>
                  {tHead}
                </CustomTableCell>
              ))}
              <CustomTableCell align="center">Action</CustomTableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& .MuiTableRow-root:hover": {
                bgcolor: "whiteSmoke",
              },
            }}
          >
            {userData &&
              userData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell scope="row" size="medium">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">
                    {user.firstName} <span>{user.lastName}</span>{" "}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.gender}</TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      divider={<Divider orientation="vertical" flexItem />}
                    >
                      <Button onClick={() => readMore(user._id)}>
                        <VisibilityIcon />
                      </Button>
                      <Button>
                        <Link to={`/admin/edit/${user._id}`}>
                          <EditIcon />
                        </Link>
                      </Button>
                      {user.createdAt && (
                        <Button onClick={() => handleDelete(user._id)}>
                          <DeleteIcon />
                        </Button>
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {userData?.length === 0 && (
        <Typography variant="h3" align="center" py={6}>
          No data found!
        </Typography>
      )}
    </Box>
  );
};

export default UserTable;
