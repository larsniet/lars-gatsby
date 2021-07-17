import styled from 'styled-components'

export const SingleProject = styled.section`
  position: relative;
  text-align: center;
`;

export const SingleProjectImage = styled.img`
  position: relative;
  height: 100vh;
  width: 100%;
  filter: brightness(80%);
`;

export const SingleProjectTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const SingleProjectTitle = styled.h1`
  text-shadow: 2px 2px 2px rgba(0,0,0,0.59);
  color: #fff;
`;

export const SingleProjectSub = styled.h3`
  color: #fff;
  font-weight: 300;
`;