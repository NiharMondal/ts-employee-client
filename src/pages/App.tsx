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
} from "@mui/material";

import { useAllUsersQuery } from "../redux/api/usersApi";

import Error from "../components/Error";
import { CustomTableCell } from "../components/custom-styles/TableCell";
import UserTable from "../components/UserTable";

export default function App() {
  const { data, error, isLoading } = useAllUsersQuery();

  return (
    <Box>
      {isLoading && <LinearProgress sx={{ height: "5px", width: "100%" }} />}
      <Container>
        {error && <Error />}
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "black" }}>
                {["ID", "Fullname", "Email", "Gender", "Role"].map(
                  (tHead, index) => (
                    <CustomTableCell align="right" key={index}>
                      {tHead}
                    </CustomTableCell>
                  )
                )}
                <CustomTableCell align="center">Action</CustomTableCell>
              </TableRow>
            </TableHead>

            {data && <UserTable data={data} />}
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
