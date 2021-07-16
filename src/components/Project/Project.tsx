import React from 'react';
import { ProjectProps } from './Project.types'

export const Project: React.FC<ProjectProps> = ({ img, text }) => {
  return (
    <div>
      <img src={img} />
      <p>{text}</p>
    </div>
  );
}

