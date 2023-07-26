import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 16px;
`;

export const MenuItem = styled.div`
  font-size: 21px;
  color: #1976d2;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  margin-right: 10px;

  &:hover {
    background-color: #eee;
  }
`;

export const HoverMenuItem = styled.button`
  font-size: 14px;
  color: #1976d2;
  padding-top: 10px;
  background: transparent;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 0;
  position: relative;

  &:hover {
    background-color: #eee;
  }
`;

export const HomeLink = styled(Link)`
  font-size: 21px;
  color: #1976d2;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: #eee;
  }
`;

export const MenuItemLink = styled(Link)`
  width: 100%;
  font-size: 14px;
  color: #1976d2;
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  transition: background-color 0.5s;
  position: relative;
  &:hover {
    background-color: #eee;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 18px;
  cursor: pointer;
`;

export const ProfileMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: calc(70% + 4px);
  right: 0;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 160px;

  ${Avatar}:hover + & {
    display: block;
  }
`;

export const DiscoverMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: calc(70% + 4px);
  left: 0;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  ${MenuItem}:hover & {
    display: block;
  }
`;

export const LoginButton = styled.button`
background: #1976d2;
color: #fff;
border-radius: 25px;
padding: 5px 25px;
cursor: pointer;

&:hover {
  background-color: #e91e63;
  box-shadow: 0px 2px 10px #888888;
}
`;

export const DropdownMenu = styled.div`
position: absolute;
top: 15px;
left: 0;
display: ${props => (props.visible ? 'block' : 'none')};
padding-top: 10px;
margin: 0;
width: 120px;
background-color: white;
border: 1px solid #ccc;
border-radius: 5px;
`;


export const StyledNavbar = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.2rem;
background-color: white;
padding: 0 30px;
box-shadow: 0 5px 15px rgba(0 0 0 0.25);
width: 94%;
height: 100px;
border-radius: 20px;
margin: 5px auto 5px auto;

`;

export const LogoImage = styled.img`
  width: calc(4em + 1.2vw);
  padding: 0.5rem 0.5rem;
  border-radius:50%;
`;

export const NavbarToggler = styled.button`
  border: none;
  background-color: transparent;
`;

export const NavbarBrandText = styled.h4`
  font-size: 1.6rem;
  font-weight: 2000;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  display: inline-block;
  background: black;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: text-shadow 0.3s ease;
  font-family: 'Foldit', cursive;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;