import React from "react";
import { Container, Row, Col } from '../lib/Grid';
import { Project } from '../components/Project/Project'

const berenjacht = require('../images/projects/berenjacht.png');

const index: React.FC<Record<string, never>> = () => (
  <Container>
    <Row>
      <Col md={4}>
        <Project 
          img={berenjacht}
          text={"Berenjachtkaart was een leuke uitdaging"}
        />
      </Col>
      <Col md={4}>
        <p>Haaoidsfasoidafj</p>
      </Col>
      <Col md={4}>
        <p>Haaoidsfasoidafj</p>
      </Col>
    </Row>
  </Container>
);

export default index;
