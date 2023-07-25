import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  width: 100%;
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
export const TextField2 = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const OtpButton = styled.button`
  background-color: #1976d2;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
  width: 80%;
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
  align-items: center;
  margin-top: 16px;
  width: 80%;
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
export const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const OptionButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.active ? '#1976d2' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#1976d2')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;
