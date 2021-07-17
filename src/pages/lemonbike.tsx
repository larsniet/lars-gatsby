import React from "react";
import {
  SingleProject,
  SingleProjectImage,
  SingleProjectTextContainer,
  SingleProjectTitle,
  SingleProjectSub
} from '../containers/SingleProject/SingleProject.components'

const lemonbike = require('../images/projects/lemonbike.jpg').default;


const Lemonbike: React.FC = () => (
  <SingleProject>
    <SingleProjectImage src={lemonbike} />
    <SingleProjectTextContainer>
      <SingleProjectTitle>Maak het verschil</SingleProjectTitle>
      <SingleProjectSub>Lemonbike</SingleProjectSub>
    </SingleProjectTextContainer>
  </SingleProject>
);

export default Lemonbike;