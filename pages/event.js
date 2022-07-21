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
    { id: 'Title',
     label: 'Title', 
     minWidth: 170 
    },
    { id: 'Group', 
      label: 'Group', 
      align: 'right',
      minWidth: 100
    },
    {
      id: 'Type',
      label: 'Type',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Date',
      label: 'Date',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Attendees',
      label: 'Attendees',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'Expenditure',
        label: 'Expenditure',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
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
              <StyledTableCell component="th" scope="row">{event.Title}</StyledTableCell>
              <StyledTableCell align="right">{event.Group}</StyledTableCell>
              <StyledTableCell align="right">{event.Event}</StyledTableCell>
              <StyledTableCell align="right">{event.Date}</StyledTableCell>
              <StyledTableCell align="right">{event.Attendees}</StyledTableCell>
              <StyledTableCell align="right">{event.Budget}</StyledTableCell>
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
      rowsPerPageOptions={[5, 10, 25]}
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
    .collection("event")
    .find({})
    .sort({Date: 1})
    .limit(20)
    .toArray();

  return {
    props: {
      Events: JSON.parse(JSON.stringify(Groups)),
    },
  };
}
