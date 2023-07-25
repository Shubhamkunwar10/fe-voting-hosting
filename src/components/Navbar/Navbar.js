import React from 'react';

import {
  StyledNavbar,
  LogoImage,
  NavbarBrandText
} from './Navbar.css';

const CustomNavbar = () => {
  return (
    <StyledNavbar>

        <LogoImage src="https://as2.ftcdn.net/v2/jpg/05/07/23/99/1000_F_507239973_71Xx9kMFtqx0Kl8bZOoOQdRuJfGYVotz.jpg" alt="Logo" />
        <NavbarBrandText >IIT EVOTING PLATFORM ON<br />POLYGON</NavbarBrandText>
        <NavbarBrandText>
          {/* Navbar Toggler Icon */}
        </NavbarBrandText>
    </StyledNavbar>
  );
};

export default CustomNavbar;
