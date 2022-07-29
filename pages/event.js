import { connectToDatabase } from "../util/mongodb";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Table Pagination
import TablePagination from "@mui/material/TablePagination";
import FooterLinks from "../components/FooterLinks";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//Columns Rendering For Sticky Header
const columns = [
  {
    id: "Title",
    label: "Title",
    minWidth: 100,
  },
  {
    id: "Group",
    label: "Group",
    align: "center",
    minWidth: 100,
  },
  {
    id: "Type",
    label: "Type",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Date",
    label: "Date",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Attendees",
    label: "Attendees",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Expenditure",
    label: "Expenditure",
    minWidth: 100,
    align: "center",
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
    <main>
      <img src="./mug.svg" alt="Mugongo" width="410" height="120" />{" "}
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
            {Events.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((event, index) => (
              <StyledTableRow
                key={event._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {event.title}
                </StyledTableCell>
                <StyledTableCell align="center">{event.group}</StyledTableCell>
                <StyledTableCell align="center">{event.event}</StyledTableCell>
                <StyledTableCell align="center">
                  {event.date
                    ? event.date.toLocaleString().substring(0, 10)
                    : ""}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {event.attendees}
                </StyledTableCell>
                <StyledTableCell align="center">{event.budget}</StyledTableCell>
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
      <style jsx>{`
        main {
          padding: 1rem 1rem 1rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #d1e0d5;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #ffffff;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #ffffff;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          min-width: 500px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          flex-basis: 100%;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: row;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <FooterLinks />
      <footer>
        <a href="https://mongodb.com" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/mug.svg" alt="MongoDB Logo" className="logo" />
        </a>
      </footer>
    </main>
  );
}

// Getting Server Side Props - Connecting to MongoDB and fetching documents.
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const Groups = await db
    .collection("event")
    .find({})
    .sort({ _id: 1 })
    .toArray();

  return {
    props: {
      Events: JSON.parse(JSON.stringify(Groups)),
    },
  };
}
