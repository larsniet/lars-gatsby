import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin, containerWidth } = theme;

const Container = styled.section<{ align?: string }>`
    margin: 0 6rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: inherit;
`;

export default Container;
