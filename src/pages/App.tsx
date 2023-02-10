import {
  LinearProgress,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Box,
  Paper,
  Typography,
  TableBody,
  Button,
  TableCell,
  Stack,
  Divider,
} from "@mui/material";
import CustomisedToaster from "../components/CustomisedToaster"
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAllUsersQuery, useDeleteUserMutation } from "../redux/api/usersApi";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { CustomTableCell } from "../components/custom-styles/TableCell";

export default function App() {
  const { data, error, isLoading } = useAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();
  //view single user record
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
      
      {isLoading && <LinearProgress sx={{ height: "5px", width: "100%" }} />}
      <Container>
        <CustomisedToaster/>
        {error && <Error />}
        <TableContainer component={Paper} sx={{ mt: 5 }}>
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
              {data &&
                data.map((user, index) => (
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
        {data && data.length === 0 && (
          <Typography textAlign="center" variant="h4" sx={{ py: 3 }}>
            There are no records
          </Typography>
        )}
      </Container>
    </Box>
  );
}
