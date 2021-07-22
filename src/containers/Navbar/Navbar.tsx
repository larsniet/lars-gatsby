import React, { useState } from 'react';
import {
  Nav,
  NavbarLogo,
  NavbarContainer,
  NavbarItems,
  NavWrapper,
  NavItems,
  NavItem,
  Hamburger
} from './Navbar.components'
import { NavbarProps } from './Navbar.types'
import { CustomLinkUnderline } from '../../components/Transitions/LinkCustom.components'
import Container from '../../containers/Container';



const Navbar: React.FC<NavbarProps> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <NavWrapper id="nav">
      <Container>
        <NavbarLogo>Lars van der Niet</NavbarLogo>
      </Container>
      <Container>
        <NavItems menuIsOpen={menuIsOpen}>
          <NavItem onClick={toggleMenu}>
            <CustomLinkUnderline url={'/'} effect="fade" lenght={.3}>Werk</CustomLinkUnderline>
          </NavItem>
          <NavItem onClick={toggleMenu}>
            <CustomLinkUnderline url={'/about'} effect="fade" lenght={.3}>Over Lars</CustomLinkUnderline>
          </NavItem>
        </NavItems>
        <Hamburger menuIsOpen={menuIsOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
      </Container>
    </NavWrapper>
  );
};

export default Navbar;
