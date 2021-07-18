import React from 'react';
import {
  Nav,
  NavbarLogo,
  NavbarContainer,
  NavbarContent,
  NavbarItems
} from './Navbar.components'
import { NavbarProps } from './Navbar.types'
import { CustomLinkUnderline } from '../../components/Transitions/LinkCustom.components'

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Nav id="nav">
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
