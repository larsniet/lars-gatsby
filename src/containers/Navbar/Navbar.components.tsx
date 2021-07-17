import styled from 'styled-components'
import { LinkCustom } from '../../components/Transitions/LinkCustom'
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

export const NavbarContent = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarItems = styled.div`
    margin-left: auto;
`;

export const CustomLinkUnderline = styled(LinkCustom)`
    position: relative;
    margin: 0 2rem;
    font-size: 20px;
    font-weight: 400;

    &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 0;
        height: 2px;
        background-color: ${ colors.primary };
        transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    }

    &:hover:before {
        left: 0;
        right: auto;
        width: 100%;
    }
`;

export const NavbarLogo = styled.h5`
    color: ${colors.secondary};
    font-weight: 700;
    margin-bottom: 0;
`;


