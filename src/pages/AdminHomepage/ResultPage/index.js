// Dashboard.js
import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import  AppBar  from '../../../components/Navbar/NavbarAdmin';
import CandidateResult from "../../../components/VotersList/VotersList";
import AnnounceResult from "./Result"


const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const toggleDrawer = () => {
    setOpen(!open);
  };

 
  const handleItemClick = (component) => {
    // Navigate to the corresponding route
    switch (component) {
      case 'admindashboard':
        navigate('/admindashboard');
        break;
      case 'voters':
        navigate('/admindashboard/allvoters');
        break;
      case 'candidates':
        navigate('/admindashboard/allcandidates');
        break;
      case 'elections':
        navigate('/admindashboard/elections');
        break;
      case 'result':
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
      <AppBar/>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {/* Manually provide the navigation */}
            <ListItemButton onClick={() => handleItemClick('admindashboard')}>
              <ListItemIcon>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('candidates')}>
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Candidates " />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('voters')}>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Voters " />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('elections')}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Election " />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('result')}>
              <ListItemIcon>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Results" />
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
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
          <Toolbar />
          <Container  sx={{m: 2, mt: 8, }}>
            <Grid container spacing={3}>
              <AnnounceResult/>
            </Grid>
          </Container>
          <Container  sx={{m: 2, mt: 8, }}>
            <Grid container spacing={3}>
              <CandidateResult/>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
