import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';


const drawerWidth = 240;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
}));

const AppDrawer = ({ open, toggleDrawer, handleItemClick }) => {
  return (
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
  );
};

export default AppDrawer;
