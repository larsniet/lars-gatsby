import React, { useState, useEffect } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { gsap, Power1 } from "gsap";
import theme from '../../styles/theme'
import styled, { keyframes } from 'styled-components'
import { ProjectPreviewProps } from './ProjectPreview.types'
import { 
  ProjectPreviewContainer,
  ProjectPreviewTextContainer,
  ProjectPreviewImage,
  ProjectPreviewTitle,
  ProjectPreviewSub
} from './ProjectPreview.components'

const { colors } = theme;

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ href, imgSrc, title, sub, backgroundColor }) => {
  useEffect(() => {
  let project: HTMLElement = document.getElementById(sub) as HTMLElement;
  let nav: HTMLElement = document.getElementById("nav") as HTMLElement;

  const animateToProject = () => {
    nav.style.transition = ".5s all ease"
    nav.style.background = colors.offWhite;

    project.innerHTML = "";
    project.style.position = "absolute"
    project.style.background = "#31a6ca"
    project.style.zIndex = "999"

    project.classList.toggle("animateToTop");
  }

  const entryAnimation = () => {
    nav.style.transition = "none"
    nav.style.background = colors.offWhiteBackground;
  }

})
  const bg = `
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    ${colors.secondary}
  `;

  return (
    <AniLink 
      cover 
      direction="left"
      to={href} 
      hex={colors.secondary}
      bg={bg}>
      <ProjectPreviewContainer id={sub}>
        <ProjectPreviewImage
          Tag="section"
          fluid={imgSrc}
          backgroundColor={backgroundColor}
        />
        <ProjectPreviewTextContainer>
          <ProjectPreviewTitle>{ title }</ProjectPreviewTitle>
          <ProjectPreviewSub>{ sub }</ProjectPreviewSub>
        </ProjectPreviewTextContainer>
      </ProjectPreviewContainer>
    </AniLink>
  );
}

