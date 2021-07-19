import styled from 'styled-components'
import theme from '../../styles/theme'
import Container from '../../containers/Container'

const { colors } = theme;

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 10000;
    background: ${colors.offWhiteBackground};
`;

export const NavbarContainer = styled(Container)`
    padding: 5rem 0;
`;

export const NavbarItems = styled.div`
    margin-left: auto;
`;

export const NavbarLogo = styled.h5`
    color: ${colors.secondary};
    font-weight: 700;
    margin-bottom: 0;
`;


