import React from 'react';
import {
  Nav,
  NavbarLogo,
  NavbarContainer,
  NavbarContent,
  NavbarItems,
  CustomLinkUnderline
} from './Navbar.components'
import { NavbarProps } from './Navbar.types'

const logo = require('../../images/lvdnlogosmall.png').default

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarContent>
          <NavbarLogo>Lars van der Niet</NavbarLogo>
          <NavbarItems>
            <CustomLinkUnderline url={'/'} effect="fade" lenght={.3}>Werk</CustomLinkUnderline>
            <CustomLinkUnderline url={'/about'} effect="fade" lenght={.3}>Over Lars</CustomLinkUnderline>
          </NavbarItems>
        </NavbarContent>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
