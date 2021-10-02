import styled from 'styled-components';
import theme from '../../styles/theme'

const { containerWidth } = theme;

export const Main = styled.main`
    max-width: 100vw !important;
    overflow-x: hidden;
    padding-top: 200px;

    @media(max-width: ${containerWidth.tablet}) {
        padding-top: 100px;
    }
`;