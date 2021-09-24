import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link';
import { LinkCustom } from './LinkCustom'
import styled from 'styled-components';
import theme from '../../styles/theme'

const { colors, mediaQueryMin } = theme;

export const StyledTransitionLink = styled(props => <TransitionLink {...props} />)`
    &.${props => props.activeClassName} {    
        &:before {
            content: '';
            position: absolute;
            bottom: -10px;
            right: 0;
            width: 100%;
            height: 2px;
            background-color: ${colors.secondary};
        }
    }
`;

export const CustomLinkUnderline = styled(LinkCustom)`
    position: relative;
    margin: 0 2rem;
    font-size: 20px;
    font-weight: 400;
    color: ${colors.black};

    &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        right: 0;
        width: 0;
        height: 2px;
        background-color: ${colors.primary};
        transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);

        @media(${mediaQueryMin.tablet}) {
            bottom: -10px;
        }
    }

    &:hover:before {
        left: 0;
        right: auto;
        width: 100%;
    }

`;