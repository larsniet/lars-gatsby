import React from "react";
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import SEO from '../layouts/SEO/SEO'
import theme from '../styles/theme'

import { Row, Col, NormalCol } from '../lib/Grid'

interface AboutProps {
  about: any;
  pageContext: any;
  data: any;
}

const pageSettings = {
  title: 'Lars van der Niet',
  description: 'Golfsurfer, kitesurfer, 4e-jaars student en full stack developer',
  keywords: 'lars van der niet, website, freelance, over mij',
};

const ProjectImage = styled(Img) <{ fluid?: boolean }> ``;

const Title = styled.h1``;
const SubTitle = styled.p`
  margin-bottom: 20px;
`;

const CustomRow = styled(Row)`
  @media(max-width: ${theme.containerWidth.tablet}) {
    flex-flow: column-reverse !important;
  }
`;

const About: React.FC<AboutProps> = ({ data }) => {
  const { title, description, keywords } = pageSettings;
  const { about } = data;
  const aboutMe = about.about.split("\n");

  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <CustomRow>
        <Col md={6}>
          <ProjectImage fluid={about.profilepicture.fluid} />
          <Row style={{ marginTop: "40px" }}>
            <NormalCol md={6}>
              <h4>Vaardigheden</h4>
            </NormalCol>
            <NormalCol md={6}>
              <ul>
                {about.abilities.value.document.children.map((role) => (
                  <li key={role.children[0].value}><p>{role.children[0].value}</p></li>
                ))}
              </ul>
            </NormalCol>
          </Row>
        </Col>
        <Col md={6}>
          <Title>Golfsurfer, kitesurfer, 4e-jaars student en full stack developer</Title>
          {aboutMe.map((line, index) => (
            <SubTitle key={index}>{line}</SubTitle>
          ))}
        </Col>
      </CustomRow>
    </>
  );
}

export const pageQuery = graphql`
  query {
    about: datoCmsAbout {
      abilities {
        value
      }
      about
      profilepicture {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid
        }
      }
    }      
  }`

export default About;
