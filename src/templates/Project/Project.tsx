import React from "react";
import {
  ProjectContainer,
  ProjectTextContainer,
  ProjectTitle,
  ProjectSub,
} from './Project.components'
import { ProjectProps, InnerProjectProps } from './Project.types'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import posed from 'react-pose';
import { graphql } from "gatsby";
import Img from 'gatsby-image'

const TRANSITION_LENGTH = 1.5
const exitTransition = {
  length: TRANSITION_LENGTH,
  trigger: () => {
    if (document) {
      document.body.style.overflow = 'hidden'
    }
  },
}
const entryTransition = {
  delay: TRANSITION_LENGTH,
  trigger: () => {
    if (document && window) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'visible'
    }
  },
}
const FadingContent = posed.div({
  exiting: { opacity: 0 },
})


const InnerProject: React.FC<InnerProjectProps> = ({ transitionStatus, project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`

  return (
    <FadingContent pose={transitionStatus}>
      <ProjectContainer>
        <Img fluid={ project.featuredphoto.fluid }/>
        <ProjectTextContainer>
          <ProjectTitle>{ project.title }</ProjectTitle>
          <ProjectSub>{ project.company }</ProjectSub>
        </ProjectTextContainer>
        <TransitionLink 
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={nextProjectUrl} 
          exit={exitTransition}
          entry={entryTransition}
        >Volgend project</TransitionLink>  
      </ProjectContainer>
    </FadingContent>
  )
}

const Project: React.FC<ProjectProps> = ({ pageContext: projectShell, data }) => {
  const { project, next } = data;
  const aggregateProject = {
    ...projectShell,
    ...project,
    next
  };

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <InnerProject transitionStatus={transitionStatus} project={aggregateProject} />
      )}
    </TransitionState>
  )
}

export const query = graphql`
  query($slug: String!, $nextSlug: String!) {
    project: datoCmsProject(slug: { eq: $slug }) {
      featuredphoto {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    next: datoCmsProject(slug: { eq: $nextSlug }) {
      title
      slug
      company
      featuredphoto {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

export default Project;