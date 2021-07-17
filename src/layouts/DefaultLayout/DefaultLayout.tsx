import React from 'react';
import { GlobalStyles, TypographyClassStyling } from '../../styles/global-css';
import HeadScripts from '../../lib/getHeadScripts';
import { Main } from './DefaultLayout.components';
import LayoutProps from './DefaultLayout.types';
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
import Container from '../../containers/Container';

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <HeadScripts />
      <GlobalStyles />
      <Navbar />
      <Main>
        <Container>
          <TypographyClassStyling />
          {children}
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;