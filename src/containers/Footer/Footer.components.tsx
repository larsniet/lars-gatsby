import styled from 'styled-components'
import theme from '../../styles/theme'

const { colors, mediaQueryMin } = theme;

export const FooterContainer = styled.footer`
    position: relative;
    margin-top: 100px;
    width: 100%;
    height: 430px;
`;

export const WaveContainer = styled.div`
    width: 100%;
    position: absolute;
    top: -130px;
`;

export const FooterContent = styled.div`
    background-color: ${colors.secondary};
    height: 100%;
    width: 100%;
`;

export const CallToAction = styled.h2`
    color: #fff;
    margin-top: 1em;
    width: 80%;

    @media (${mediaQueryMin.tablet}) {
        margin-top: 2em;
    }

    @media (${mediaQueryMin.sm}) {
        margin-top: 1em;
    }
`;

export const ContactMe = styled.h5`
    color: #fff;
    letter-spacing: normal;
    font-weight: 100;
    margin-top: 1em;
    line-height: 1.3em;

    @media (${mediaQueryMin.tablet}) {
        margin-top: 3em;
        letter-spacing: .1rem;
    }

    & a {
        color: #fff;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            bottom: -3px;
            width: 0;
            height: 3px;
            background-color: ${colors.white};
            transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
            right: auto;
            width: 100%;
            }

        &:hover:before {
            right: 0;
            width: 0;
        }
    }
`;

export const SocialsContainer = styled.div`
    margin: 2em 0;

    & svg {
        margin-right: 1em;
    }
`;

export const BuildBy = styled.p`
    color: #fff;
    font-size: 15px;

    & a {
    color: #fff;
    position: relative;

        &:before {
            content: '';
            position: absolute;
            bottom: -3px;
            width: 0;
            height: 1px;
            background-color: ${colors.white};
            transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
            right: auto;
            width: 100%;
        }
    
        &:hover:before {
            right: 0;
            width: 0;
        }
    }

`;