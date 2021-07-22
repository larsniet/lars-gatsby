import styled from 'styled-components'
import theme from '../../styles/theme'
import Container from '../../containers/Container'

const { colors, containerWidth } = theme;

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
    font-weight: 800;
    margin-bottom: 0;
`;


// // / / /  / / /  / / / / / /  // / / /  /

export const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3em 0;
    z-index: 9999;
    flex-direction: row;
    width: 100%;
    background-color: ${colors.offWhiteBackground};
`
export const NavItems = styled.ul<{menuIsOpen: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${containerWidth.tablet}) {
        position: fixed;
        left: ${(props) => (props.menuIsOpen ? '50%' : '100%')};
        top: 8.23rem;
        flex-direction: column;
        background-color: ${colors.offWhiteBackground};
        width: 50%;
        height: 100%;
        text-align: center;
        transition: 0.3s all ease;
        justify-content: initial; 
    }
`

export const NavItem = styled.li`
    list-style-type: none;

    @media(max-width: ${containerWidth.tablet}) {
        margin: 1.5rem 0;
    }
`

export const Hamburger = styled.button<{menuIsOpen: boolean}>`
    display: none;
    border: none;
    background: transparent;


    & span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: ${colors.secondary};

        &:first-child {
            transform: ${(props) => (props.menuIsOpen ? 'translateY(8px) rotate(45deg);' : 'none')};
        }

        &:nth-child(2) {
            opacity: ${(props) => (props.menuIsOpen ? '0' : '1')};
        }

        &:last-child {
            transform: ${(props) => (props.menuIsOpen ? 'translateY(-8px) rotate(-45deg);' : 'none')};
        }
    }

    @media(max-width: ${containerWidth.tablet}) {
        display: block;
        cursor: pointer;
    }
`

