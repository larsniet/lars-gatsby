import React, { useEffect } from 'react'
import TransitionLink from "gatsby-plugin-transition-link"
import { gsap } from "gsap"
import styled from 'styled-components'
import { ProjectPreviewProps } from './ProjectPreview.types'
import { 
  ProjectPreviewContainer,
  ProjectPreviewTextContainer,
  ProjectPreviewImage,
  ProjectPreviewTitle,
  ProjectPreviewSub
} from './ProjectPreview.components'

const CustomDiv = styled.div`
  background-color: blue;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: 2s all ease;
`

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ imgSrc, title, sub }) => {
  const animateToProject = (exit, node) => {
    const el = `#overlayimage`;
    const imagePreview = '#imagePreview';
    console.log(node);


    gsap.timeline({})
      .to(node, {
        opacity: 0, 
        duration: 1.5,
        ease: "elastic"}
      )
      .to(el, {x: 500}, 1.5);
  }

  return (
    <TransitionLink
      to="/lemonbike"
      exit={{
        trigger: ({ exit, node }) => animateToProject(exit, node),
        length: 3
      }}
      entry={{
        delay: 2.8
      }}
    >
      <ProjectPreviewContainer>
        <ProjectPreviewImage img={imgSrc} />
        <ProjectPreviewTextContainer>
          <ProjectPreviewTitle>{ title }</ProjectPreviewTitle>
          <ProjectPreviewSub>{ sub }</ProjectPreviewSub>
        </ProjectPreviewTextContainer>
      </ProjectPreviewContainer>
    </TransitionLink>
  );
}

