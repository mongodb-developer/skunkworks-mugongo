import { connectToDatabase } from "../util/mongodb";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Table Pagination
import TablePagination from '@mui/material/TablePagination';

//Table Pagination State Defination


// Table Styling Functions
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//Columns Rendering For Sticky Header
const columns = [
    { id: 'Sno',
     label: 'Sno', 
     minWidth: 100 
    },
    { id: 'Groups', 
      label: 'Groups', 
      align: 'center',
      minWidth: 100
    },
    {
      id: 'Established',
      label: 'Established',
      minWidth: 100,
      align: 'center',
    },
    {
      id: 'First Event Date',
      label: 'First Event Date',
      minWidth: 100,
      align: 'center',
    },
    {
        id: 'Quarter of First Event',
        label: 'Quarter of First Event',
        minWidth: 100,
        align: 'center',
      },
    {
      id: 'Number of events',
      label: 'Number of events',
      minWidth: 100,
      align: 'center',
    },
      {
        id: 'Last Event Date',
        label: 'Last Event Dater',
        minWidth: 100,
        align: 'center',
      },
      {
        id: 'Number of Active Organizer',
        label: 'Number of Active Organizer',
        minWidth: 100,
        align: 'center',
      },
      {
        id: 'Active',
        label: 'Active/Inactive',
        minWidth: 100,
        align: 'center',
      },
  ];


export default function Events({ Events }) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, Events.length - page * rowsPerPage);

    return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
        <TableBody>
          {Events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((event, index) => (
            <StyledTableRow
              key={event._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">{event.Sno}</StyledTableCell>
              <StyledTableCell align="center">{event.groups}</StyledTableCell>
              <StyledTableCell align="center">{event.established}</StyledTableCell>
              <StyledTableCell align="center">{event.firstEventDate}</StyledTableCell>
              <StyledTableCell align="center">{event.quarterOfFirstEvent}</StyledTableCell>
              <StyledTableCell align="center">{event.numberOfEvents}</StyledTableCell>
              <StyledTableCell align="center">{event.lastEventDate}</StyledTableCell>
              <StyledTableCell align="center">{event.numberOfActiveOrganizers}</StyledTableCell>
              <StyledTableCell align="center">{event.isActive}</StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10]}
      component="div"
      count={Events.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
    </Paper>
  );
}

// Getting Server Side Props - Connecting to MongoDB and fetching documents.
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const Groups = await db
    .collection("group")
    .find({})
    .sort({Sno: 1})
    .limit(20)
    .toArray();

  return {
    props: {
      Events: JSON.parse(JSON.stringify(Groups)),
    },
  };
}
