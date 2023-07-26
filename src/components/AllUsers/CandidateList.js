import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate, randomTraderName } from '@mui/x-data-grid-generator';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toast } from 'react-hot-toast';

export default function BasicEditingGrid() {
  const [rows, setRows] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    // Simulate loading data (you can replace this with your actual data fetching logic)
    const loadData = () => {
      const data = [
        {
          id: 1,
          name: randomTraderName(),
          age: 25,
          dateCreated: randomCreatedDate(),
          lastLogin: randomCreatedDate(),
          status: 'verified',
        },
        {
          id: 2,
          name: randomTraderName(),
          age: 36,
          dateCreated: randomCreatedDate(),
          lastLogin: randomCreatedDate(),
          status: 'inProgress',
        },
        {
          id: 3,
          name: randomTraderName(),
          age: 19,
          dateCreated: randomCreatedDate(),
          lastLogin: randomCreatedDate(),
          status: 'rejected',
        },
        {
          id: 4,
          name: randomTraderName(),
          age: 28,
          dateCreated: randomCreatedDate(),
          lastLogin: randomCreatedDate(),
          status: 'verified',
        },
        {
          id: 5,
          name: randomTraderName(),
          age: 23,
          dateCreated: randomCreatedDate(),
          lastLogin: randomCreatedDate(),
          status: 'inProgress',
        },
        // ... Add more rows here
      ];
      setRows(data);
    };

    loadData();
  }, []);

  const handleEditRow = (id) => {
    // Find the row to be edited and set its 'editable' field to true
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) =>
        row.id === id ? { ...row, editable: true } : row
      );
      return updatedRows;
    });
  };

  const handleEditInputChange = (id, field, value) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      );
      return updatedRows;
    });
  };

  const handleSaveChanges = (id) => {
    // Logic to save the changes for a specific row to the backend or perform further actions
    const rowToUpdate = rows.find((row) => row.id === id);
    toast.success(`Saved ID, ${id}`, {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: 'green',
        color: '#fff',
      },
    });
    console.log('Edited Row:', rowToUpdate);
    // Once the save action is complete, set the 'editable' field of the row back to false
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) =>
        row.id === id ? { ...row, editable: false } : row
      );
      return updatedRows;
    });
  };

  const handleDeleteRow = (id) => {
    // Logic to delete the row from the backend or perform further actions
    toast.error(`Deleted ID, ${id}`, {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: 'red',
        color: '#fff',
      },
    });
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 80, editable: false },
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', editable: true, align: 'left', headerAlign: 'left' },
    { field: 'dateCreated', headerName: 'Date Created', type: 'date', width: 180, editable: true },
    { field: 'lastLogin', headerName: 'UniversityId', type: 'date', width: 140, editable: true },
    {
      field: 'status',
      headerName: 'Status',
      width: 170,
      editable: false,
      align: 'left',
      headerAlign: 'center',
      renderCell: (params) => (
        <div>
          {getStatusAlert(params.value)}
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      editable: false,
      renderCell: (params) => (
        <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSaveChanges(params.row.id)}
                style={{ margin: 3 }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteRow(params.row.id)}
                style={{ margin: 3 }}
              >
                Delete
              </Button>

        </div>
      ),
    },
  ];

  const getStatusAlert = (status) => {
    switch (status) {
      case 'verified':
        return <Alert severity="success" sx={{ width: 170 }}>Verified</Alert>;
      case 'inProgress':
        return <Alert severity="warning" sx={{ width: 170 }}>In Progress</Alert>;
      case 'rejected':
        return <Alert severity="error" sx={{ width: 170 }}>Rejected</Alert>;
      default:
        return <Alert severity="info" sx={{ width: 10 }}>{status}</Alert>;
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={handleSearchInputChange}
        style={{ marginBottom: 16 }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        onEditCellChangeCommitted={(params) =>
          handleEditInputChange(params.id, params.field, params.value)
        }
      />
    </div>
  );
}
