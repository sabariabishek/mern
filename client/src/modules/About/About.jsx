import React from 'react';

import './About.scss';
import AboutContent from '../../components/AboutContent/AboutContent.jsx';


const About = (props) => {
  const { projectData, aboutInfo, educationData } = props;
  return (
    <>
      <AboutContent projectData={projectData} aboutInfo={aboutInfo} educationData={educationData}/>
    </>
  );
}

export default About;
