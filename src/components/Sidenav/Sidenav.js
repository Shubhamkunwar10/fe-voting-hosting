import React from 'react';
import { StyledDrawer, NavLink, DrawerHeader, StyledIconButton, StyledListItemButton } from './Sidenav.css';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Sidenav = ({ open, toggleDrawer, handleItemClick }) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <StyledIconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </StyledIconButton>
      </DrawerHeader>
      <Divider />
      <List component="nav">
        <StyledListItemButton onClick={() => handleItemClick('admindashboard')}>
          <ListItemIcon>
            <SpaceDashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledListItemButton>
        <StyledListItemButton onClick={() => handleItemClick('candidates')}>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Candidates " />
        </StyledListItemButton>
        <StyledListItemButton onClick={() => handleItemClick('voters')}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Voters " />
        </StyledListItemButton>
        <StyledListItemButton onClick={() => handleItemClick('elections')}>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Election " />
        </StyledListItemButton>
        <StyledListItemButton onClick={() => handleItemClick('result')}>
          <ListItemIcon>
            <SpaceDashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Results" />
        </StyledListItemButton>
        <Divider sx={{ my: 1 }} />
      </List>
    </StyledDrawer>
  );
};

export default Sidenav;
