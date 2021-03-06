import React from 'react';
import { GlobalStyles, TypographyClassStyling } from '../../styles/global-css';
import { Main } from './DefaultLayout.components';
import Container from '../../containers/Container';
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
import LayoutProps from './DefaultLayout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main>
        <TypographyClassStyling />
        <Container>
          {children}
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;