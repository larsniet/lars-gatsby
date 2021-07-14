import React from 'react';
import {
  Logo,
  NavbarContainer,
  NavbarContent,
  NavbarItems,
  CustomLinkUnderline
} from './Navbar.components'
import { NavbarProps } from './Navbar.types'

const logo = require('../../images/lvdnlogosmall.png').default

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <img src={logo} alt="Lars van der Niet logo" />
        </Logo>
        <NavbarItems>
          <CustomLinkUnderline url={'/'} effect="fade" lenght={.3}>Werk</CustomLinkUnderline>
          <CustomLinkUnderline url={'/about'} effect="fade" lenght={.3}>Over Lars</CustomLinkUnderline>
        </NavbarItems>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
