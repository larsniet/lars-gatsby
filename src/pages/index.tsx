import React from "react";
import { Row, Col } from '../lib/Grid';
import { ProjectPreview } from '../components/ProjectPreview/ProjectPreview'
import Lottie from 'react-lottie';
import * as animationData from '../images/lineAnimation.json'
import styled from 'styled-components'

const berenjacht = require('../images/projects/berenjacht.png').default;
const lemonbike = require('../images/projects/lemonbike.jpg').default;

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
  font-weight: bold;
`;

const SubTitle = styled.h5`
  line-height: 1.3em;
`;

const index: React.FC<Record<string, never>> = () => (
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
    <Row justify="between">
      <Col md={5}>
        <ProjectPreview 
          imgSrc={lemonbike}
          title={"Maak het verschil"}
          sub={"Lemonbike"} />
        <ProjectPreview 
          imgSrc={berenjacht}
          title={"Berenjachtkaart was een leuke uitdaging"}
          sub={"Berenjachtkaart was een leuke uitdaging"}      />
      </Col>
      <Col md={5}>
        <ProjectPreview 
          imgSrc={berenjacht}
          title={"Berenjachtkaart was een leuke uitdaging"}
          sub={"Berenjachtkaart was een leuke uitdaging"}      />
        <ProjectPreview 
          imgSrc={berenjacht}
          title={"Berenjachtkaart was een leuke uitdaging"}
          sub={"Berenjachtkaart was een leuke uitdaging"}      />
      </Col>
    </Row>
  </>
);

export default index;
