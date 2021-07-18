import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

const fadeIn = keyframes`
  from {
      opacity: 0;
      transform: translateX(-50%);
  }
  to { opacity: 1 }
`;

export const ProjectContainer = styled.section`
  position: relative;
  text-align: center;

  & img {
    position: relative;
    height: 50vh;
    width: auto;
    filter: brightness(80%);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  filter: brightness(80%);
`;

export const ProjectTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  animation: ${fadeIn} .5s ease-in;
`;

export const ProjectTitle = styled.h1`
  text-shadow: 2px 2px 2px rgba(0,0,0,0.59);
  color: #fff;
  line-height: 0;
`;

export const ProjectSub = styled.h3`
  color: #fff;
  font-weight: 100;
  font-family: "Rubik";
`;

export const ProjectImg = styled(Img)`
  position: relative;
  height: 100vh;
  width: 100%;
  filter: brightness(80%);
`;