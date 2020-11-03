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
import SearchIcon from '@material-ui/icons/Search';

const AboutTimeline = ({ aboutInfo, educationData }) => {
  let loading = true;
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
          <article className="timeline__content">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#485460', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #485460' }}
                date={aboutInfo.education[0].year}
                iconStyle={{ background: '#1e272e', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{aboutInfo.education[0].program}</h3>
                <h4 className="vertical-timeline-element-subtitle">{aboutInfo.education[0].school}, {aboutInfo.education[0].city}</h4>
                <p>
                  {aboutInfo.education[0].description}
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#485460', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #485460' }}
                date={aboutInfo.education[1].year}
                iconStyle={{ background: '#1e272e', color: '#fff' }}
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
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#00d8d6', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 216, 214)' }}
                date={`${aboutInfo.education[2].year} - present`}
                iconStyle={{ background: '#1e272e', color: '#fff' }}
                icon={<SearchIcon />}
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
