import React from 'react';
import Container from '../../containers/Container';
import { Row, Col } from '../../lib/Grid';
import { IconContext } from "@react-icons/all-files";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import {
  FooterContainer,
  WaveContainer,
  FooterContent,
  CallToAction,
  ContactMe,
  SocialsContainer,
  BuildBy
} from './Footer.components'
import { FooterProps } from './Footer.types'
import Wave from 'react-wavify'
import theme from '../../styles/theme'

const { colors } = theme

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <WaveContainer>
        <Wave 
          fill={colors.secondary}
          options={{
            height: 20,
            amplitude: 70,
            speed: 0.1,
            points: 3
          }}/>
      </WaveContainer>
      <FooterContent>
        <Container>
          <Row justify="center">
            <Col md={6}>
              <CallToAction>Gezellig samen kletsen?</CallToAction>
            </Col>
            <Col md={6}>
              <ContactMe>Om meer te weten te komen, of voor eventuele samenwerkingen, <a href="mailto:lvdnbusiness@icloud.com" target="_blank">laat een mailtje achter</a> of vind me op social media.</ContactMe>
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <SocialsContainer>
                      <a href="https://www.instagram.com/lvdniet/" target="_blank"><FaInstagram /></a>
                      <a href="https://twitter.com/larsvdniet" target="_blank"><FaTwitter /></a>
                </SocialsContainer>
              </IconContext.Provider>
              <BuildBy>Drawings by <a href="" target="_blank">Tejo Zandee</a></BuildBy>
            </Col>
          </Row>

        </Container>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;