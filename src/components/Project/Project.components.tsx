import styled from 'styled-components';
import theme from '../../styles/theme';

const { colors } = theme;

export const ProjectImage = styled.img`
  transition: .3s all ease;
  width: 100%;
  height: auto;
  filter: brightness(80%)
`;

export const ProjectContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  text-align: center;
  height: auto;
  width: 100%;
  height: 400px;

  &:hover ${ProjectImage} {
    transform: rotate(-2deg) scale(1.06);
  }
`;


export const ProjectTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const ProjectTitle = styled.h3`
  font-size: 35px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.59);
`;

export const ProjectSub = styled.h5`
`;

