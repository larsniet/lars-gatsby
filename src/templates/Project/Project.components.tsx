import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import theme from '../../styles/theme'

const { colors, mediaQueryMin } = theme;

const fadeIn = keyframes`
  from {
      opacity: 0;
      transform: translateX(-50%);
  }
  to { opacity: 1 }
`;

type GatsbyImage = {
  fluid?: boolean
  objectFit?: string
  objectPosition?: string
  backgroundColor?: string
}

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
`;

export const ProjectImage = styled(Img)<GatsbyImage>`
  transition: .3s all ease;
  position: relative;
  height: 100vh;
  width: auto;
  filter: brightness(80%);
  background-color: ${props => props.backgroundColor};
`;

export const ProjectContainer = styled.section`
  text-align: center;
  overflow: hidden;
  position: relative;
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
  text-shadow: 0 0.0625rem 0 #000;
  color: #fff;
  line-height: normal;

  @media (${mediaQueryMin.tablet}) {
        margin-top: 2em;
    }
`;

export const ProjectSub = styled.h3`
  color: #fff;
  font-weight: 100;
  text-shadow: 0 0.0625rem 0 #000;
  font-family: "Rubik";
`;

export const ProjectOverview = styled.section`
  margin-top: 3em;
  text-align: left;
`;

export const NextProjectLink = styled(AniLink)`
  text-decoration: none;
  color: ${colors.black};
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
  height: auto;
  display: inline-block;
  margin: 2em 0;
  margin-bottom: 4em;
  transition: .3s all ease;
  line-height: normal;

  &:hover {
    color: ${colors.secondary}
  }

  @media (${mediaQueryMin.tablet}) {
    margin-top: 2em;
    font-size: 50px;
  }
`