import React from "react"
import { Row, Col } from '../lib/Grid'
import { ProjectPreview } from '../components/ProjectPreview/ProjectPreview'
import Lottie from 'react-lottie'
import * as animationData from '../images/lineAnimation.json'
import styled from 'styled-components'
import theme from '../styles/theme'
import { graphql } from "gatsby"

const animOptions = {
  loop: false,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const OffsetCol = styled(Col)`
  top: -230px;
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 700;

  &:nth-last-child(2) {
    margin-bottom: 2rem;
  }
`;

const SubTitle = styled.h5`
  line-height: 1.3em;
`;

type Project = {
  id: string;
  slug: string;
  title: string;
  company: string;
  featuredphoto: any;
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

const index: React.FC<Props> = ({ data }) => {
  const { edges: projects } = data.allDatoCmsProject;

  let leftCol = [];
  let rightCol = [];
  let half = Math.round(projects.length / 2)
  for (let i = 0; i < projects.length; i++) {
    if (i !== half) {
      rightCol.push(projects[i])
    } else {
      leftCol.push(projects[i])
    }
  }

  return (
  <>
    <Row justify="between" style={{ marginBottom: "3em" }}>
      <Col md={5} >
        <Lottie options={animOptions}
          height={800}
          width={545}
          />
      </Col>
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
    </Row>
    <Row>
      <Col md={6} style={{ padding: 0 }}>
        {leftCol.map(({ node: project }) => (
          <ProjectPreview 
            key={project.id}
            href={`/projects/${project.slug}`}
            imgSrc={project.featuredphoto.fluid}
            backgroundColor={project.backgroundColor.hex}
            title={project.title}
            sub={project.company} />
        ))}
      </Col>
      <OffsetCol md={6} style={{ padding: 0 }}>
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
)};

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
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }`

export default index;
