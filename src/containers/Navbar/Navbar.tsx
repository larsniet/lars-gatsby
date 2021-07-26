import React, { useState, useRef, useEffect } from 'react';
import {
  NavbarLogo,
  NavWrapper,
  NavItems,
  NavItem,
  Hamburger
} from './Navbar.components'
import { NavbarProps } from './Navbar.types'
import { CustomLinkUnderline } from '../../components/Transitions/LinkCustom.components'
import Container from '../../containers/Container';
import { useDetectClickOutside } from 'react-detect-click-outside';


const Navbar: React.FC<NavbarProps> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const handleOutsideClick = () => {
    if (menuIsOpen) {
      console.log("menu is open en er is geklikt");
      toggleMenu();
    }
  }

  const ref = useDetectClickOutside({ onTriggered: handleOutsideClick });

  return (
    <NavWrapper menuIsOpen={menuIsOpen} ref={ref} id="nav">
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
        <Hamburger menuIsOpen={menuIsOpen} onClick={toggleMenu} aria-label="Navigation button">
          <span />
          <span />
          <span />
        </Hamburger>
      </Container>
    </NavWrapper>
  );
};

export default Navbar;
