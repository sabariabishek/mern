import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import { filterProjects } from '../../js/actions/index';

import './AboutSkill.scss';
import { Tooltip } from '@material-ui/core';

const AboutSkills = ({ aboutInfo }) => {
  const dispatch = useDispatch();

  let loading = true;
  if(aboutInfo.tech === undefined) {
    loading = true;
  } else {
    loading = false;
  }

  const changeType = e => {
    const type = e.target.value;
    dispatch(filterProjects({ type: type }))
  }

  return (
      <>
        <section className="content__about content__about--logos">
          { loading ? 
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          : 
          <>
            <span id="Dev"></span>
            <section className="content__about__info content__about__info--logos"> 
              <article><h3>Technologies</h3>
                <p>
                  In 2020 I made the decision to apply to salt and was picked out of 1500 applicants to go through their intense bootcamp. At salt I studied, JavaScript, Node.js, express.js, React, TDD and mob programming among others. Salt gave me the confidence and skills needed to be a flexible, valuable and highly motivated Full-Stack Developer able to provide high value right from the start.  
                </p>
              </article>
              <Link to="/projects">
                <button
                onClick={changeType}
                value="Development">View my code projects</button>
              </Link>
            </section>
            <Fade right>
            <section className="content__about__logo">
              {
                aboutInfo.tech.map(tech => {
                  if(tech.type === 'dev') {
                    return <Tooltip title={tech.name}><article className="content__about__logo__item">
                      <img src={process.env.PUBLIC_URL + tech.image} alt="" />
                    </article></Tooltip>
                  }
                })
              }
            </section>
            </Fade>
            <Fade left>
            <section className="content__about__logo">
              {
                aboutInfo.tech.map(tech => {
                  if(tech.type === 'design') {
                    return <Tooltip title={tech.name}><article className="content__about__logo__item">
                      <img src={process.env.PUBLIC_URL + tech.image} alt="" className="skill__content__item__image"/>
                    </article></Tooltip>
                  }
                })
              }
            </section>
            </Fade>
            <section className="content__about__info content__about__info--logos"> 
              <article>
                <span id="Design"></span>
                <h3>Design</h3>
                <p>As I designer I am well-versed with the Adobe CC package and I can design for both print and digital. Some of my skills are in bespoke branding including logos, icons, pampletes, posters and social media content. But my passion in design lays in UI/UX and figuring out smart solutions suitable for clients and their specific needs.</p>
              </article>
              <Link to="/projects">
                <button
                onClick={changeType}
                value="design">View my design projects</button>
              </Link>
            </section>
          </>
          }
        </section>
    </>
  );
}

export default AboutSkills;
