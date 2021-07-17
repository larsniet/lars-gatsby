import React from 'react';
import { ProjectProps } from './Project.types'
import { 
  ProjectContainer,
  ProjectTextContainer,
  ProjectImage,
  ProjectTitle,
  ProjectSub
} from './Project.components'

export const Project: React.FC<ProjectProps> = ({ imgSrc, title, sub }) => {
  return (
    <ProjectContainer>
      <ProjectImage src={imgSrc} />
      <ProjectTextContainer>
        <ProjectTitle>{ title }</ProjectTitle>
        <ProjectSub>{ sub }</ProjectSub>
      </ProjectTextContainer>
    </ProjectContainer>
  );
}

