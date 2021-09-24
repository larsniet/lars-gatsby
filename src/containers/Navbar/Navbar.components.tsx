import styled from 'styled-components'
import theme from '../../styles/theme'
import { motion } from "framer-motion";
import {
    MobileNavWrapperProps,
    MobileNavBackgroundProps,
    NavWrapperProps
} from './Navbar.types'
import { useEffect, useState } from 'react';

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
    width: 300px;
    z-index: 99;

    pointer-events: ${props => props.menuIsOpen ? 'all' : 'none'};

    @media(max-width: ${containerWidth.tablet}) {
        display: block;
    }
`;

export const MobileNavBackground = styled(motion.div) <MobileNavBackgroundProps>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: ${colors.secondary};
`;


export const sidebar = (clientHeight) => {
    return {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: () => ({
            clipPath: `circle(30px at ${300 - 40}px ${clientHeight - 45}px)`,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        })
    }
}