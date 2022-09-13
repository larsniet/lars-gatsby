import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../styles/theme';

const ErrorWrapper = styled.div`
    height: 40%;
    text-align: center;
    line-height: 40%;
`;

const Return = styled(Link)`
    color: ${theme.colors.secondary};
    text-decoration: underline;
`;

const NotFoundPage: React.FC<Record<string, never>> = () => {
    return (
        <ErrorWrapper>
            <h1>
                Deze pagina bestaat niet (meer) <br />
                <Return to="/">Ik wil terug!</Return>
            </h1>
        </ErrorWrapper>
    );
};

export default NotFoundPage;
