import React from 'react';
import HeadScripts from '../../lib/getHeadScripts';
import { GlobalStyles, TypographyClassStyling } from '../../styles/global-css';
import SEO from '../SEO/SEO';
import Navbar from '../../containers/Navbar/Navbar';
import { Main } from './DefaultLayout.components';
import Container from '../../containers/Container';
import Footer from '../../containers/Footer/Footer';

import LayoutProps from './DefaultLayout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
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