import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
} from 'react-grid-system';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;
const container = theme.containerWidth;

export const Container = styled(ContainerBase)<{
    fluid?: boolean;
}>`
    max-width: unset !important;
    padding-left: 0 !important;
    padding-right: 0 !important;

    @media (${mediaQueryMin.md}) {
        margin: 2em ${(props) => (props.fluid ? '0' : container.md)} !important;
    }

    @media (${mediaQueryMin.lg}) {
        margin: 2.5vw ${(props) => (props.fluid ? '0' : container.lg)} !important;
    }

    @media (${mediaQueryMin.xl}) {
        margin: 4vw ${(props) => (props.fluid ? '0' : container.xl)} !important;
    }
`;

export const Row = styled(RowBase)`
    margin-left: 0 !important;
    margin-right: 0 !important;
`;

export const Col = styled(ColBase)`
    box-sizing: border-box;
    border: none;
    background-clip: padding-box;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;

    @media(${mediaQueryMin.tablet}) {
        border: 1em solid transparent;
        border-top: 0;
        border-bottom: 0;
    }
`;

export const NormalCol = styled(ColBase)`
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
`;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;
