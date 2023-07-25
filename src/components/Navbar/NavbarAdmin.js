import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from "../../assets/images/iitLogo.jpg"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const settings = [
  { label: 'Profile', link: '/profile' },
  { label: 'Account', link: '/account' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Logout', link: '/logout' },
];

export const HomeLink = styled(Link)`
  font-size: 21px;
  color: #1976d2;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

// StyledImg with reduced margin for mobile view
const StyledImg = styled("img")(({ theme }) => ({
  "borderRadius": "50%",
  "marginLeft": '6em', // Default margin for larger screens (PC view)
  [theme.breakpoints.down('sm')]: {
    "marginLeft": '3em', // Reduced margin for smaller screens (mobile view)
  },
}));

const TopAppBar = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // deletelater Implement  logout logic here
    console.log('Logout clicked');
    // Close the user menu
    handleCloseUserMenu();
    // Perform navigation to /logout
    window.location.href = '/';
  };

  return (
    <AppBar sx={{ position: "absolute" }}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <HomeLink to="/">
          <StyledImg
            src={HomeIcon}
            alt="IIT"
            sx={{
              width: 70,
              p: 1,
              position: "sticky",
              left: "1em",
            }}
          />
        </HomeLink>
        <Typography component="h1" variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          IIT KANPUR
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Toolbar disableGutters sx={{ ml: 2 }}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                // Render the menu items with links based on the settings array
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <Button component={Link} to={setting.link}>
                    {setting.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
