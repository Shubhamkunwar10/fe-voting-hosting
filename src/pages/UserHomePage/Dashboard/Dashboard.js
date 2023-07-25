import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSignIn from '../../../components/Navbar/NavbarSignIn';
import menuItems from './data.json';
import Vote from '../Vote/Vote';
import ResultPage from '../../../components/Result/Result';
import {
  DashboardContainer,
  Sidebar,
  MainContent,
  MenuItem,
  General,
  Tutorial,
  Result,
  Voting,
} from './Dashboard.css.js'; // Import the CSS styles

/**
 * Dashboard component to display the user's dashboard with different menu items.
 * It handles navigation based on the selected menu item.
 */
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState('voting');

  /**
   * Fetches the user data on component mount.
   * It gets the JWT token from the cookies and navigates back to the home page if no token is found.
   */
  useEffect(() => {
    const fetchUserData = async () => {
      // Get the JWT token from the cookies
      // const jwtToken = Cookies.get('jwt');

      // // If there is no JWT token, navigate back to the home page
      // if (!jwtToken) {
      //   navigate('/');
      //   return;
      // } else
      return true;
    };

    fetchUserData();
  }, [navigate]);

  const { email, otp } = user || {};

  /**
   * Handles the click event of each menu item.
   * It updates the active menu item based on the selected menu item.
   * @param {string} menuItem - The name of the selected menu item.
   */
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div>
      <NavbarSignIn email={email} name={otp} />
      <DashboardContainer>
        <Sidebar>
          {/* Render menu items from the 'menuItems' data */}
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.name}
              active={activeMenuItem === menuItem.name}
              onClick={() => handleMenuItemClick(menuItem.name)}
            >
              {menuItem.name.charAt(0).toUpperCase() + menuItem.name.slice(1)}
            </MenuItem>
          ))}
        </Sidebar>
        <MainContent>
          {/* Render the appropriate content based on the active menu item */}
          <Voting active={activeMenuItem === 'voting'}>
            <Vote />
          </Voting>
          <General active={activeMenuItem === 'general'}>
            <ResultPage />
          </General>
          <Tutorial active={activeMenuItem === 'tutorial'}>
            <ResultPage />
          </Tutorial>
          <Result active={activeMenuItem === 'result'}>
            <ResultPage />
          </Result>
        </MainContent>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
