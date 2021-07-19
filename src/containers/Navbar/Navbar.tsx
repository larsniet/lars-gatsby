import React from 'react';
import {
  Nav,
  NavbarLogo,
  NavbarContainer,
  NavbarItems
} from './Navbar.components'
import { NavbarProps } from './Navbar.types'
import { CustomLinkUnderline } from '../../components/Transitions/LinkCustom.components'
import { Row, Col } from '../../lib/Grid'


const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Nav id="nav">
      <NavbarContainer>
        <Row justify="between">
          <Col>
            <NavbarLogo>Lars van der Niet</NavbarLogo>
          </Col>
          <Col xs="content">
            <NavbarItems>
              <CustomLinkUnderline url={'/'} effect="fade" lenght={.3}>Werk</CustomLinkUnderline>
              <CustomLinkUnderline url={'/about'} effect="fade" lenght={.3}>Over Lars</CustomLinkUnderline>
            </NavbarItems>
          </Col>
        </Row>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
