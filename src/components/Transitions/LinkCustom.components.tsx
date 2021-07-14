import TransitionLink from 'gatsby-plugin-transition-link';
import styled from 'styled-components';
import theme from '../../styles/theme'

const { colors } = theme;

export const StyledTransitionLink = styled(TransitionLink)`
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