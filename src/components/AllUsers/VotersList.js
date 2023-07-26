import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '../Tables/TableBody';
import TableHeader from '../Tables/TableHeader';
import TablePaginationComponent from '../Tables/TablePagination';
import CandidateEditButton from "../Buttons/CandidateEditButton"
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'ID', label: 'Univeristy ID', minWidth: 100 },
  {
    id: 'University',
    label: 'University',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Verified',
    label: 'Verified',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Edit',
    label: 'Edit',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  createData('John Doe', 'JD001', 'University A', true),
  createData('Jane Smith', 'JS002', 'University B', false),
  // Add more rows as needed
];

function createData(name, ID, university, verified) {
  return { name, ID, University: university, Verified: verified ? 'Yes' : 'No' };
}

export default function Election() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableHeader columns={columns} />
          </TableHead>
          <TableBody columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} />
        </Table>
      </TableContainer>
      <TablePaginationComponent
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
