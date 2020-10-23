import React from 'react';
import Fade from 'react-reveal/Fade';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import './AboutTimeline.scss';
import SchoolIcon from '@material-ui/icons/School';
import BrushIcon from '@material-ui/icons/Brush';


const AboutTimeline = ({ aboutInfo, educationData }) => {
  let loading = true;
  console.log(aboutInfo)
  if(aboutInfo.education === undefined) {
    loading = true;
  } else {
    loading = false;
  }

  return (
      <section className="content__about">
        {loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <section className="timeline__wrapper"> 
          <h2>Timeline</h2>
          <React.Fragment>
            <Timeline align="alternate">
              {aboutInfo.education.map(school => {
                return (
                  <Fade up>
                  <TimelineItem>
                      <TimelineOppositeContent>
                        <article>
                          <h3>{school.year}</h3>
                          <h3>{school.program}</h3>
                          <h3>{school.school}</h3>
                        </article>
                      </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <SchoolIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                  </TimelineSeparator>
                    <TimelineContent>
                      <img src={process.env.PUBLIC_URL + school.image} alt="" className="timeline__image"/>
                    </TimelineContent>
                </TimelineItem>
                </Fade>
                )
              })}
            </Timeline>
          </React.Fragment>
        </section>
        } 
      </section>
  );
}

export default AboutTimeline;
