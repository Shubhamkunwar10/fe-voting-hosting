import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import {
  MainContainer,
  BackgroundImageContainer,
  AuthContainer,
  StyledPaper,
  StyledAvatar
} from './HomePage.css';

// Theme configuration for styled-components
const theme = {
  palette: {
    secondary: {
      main: '#1976d2', // Replace this with your desired secondary color
    },
  },
};

/**
 * HomePage component for displaying the main page of the application.
 * It includes the Navbar, SignIn, and SignUp components.
 */
function HomePage() {
  // State to control whether to show SignIn or SignUp component
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      <ThemeProvider theme={theme}>
        <MainContainer>
          <BackgroundImageContainer />
          <AuthContainer>
            <StyledPaper>
              <StyledAvatar src="https://cdn-icons-png.flaticon.com/512/9436/9436365.png" alt="Logo" />
              {showSignUp ? (
                // Show SignUp component if 'showSignUp' is true
                <SignUp handleShowSignUp={setShowSignUp} />
              ) : (
                // Show SignIn component if 'showSignUp' is false
                <SignIn setShowSignUp={setShowSignUp} />
              )}
            </StyledPaper>
          </AuthContainer>
        </MainContainer>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
