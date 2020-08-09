import React from 'react';

import './About.scss';
import AboutContent from '../../components/AboutContent/AboutContent.jsx';


const About = (props) => {
  const { projectData } = props;

  return (
    <>
      <AboutContent projectData={projectData}/>
    </>
  );
}

export default About;
