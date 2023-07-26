import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

export const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    zIndex: theme.zIndex.drawer,
    boxShadow: '4px 0 16px rgba(0, 0, 0, 0.2)', // Add box-shadow to create the raised effect
    transform: `translateX(${open ? 0 : -drawerWidth}px)`, // Use transform to animate the drawer open/close
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

export const NavLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const DrawerHeader = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  px: [1],
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(3), // Add some padding to the left to create space between icon and text
    paddingRight: theme.spacing(3), // Add some padding to the right for better appearance
    height: 56, // Set a fixed height for each menu item to maintain consistency
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white, // Change text color on hover for better visibility
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'auto', // Set minimum width for the icon to avoid stretching
      marginRight: theme.spacing(2), // Add some margin to the right of the icon for spacing
    },
    '& .MuiListItemText-root': {
      whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    },
  }));

  
  
  
  
  
