import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableBody = ({ columns, rows, page, rowsPerPage }) => {
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleRows = rows.slice(startIndex, endIndex);

  return (
    <>
      {visibleRows.map((row) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === 'number' ? column.format(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
};

export default TableBody;
