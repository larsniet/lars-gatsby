import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'

import theme from '../../styles/theme'
const { colors } = theme;

export const ProjectPreviewContainer = styled(BackgroundImage)`
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
  height: 400px;
  transition: .3s all ease;
  margin-bottom: 3em;

  &:after {
    transition: .3s all ease !important;
  }

  &:hover:after {
    transform: rotate(-1.6deg) scale(1.06);
  }
`;

export const ProjectPreviewTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;
`;

export const ProjectPreviewTitle = styled.h4`
  text-shadow: 0 0.0625rem 0 #000;
  color: ${colors.offWhite};
  margin-bottom: 0.33em;
`;

export const ProjectPreviewSub = styled.h6`
  color: ${colors.offWhite};
`;
