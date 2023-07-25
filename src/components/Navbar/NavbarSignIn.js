import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import profilePic from "./image4.webp"
import {
  NavbarContainer,
  Logo,
  MenuItem,
  HoverMenuItem,
  HomeLink,
  MenuItemLink,
  Avatar,
  ProfileMenu,
  DiscoverMenu,
} from './Navbar.css';

/**
 * Navbar component to display the navigation bar at the top of the application.
 * It includes menu items for Home, Discover, and Profile with submenus.
 *
 * @param {string} email - The user's email address for the Profile menu.
 */
const Navbar = ({ email }) => {
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);
  const [isDiscoverMenuVisible, setDiscoverMenuVisible] = useState(false);
  const navigate = useNavigate();

  /**
   * Toggle the visibility of the Profile menu.
   */
  const handleProfileMenuToggle = () => {
    setProfileMenuVisible(!isProfileMenuVisible);
  };

  /**
   * Toggle the visibility of the Discover menu.
   */
  const handleDiscoverMenuToggle = () => {
    setDiscoverMenuVisible(!isDiscoverMenuVisible);
  };

  /**
   * Hide the Discover menu when the mouse leaves the menu area.
   */
  const handleMenuLeave = () => {
    setDiscoverMenuVisible(false);
  };

  /**
   * Hide the Profile menu when the mouse leaves the menu area.
   */
  const handleProfileMenuLeave = () => {
    setProfileMenuVisible(false);
  };

  /**
   * Handle user sign-out.
   * It sends a POST request to the server to clear the JWT token and navigates the user to the sign-in page.
   */
  const handleSignOut = async () => {
    try {
      await axios.post('/signout');
      document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle error if necessary
    }
  };

  return (
    <NavbarContainer>
      <Logo src="https://as2.ftcdn.net/v2/jpg/05/07/23/99/1000_F_507239973_71Xx9kMFtqx0Kl8bZOoOQdRuJfGYVotz.jpg" />
      <HomeLink to="/">Home</HomeLink>
      <MenuItem onMouseEnter={handleDiscoverMenuToggle} onMouseLeave={handleMenuLeave}>
        Discover
        <DiscoverMenu visible={isDiscoverMenuVisible}>
          <HoverMenuItem>
            <img src="https://as2.ftcdn.net/v2/jpg/05/07/23/99/1000_F_507239973_71Xx9kMFtqx0Kl8bZOoOQdRuJfGYVotz.jpg" height="15" alt="react" />
            <a href="https://github.com/facebook/react">React</a>
          </HoverMenuItem>
          <HoverMenuItem>
            <img src="https://as2.ftcdn.net/v2/jpg/05/07/23/99/1000_F_507239973_71Xx9kMFtqx0Kl8bZOoOQdRuJfGYVotz.jpg" height="15" alt="react site nav" />
            <a href="https://github.com/facebook/react">React</a>
          </HoverMenuItem>
        </DiscoverMenu>
      </MenuItem>
      <MenuItem onMouseEnter={handleProfileMenuToggle} onMouseLeave={handleProfileMenuLeave}>
        <Avatar
          src={profilePic}
          alt="Profile"
        />
        <ProfileMenu visible={isProfileMenuVisible}>
          <HoverMenuItem>
            <MenuItemLink to="/profile">My Profile</MenuItemLink>
          </HoverMenuItem>
          <HoverMenuItem>
            <MenuItemLink to="/settings">{email}</MenuItemLink>
          </HoverMenuItem>
          <HoverMenuItem>
            <MenuItemLink to="/" onClick={handleSignOut}>
              Sign Out
            </MenuItemLink>
          </HoverMenuItem>
        </ProfileMenu>
      </MenuItem>
    </NavbarContainer>
  );
};

export default Navbar;
