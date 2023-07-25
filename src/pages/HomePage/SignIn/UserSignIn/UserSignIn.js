import React, { useState } from 'react';
import {
  Button,
  Signup,
  Container,
  CheckboxContainer,
  CheckboxLabel,
  Form,
  TextField,
  Title,
  Link,
  LinkContainer,
} from '../SignIn.css';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * UserSignIn component for handling user sign-in.
 * @param {Object} setShowSignUp - Function to set whether to show the sign-up component.
 * @returns {JSX.Element} JSX element representing the user sign-in component.
 */
const UserSignIn = ({ setShowSignUp }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    otp: '',
  });
  const [isSignIn, setIsSignIn] = useState(false); // State to track whether it's time to handle Sign In

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, otp } = data;
    try {
      if (isSignIn) {
        const signIn = await axios.post('/signin', {
          email,
          otp,
        });

        if (signIn.data && signIn.data.token) {
          const token = signIn.data.token;
          document.cookie = `jwt=${token}; Secure; SameSite=None;`; // Set the JWT as a cookie
          toast.success('Signin Successful, Welcome');
          navigate('/dashboard');
        } else {
          toast.error('Failed to sign in');
        }
      } else {
        setIsSignIn(false); // Switch to handle Sign In when the form is submitted with OTP
      }
    } catch (error) {
      toast.error('An error occurred');
      console.log(error);
    }
  };

  const handleSendOTP = () => {
    // Implement the OTP sending logic here (you can show a toast message for demonstration purposes)
    toast.success('OTP sent successfully');
    setIsSignIn(true); // When "Send OTP" is clicked, set isSendingOTP state to true

  };

  const handleEmailChange = (e) => {
    setData({ ...data, email: e.target.value });
    setIsSignIn(false); // Reset to handle Send OTP when email is changed
  };

  const handleSendOTPClick = () => {
    handleSendOTP(); // Call the handleSendOTP function to send OTP (You can implement the actual OTP sending logic here)
  };

  return (
    <Container>
      <Form>
        <TextField
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={data.email || ''}
          onChange={handleEmailChange}
        />

          <TextField
            type="text"
            name="otp"
            placeholder="One-Time Password"
            value={data.otp || ''}
            onChange={(e) => setData({ ...data, otp: e.target.value })}
            disabled={!isSignIn}
          />
      
        <CheckboxContainer>
          <CheckboxLabel htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            Remember me
          </CheckboxLabel>
        </CheckboxContainer>

        {isSignIn ? ( 
          <Button type="button" onClick={handleLogin}>Sign In</Button>
        ) : (
          <Button type="button" onClick={handleSendOTPClick}>
            Send OTP
          </Button>
        )}
      </Form>
      <LinkContainer>
        <Link href="/">Forgot password?</Link>
        <Signup href="#" onClick={() => setShowSignUp(true)}>
          Don't have an account? Sign Up
        </Signup>
      </LinkContainer>
    </Container>
  );
};

export default UserSignIn;
