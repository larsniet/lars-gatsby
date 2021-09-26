import styled from 'styled-components'
import theme from '../../styles/theme'
import { motion } from "framer-motion";
import {
    MobileNavWrapperProps,
    MobileNavBackgroundProps,
    NavWrapperProps
} from './Navbar.types'
import { useEffect, useState } from 'react';
import { debounce } from 'debounce'
import { getDimensions } from '../../lib/use-dimensions';

const { colors, containerWidth } = theme;

export const NavWrapper = styled.nav<NavWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.2em 0;
    z-index: 98;
    flex-direction: row;
    width: 100%;
    transition: .6s all ease;

    background-color: ${(props) => (props.menuIsOpen ? colors.offWhite : colors.offWhiteBackground)};
`

export const NavbarLogo = styled.h5`
    font-weight: 800;
    margin-bottom: 0;

    & a {
        color: ${colors.secondary};
    }
`

export const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${containerWidth.tablet}) {
        display: none;
    }
`

export const NavItem = styled.li`
    list-style-type: none;
`

export const MobileNavWrapper = styled(motion.nav) <MobileNavWrapperProps>`
    position: fixed;
    display: none;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
    pointer-events: none;

    @media(max-width: ${containerWidth.tablet}) {
        display: block;
    }
`;

export const MobileNavBackground = styled(motion.div) <MobileNavBackgroundProps>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: ${colors.secondary};
`;


export const sidebar = (dimensions) => {
    return {
        open: {
            clipPath: `circle(${dimensions[1] - 300}px at ${dimensions[0] - 150}px ${dimensions[1] - 65}px)`,
            transition: {
                type: "spring",
                stiffness: 40,
                restDelta: 1
            }
        },
        closed: {
            clipPath: `circle(30px at ${dimensions[0] - 60}px ${dimensions[1] - 65}px)`,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }
}
