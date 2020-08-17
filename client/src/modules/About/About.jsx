import React from 'react';

import './About.scss';
import AboutContent from '../../components/AboutContent/AboutContent.jsx';


const About = (props) => {
  const { projectData, aboutInfo } = props;

  return (
    <>
      <AboutContent projectData={projectData} aboutInfo={aboutInfo}/>
    </>
  );
}

export default About;
