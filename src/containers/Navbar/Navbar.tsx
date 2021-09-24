import React, { useState } from 'react';
import {
  NavbarLogo,
  NavWrapper,
  NavItems,
  NavItem,
  MobileNavWrapper,
  MobileNavBackground,
  sidebar
} from './Navbar.components'
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { NavbarProps } from './Navbar.types'
import { CustomLinkUnderline } from '../../components/Transitions/LinkCustom.components'
import Container from '../../containers/Container';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useDimensions } from "../../lib/use-dimensions";
import { MenuToggle } from '../../components/MenuToggle/MenuToggle'
import MobileLink from '../../components/Transitions/MobileLink';

const Navbar: React.FC<NavbarProps> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const closeMenu = () => {
    setMenuIsOpen(false);
  }
  const ref = useDetectClickOutside({ onTriggered: closeMenu });
  const { height } = useDimensions(ref);

  return (
    <>
      <NavWrapper menuIsOpen={menuIsOpen} id="nav">
        <Container>
          <NavbarLogo>
            <MobileLink url="/" effect="fade" lenght={.5}>
              Lars van der Niet
            </MobileLink>
          </NavbarLogo>
        </Container>
        <Container>
          <NavItems>
            <NavItem>
              <CustomLinkUnderline url={'/'} effect="fade" lenght={.5}>Werk</CustomLinkUnderline>
            </NavItem>
            <NavItem>
              <CustomLinkUnderline url={'/about'} effect="fade" lenght={.5}>Over Lars</CustomLinkUnderline>
            </NavItem>
          </NavItems>
        </Container>
      </NavWrapper >
      <MobileNavWrapper
        initial={false}
        animate={menuIsOpen ? "open" : "closed"}
        custom={height}
        ref={ref}
        menuIsOpen={menuIsOpen}
      >
        <MobileNavBackground variants={sidebar} />
        <MobileNav menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
        <MenuToggle toggle={() => toggleMenu()} />
      </MobileNavWrapper>
    </>
  );
};

export default Navbar;
