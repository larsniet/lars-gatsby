import React from "react";
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Row, Col, NormalCol } from '../lib/Grid'

interface AboutProps {
  about: any;
  pageContext: any;
  data: any;
}

const ProjectImage = styled(Img) <{ fluid?: boolean }> ``;

const Title = styled.h1``;
const SubTitle = styled.p`
  margin-bottom: 20px;
`;

const About: React.FC<AboutProps> = ({ pageContext: projectShell, data }) => {
  const { about } = data;

  return (
    <>
      <Row direction="column-reverse">
        <Col md={6}>
          <ProjectImage fluid={about.profilepicture.fluid} />
        </Col>
        <Col md={6}>
          <Title>Golfsurfer, kitesurfer, 4e-jaars student en full stack developer</Title>
          <SubTitle>Mijn naam is Lars van der Niet. Ongeveer 4 jaar geleden ben ik begonnen bij de opleiding Informatica. Al snel kwam ik er achter dat Interactie-Technologie mijn passie is.</SubTitle>
          <SubTitle>Ondertussen is er veel veranderd op zowel persoonlijk als professioneel gebied. Zo ben ik gestart met het maken van een paar simpele portfolio websites voor kleine bedrijven en is dit uiteindelijk uitgegroeid tot het kunnen realiseren van dashboards die datavisualisatie mogelijk maken voor complexe datasets.</SubTitle>
          <SubTitle>Uiteraard blijft er ook wat vrije tijd over. Het liefst gebruik ik deze tijd om in de zee te liggen of te sporten. Vanaf mijn 10e jaar ben ik fanatiek gaan kitesurfen. Hier heb ik een aantal jaar lang ook mijn beroep van gemaakt als kitesurfinstructeur. Momenteel beoefen ik al mijn sporten echter recreatief.</SubTitle>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ marginTop: "20px" }}>
          <Row>
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
      </Row>
    </>
  );
}

export const pageQuery = graphql`
  query {
    about: datoCmsAbout {
      abilities {
        value
      }
      profilepicture {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid
        }
      }
    }      
  }`

export default About;
