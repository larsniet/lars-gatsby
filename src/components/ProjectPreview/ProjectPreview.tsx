import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme from '../../styles/theme'
import { ProjectPreviewProps } from './ProjectPreview.types'
import { 
  ProjectPreviewContainer,
  ProjectPreviewTextContainer,
  ProjectPreviewTitle,
  ProjectPreviewSub
} from './ProjectPreview.components'


export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ href, imgSrc, title, sub, backgroundColor }) => {
  return (
    <AniLink  
      to={href}
      paintDrip
      duration={1}
      hex={backgroundColor}>
      <ProjectPreviewContainer
        id={title}
        Tag="section"
        fluid={imgSrc}
        backgroundColor={backgroundColor}>
          <ProjectPreviewTextContainer>
            <ProjectPreviewTitle>{ title }</ProjectPreviewTitle>
            <ProjectPreviewSub>{ sub }</ProjectPreviewSub>
          </ProjectPreviewTextContainer>
      </ProjectPreviewContainer>
    </AniLink>
  );
}

