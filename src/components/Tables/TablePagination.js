import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const TablePaginationComponent = ({ count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => {
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default TablePaginationComponent;
