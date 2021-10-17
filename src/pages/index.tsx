import React from "react"
import { Row, Col, NormalCol } from '../lib/Grid'
import { ProjectPreview } from '../components/ProjectPreview/ProjectPreview'
// import lottie from 'lottie-web'
import Lottie from "react-lottie";
import * as animationData from '../images/lineAnimation.json'
import styled from 'styled-components'
import { graphql } from "gatsby"
import SEO from '../layouts/SEO/SEO'

import theme from '../styles/theme'
const { containerWidth } = theme

const pageSettings = {
  title: 'Lars van der Niet',
  description: 'Deskundig full stack developer die webapplicaties realiseert voor zowel kleine als grote bedrijven',
  keywords: 'lars van der niet, website, freelance',
};

interface Project {
  id: string
  slug: string
  title: string
  company: string
  featuredphoto: any
  backgroundColor: any
};

interface Props {
  data: {
    allDatoCmsProject: {
      edges: {
        node: Project;
      }[];
    };
  };
}

const animOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const CustomRow = styled(Row)`
  margin-bottom: 8em;
  @media(min-width: ${containerWidth.tablet}) {
    margin-bottom: 12em;
  }
`;

const CustomCol = styled(Col)`
  padding: 0 !important;
`

const OffsetCol = styled(CustomCol)`
  top: 0;

  @media(min-width: 1330px) {
    top: -230px;
  }
  @media(min-width: 1200px) {
    top: -170px;
  }
  @media(min-width: 767px) {
    top: -100px;
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 800;
  text-align: center;

  &:nth-last-child(2) {
    margin-bottom: 2rem;
  }

  @media(min-width: ${containerWidth.tablet}) {
    text-align: left;
  }
`;

const SubTitle = styled.h5`
  line-height: 1.3em;
  text-align: center;

  @media(min-width: ${containerWidth.tablet}) {
    text-align: left;
  }
`;

const LottieContainer = styled.div`
  width: 270px;
  height: 350px;
  margin: 0 auto;

  @media(min-width: ${containerWidth.tablet}) {
    width: 100%;
    height: 130%;
  }
`;


const index: React.FC<Props> = ({ data }) => {
  const { title, description, keywords } = pageSettings
  const { edges: projects } = data.allDatoCmsProject

  let leftCol = [];
  let rightCol = [];
  let half = Math.round(projects.length / 2)
  for (let i = 0; i < projects.length; i++) {
    if (i >= half) {
      rightCol.push(projects[i])
    } else {
      leftCol.push(projects[i])
    }
  }

  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <CustomRow justify="between">
        <NormalCol md={6}>
          <LottieContainer>
            <Lottie
              options={animOptions}
              isClickToPauseDisabled={true}
            />
          </LottieContainer>
        </NormalCol>
        <Col md={6}>
          <TextContainer>
            <Title>
              Hallo!
            </Title>
            <Title>
              Ik ben Lars.
            </Title>
            <SubTitle>
              Full stack developer gespecialiseerd in interactie-technologie. Woonachtig in Nederland en werkzaam door heel Europa.
            </SubTitle>
          </TextContainer>
        </Col>
      </CustomRow>
      <Row>
        <CustomCol md={6}>
          {leftCol.map(({ node: project }) => (
            <ProjectPreview
              key={project.id}
              href={`/projects/${project.slug}`}
              imgSrc={project.featuredphoto.fluid}
              backgroundColor={project.backgroundColor.hex}
              title={project.title}
              sub={project.company} />
          ))}
        </CustomCol>
        <OffsetCol md={6}>
          {rightCol.map(({ node: project }) => (
            <ProjectPreview
              key={project.id}
              href={`/projects/${project.slug}`}
              imgSrc={project.featuredphoto.fluid}
              backgroundColor={project.backgroundColor.hex}
              title={project.title}
              sub={project.company} />
          ))}
        </OffsetCol>
      </Row>
    </>
  )
};

export const pageQuery = graphql`
  query PostIndex {
    allDatoCmsProject {
      edges {
        node {
          id
          title
          slug
          company
          backgroundColor {
            hex
          }
          featuredphoto {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }`

export default index;
