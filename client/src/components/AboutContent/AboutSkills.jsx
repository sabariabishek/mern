import React from 'react';
import Fade from 'react-reveal/Fade';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import './AboutSkills.scss';
import SchoolIcon from '@material-ui/icons/School';
import BrushIcon from '@material-ui/icons/Brush';


const AboutSkills = ({ aboutInfo }) => {
  console.log(aboutInfo)
  let loading = true;
  if(aboutInfo.tech === undefined) {
    loading = true;
  } else {
    loading = false;
  }

  return (
      <section className="content__about">
        {loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <section className="skills__wrapper"> 
          <h2>Skills</h2>
          <section className="skill">
            <h2>DEV</h2>
            {
              aboutInfo.tech.map(tech => {
                if(tech.type === 'dev') {
                  return <Fade up><article className="skill__item">
                    <img src={process.env.PUBLIC_URL + tech.image} alt="" className="skill__item__image"/>
                    <h3>{tech.name}</h3>
                  </article></Fade>
                }
              })
            }
          </section>
          <section className="skill">
            <h2>DESIGN</h2>
            {
              aboutInfo.tech.map(tech => {
                if(tech.type === 'design') {
                  return <Fade up><article className="skill__item">
                    <img src={process.env.PUBLIC_URL + tech.image} alt="" className="skill__item__image"/>
                    <h3>{tech.name}</h3>
                  </article></Fade>
                }
              })
            }
          </section>
        </section>
        } 
      </section>
  );
}

export default AboutSkills;
