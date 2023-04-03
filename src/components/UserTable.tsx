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
import CustomisedToaster from "./CustomisedToaster";
import Error from "./Error";

type Props = {
  userData: TUserResponse[] | undefined;
  isError: boolean;
};
const UserTable = ({ userData, isError }: Props) => {
  // const latestData = userData?.reverse();
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
        await deleteUser(id).unwrap();
        toast.success("User deleted successfully!");
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
    <Box>
      <CustomisedToaster />

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
              <CustomTableCell align="left">ID</CustomTableCell>
              {[
                "Fullname",

                "Gender",
                "Role",
                "Status",
                "Country",
                "Salary",
              ].map((tHead, index) => (
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
                bgcolor: "white",
              },
            }}
          >
            {userData &&
              userData.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell scope="row" size="medium">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{user.fullName}</TableCell>

                  <TableCell align="right">{user.gender}</TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: `${
                        user.status === "Active"
                          ? "primary.main"
                          : "secondary.main"
                      }`,
                      fontWeight: "bold",
                    }}
                  >
                    {user.status}
                  </TableCell>
                  <TableCell align="right">{user.country}</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: `${
                        user.status === "Active"
                          ? "primary.main"
                          : "secondary.main"
                      }`,
                      fontWeight: "bold",
                    }}
                  >
                    $ {user.salary}
                  </TableCell>
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

                      <Button onClick={() => handleDelete(user._id)}>
                        <DeleteIcon sx={{ color: "secondary.main" }} />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isError && <Error message="Something went wrong!" />}
      {userData?.length === 0 && (
        <Typography variant="h3" align="center" py={6}>
          No data found!
        </Typography>
      )}
    </Box>
  );
};

export default UserTable;
