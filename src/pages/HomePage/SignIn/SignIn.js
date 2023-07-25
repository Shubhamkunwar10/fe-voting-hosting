import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  TextField,
  Title,
  OptionBox,
  OptionButton,
} from './SignIn.css';
import UserSignIn from './UserSignIn/UserSignIn';
import AuthSignIn from './AuthoritySignIn/AuthoritySignIn';

/**
 * Sign in component with the option to choose between User and Authority sign-in.
 * @param {Object} setShowSignUp - Function to set whether to show the sign-up component.
 * @returns {JSX.Element} JSX element representing the sign-in component.
 */
const SignIn = ({ setShowSignUp }) => {
  // State to keep track of the selected option (user or authority)
  const [selectedOption, setSelectedOption] = useState('user');

  /**
   * Handle the option change when the user clicks on the user or authority button.
   * @param {string} option - The selected option ('user' or 'authority').
   */
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      {/* Title for the sign-in component */}
      <Title>Sign in</Title>

      {/* Option box to choose between User and Authority sign-in */}
      <OptionBox>
        <OptionButton
          active={selectedOption === 'user'}
          onClick={() => handleOptionChange('user')}
        >
          User
        </OptionButton>
        <OptionButton
          active={selectedOption === 'authority'}
          onClick={() => handleOptionChange('authority')}
        >
          Authority
        </OptionButton>
      </OptionBox>

      {/* Render UserSignIn component if selectedOption is 'user' */}
      {selectedOption === 'user' && <UserSignIn setShowSignUp={setShowSignUp} />}

      {/* Render AuthSignIn component if selectedOption is 'authority' */}
      {selectedOption === 'authority' && <AuthSignIn setShowSignUp={setShowSignUp} />}
    </Container>
  );
};

export default SignIn;
