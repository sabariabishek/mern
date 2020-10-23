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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const AboutTimeline = ({ aboutInfo, educationData }) => {
  let loading = true;
  console.log(aboutInfo)
  if(aboutInfo.education === undefined) {
    loading = true;
  } else {
    loading = false;
  }
  console.log(aboutInfo.education)
  return (
      <section className="content__about">
        {loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <section className="timeline__wrapper"> 
          <article className="timeline__content">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={`${aboutInfo.education[0].year} - present`}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{aboutInfo.education[0].program}</h3>
                <h4 className="vertical-timeline-element-subtitle">{aboutInfo.education[0].school}, {aboutInfo.education[0].city}</h4>
                <p>
                  {aboutInfo.education[0].description}
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={aboutInfo.education[1].year}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{aboutInfo.education[1].program}</h3>
                <h4 className="vertical-timeline-element-subtitle">{aboutInfo.education[1].school}, {aboutInfo.education[1].city}</h4>
                <p>
                  {aboutInfo.education[1].description}<br/><br/>
                  <b>Graduated with: {aboutInfo.education[1].grade}</b>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={aboutInfo.education[2].year}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{aboutInfo.education[2].program}</h3>
                <h4 className="vertical-timeline-element-subtitle">{aboutInfo.education[2].school}, {aboutInfo.education[2].city}</h4>
                <p>
                  {aboutInfo.education[2].description}
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </article>
        </section>
        } 
      </section>
  );
}

export default AboutTimeline;
