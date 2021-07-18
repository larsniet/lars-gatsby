import React from "react"
import { Row, Col } from '../lib/Grid'
import { ProjectPreview } from '../components/ProjectPreview/ProjectPreview'
import Lottie from 'react-lottie'
import * as animationData from '../images/lineAnimation.json'
import styled from 'styled-components'
import theme from '../styles/theme'
import { graphql } from "gatsby"

const { mediaQueryMin } = theme

const berenjacht = require('../images/projects/berenjacht.png').default
const lemonbike = require('../images/projects/lemonbike.jpg').default

const animOptions = {
  loop: false,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: masonry;
  column-gap: 2em;
  row-gap: 2rem;

  @media (${mediaQueryMin.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestEl = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
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

  return (
  <>
    <Row>
      <Col>
        <Lottie options={animOptions}
          height={800}
          width={545}
          />
      </Col>
      <Col>
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
    <ProjectsWrapper>
      {projects.map(({ node: project }) => (
        <ProjectPreview 
          key={project.id}
          href={`/projects/${project.slug}`}
          imgSrc={project.featuredphoto.fluid}
          title={project.title}
          sub={project.company} />
      ))}
    </ProjectsWrapper>
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
