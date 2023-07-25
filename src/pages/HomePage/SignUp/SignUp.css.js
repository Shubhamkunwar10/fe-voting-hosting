import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  width:100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const TextField = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CheckboxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;


export const CheckboxLabel = styled.label`
width:80%;
  margin-left: 8px;
`;

export const Button = styled.button`
  width: 80%;
  padding: 12px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Add this line */
  margin-top: 16px;
  width: 80%; /* Change to 100% */
`;

export const Signup = styled.a`
  color: #1976d2;
  cursor: pointer;
  margin-left: 8px;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
export const Link = styled.a`
  color: #1976d2;
  cursor: pointer;
  margin-left: 8px;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
 width:80%;
 margin-bottom: 16px;
`;