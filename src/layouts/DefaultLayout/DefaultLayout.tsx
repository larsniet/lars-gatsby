import React from 'react';
import { GlobalStyles, TypographyClassStyling } from '../../styles/global-css';
import HeadScripts from '../../lib/getHeadScripts';
import { Main } from './DefaultLayout.components';
import LayoutProps from './DefaultLayout.types';
import Navbar from '../../containers/Navbar/Navbar';
import Container from '../../containers/Container';
// import Footer from '../Footer/Footer';

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <HeadScripts />
      <GlobalStyles />
      <Navbar />
      <Main>
        <TypographyClassStyling />
        <Container>
          {children}
        </Container>
      </Main>
    </>
  );
};

export default Layout;