import React from "react";
import {
  ProjectContainer,
  ProjectTextContainer,
  ProjectImageContainer,
  ProjectTitle,
  ProjectSub,
  ProjectImage,
  ProjectOverview,
  NextProjectLink
} from './Project.components'
import { Row, NormalCol } from '../../lib/Grid'
import { ProjectProps, InnerProjectProps } from './Project.types'
import { TransitionState } from 'gatsby-plugin-transition-link'
import Linkify from 'react-linkify'
import { graphql } from "gatsby"
import SEO from '../../layouts/SEO/SEO'

import theme from '../../styles/theme'
const { colors } = theme

const InnerProject: React.FC<InnerProjectProps> = ({ project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`
  const projectDescr = project.description.split("\n");

  const bg = `
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    ${project.next.backgroundColor.hex}
  `;

  const setOpacityNavbar = () => {
    document.getElementById("nav").style.backgroundColor = colors.offWhite
    setTimeout(() => {
      document.getElementById("nav").style.backgroundColor = colors.offWhiteBackground
    }, 1000);
  }

  return (
    <ProjectContainer>
      <SEO title={project.company} description={project.title} keywords={project.title} />
      <Linkify>
        <ProjectImageContainer>
          <ProjectImage
            Tag="section"
            fluid={project.featuredphoto.fluid}
            objectFit="cover"
            backgroundColor={project.backgroundColor.hex}
          />
          <ProjectTextContainer>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSub>{project.company}</ProjectSub>
          </ProjectTextContainer>
        </ProjectImageContainer>

        <ProjectOverview>
          <Row justify="between">
            <NormalCol md={6}>
              <Row style={{ marginBottom: "2em" }}>
                <NormalCol md={6}>
                  <h3>Overzicht</h3>
                </NormalCol>
                <NormalCol md={6}>
                  <p>{project.overview}</p>
                </NormalCol>
              </Row>
              <Row style={{ marginBottom: "2em" }}>
                <NormalCol md={6}>
                  <h3>Mijn Taken</h3>
                </NormalCol>
                <NormalCol md={6}>
                  <ul>
                    {project.roles.value.document.children.map((role) => (
                      <li key={role.children[0].value}><p>{role.children[0].value}</p></li>
                    ))}
                  </ul>
                </NormalCol>
              </Row>
            </NormalCol>
            <NormalCol md={5}>
              {projectDescr.map((line, index) => (
                <p style={{ marginBottom: "20px" }} key={index}>{line}</p>
              ))}
            </NormalCol>
          </Row>
        </ProjectOverview>
      </Linkify>
      <NextProjectLink
        cover
        direction="left"
        to={nextProjectUrl}
        hex={theme.colors.secondary}
        duration={1}
        bg={bg}
        onClick={setOpacityNavbar}>
        Volgend project
      </NextProjectLink>
    </ProjectContainer>
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
      description
      overview
      roles {
        value
      }
      backgroundColor {
        hex
      }
      featuredphoto {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    next: datoCmsProject(slug: { eq: $nextSlug }) {
      slug
      backgroundColor {
        hex
      }
    }
  }
`;

export default Project;