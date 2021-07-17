import React from "react";
import { Row, Col } from '../lib/Grid';
import { Project } from '../components/Project/Project'

const berenjacht = require('../images/projects/berenjacht.png').default;
const lemonbike = require('../images/projects/lemonbike.jpg').default;

const index: React.FC<Record<string, never>> = () => (
  <Row justify="between">
    <Col md={5}>
      <Project 
        imgSrc={lemonbike}
        title={"Maak het verschil"}
        sub={"Lemonbike"} />
      <Project 
        imgSrc={berenjacht}
        title={"Berenjachtkaart was een leuke uitdaging"}
        sub={"Berenjachtkaart was een leuke uitdaging"}      />
    </Col>
    <Col md={5}>
      <Project 
        imgSrc={berenjacht}
        title={"Berenjachtkaart was een leuke uitdaging"}
        sub={"Berenjachtkaart was een leuke uitdaging"}      />
      <Project 
        imgSrc={berenjacht}
        title={"Berenjachtkaart was een leuke uitdaging"}
        sub={"Berenjachtkaart was een leuke uitdaging"}      />
    </Col>
  </Row>
);

export default index;
