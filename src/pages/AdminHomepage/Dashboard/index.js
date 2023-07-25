import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';


import Navbar from '../../../components/Navbar/NavbarAdmin';
import Sidenav from '../../../components/Sidenav/Sidenav';
import DashboardLayout from './Dashboard';

const drawerWidth = 240;

const defaultTheme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleItemClick = (component) => {
    setActiveComponent(component);
    switch (component) {
      case 'admindashboard':
        navigate('/admindashboard');
        break;
      case 'voters':
        navigate('/admindashboard/allvoters');
        break;
      case 'candidates':
        // Update the route for candidates, if available
        navigate('/admindashboard/allcandidates');
        break;
      case 'elections':
        // Update the route for elections, if available
        navigate('/admindashboard/elections');
        break;
      case 'result':
        // Update the route for result, if available
        navigate('/admindashboard/result');
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar/>
        <Sidenav  open={open} toggleDrawer={toggleDrawer} handleItemClick={handleItemClick} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container sx={{ mt: 16, ml:2}}>
            <Grid container spacing={3}>
                <DashboardLayout/>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
