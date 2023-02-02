import {
  Button,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  Divider,
} from "@mui/material";
import { toast } from "react-hot-toast";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { TUserResponse } from "../utils/types";
import { useDeleteUserMutation } from "../redux/api/usersApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type UserProps = {
  data: TUserResponse[];
};

export default function UserTable({ data }: UserProps) {
  const [deleteUser, { data: deleteData, isSuccess, error: deleteError }] =
    useDeleteUserMutation();
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
      if (id) {
        await deleteUser(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //shows success and error message in ui
  useEffect(() => {
    if (deleteData && isSuccess) {
      toast.success("You have successfully deleted record");
    }
    if (deleteError) {
      toast.error("Something went wrong!");
    }
  }, [deleteData, isSuccess, deleteError]);

  return (
    <TableBody>
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
                <Button>
                  <VisibilityIcon />
                </Button>
                <Button>
                  <EditIcon />
                </Button>
                {
                  user.createdAt&& <Button onClick={() => handleDelete(user._id)}>
                  <DeleteIcon />
                </Button>
                }
              </Stack>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}
