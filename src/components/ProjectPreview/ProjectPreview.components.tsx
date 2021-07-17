import styled from 'styled-components';

export const ProjectPreviewImage = styled.div<{ img: string }>`
  transition: .3s all ease;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-blend-mode: overlay;
  background-color: #00000030;
`;

export const ProjectPreviewContainer = styled.div<{ img: string }>`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  text-align: center;
  height: auto;
  width: 93%;
  margin: 2em auto;
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
  z-index: 0;
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

