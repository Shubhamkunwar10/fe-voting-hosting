import styled, { css } from 'styled-components';

// Styled Components
export const MainContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const backgroundImageStyles = css`
  background-image: url(https://media.getmyuni.com/reviews/24281__3500/1477107972main_img_1.jpg);
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.palette.secondary.main};
  background-size: cover;
  background-position: center;
  border-right: 1px solid #ccc;
  width: 65%; /* Half of the width */
  padding: 20px; /* Add padding to create the card effect */
  border-radius:10px;
  margin:5px;
  margin-right:4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundImageContainer = styled.div`
  ${backgroundImageStyles}
`;


export const AuthContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 35%;
  padding: 20px; /* Add padding to create the card effect */
  border: 1px solid #ccc; /* Add a border to create the card effect */
  border-radius:10px;
  margin:5px;
  @media (max-width: 768px) {
    margin-left:auto;
    margin-right:auto;
    width: 74%;
    margin-top: 20px; /* Add margin to separate the card from the image on smaller screens */
  }


`;

export const StyledPaper = styled.div`
  margin-top: 40px;
`;

export const StyledAvatar = styled.img`
  margin: 0px;
  margin-bottom:0;
  width: 48px; /* Adjust the size as needed */
  height: 48px; /* Adjust the size as needed */
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const SignUpContainer = styled.div`
  align-items: center;
  margin-top: 2rem;
`;
