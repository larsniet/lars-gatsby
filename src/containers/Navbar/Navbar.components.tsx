import styled from 'styled-components';
import { LinkCustom } from '../../components/Transitions/LinkCustom'
import theme from '../../styles/theme';

const { colors } = theme;

export const NavbarContainer = styled.nav<{
    atScrollTop?: boolean;
    background?: boolean;
}>`
    position: fixed;
    width: 100%;
    z-index: 10000;
    background: transparent;
    padding: 3rem 0;
`;

export const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    padding: 0 3rem;
`;

export const NavbarItems = styled.div`
    margin-left: auto;
`;

export const CustomLink = styled(LinkCustom)`
    position: relative;
    margin: 0 2rem;
    font-family: "Futura", georgia, serif;
`;

export const CustomLinkUnderline = styled(CustomLink)`
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

export const Logo = styled.span`
    display: block;
    width: 150px;

`;


