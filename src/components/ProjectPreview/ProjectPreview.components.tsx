import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'

export const ProjectPreviewImage = styled(BackgroundImage)`
  transition: .3s all ease;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-color: #00000030;
`;

export const ProjectPreviewContainer = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;
  height: auto;
  width: 100%;
  height: 400px;
  transition: .3s all ease;

  &:hover ${ProjectPreviewImage} {
    transform: rotate(-2deg) scale(1.06);
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

export const ProjectPreviewTitle = styled.h3`
  font-size: 35px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.59);
  color: #fff;
`;

export const ProjectPreviewSub = styled.h5`
  color: #fff;
  font-weight: 300;
`;

