import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import { filterProjects } from '../../js/actions/index';

import './AboutSkills.scss';

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
      <section className="content__about">
        {loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <section className="skills__wrapper"> 
          <section className="skill">
            <h2>DEVELOPMENT</h2>
            <article className="skill__content">
              <section>
                <p>
                  My journey as a developer started in 2018 when I studied Digital Design in Brighton, there I learned UI/UX, e-commerce, marketing, graphic design, advertising and many other valuable skills for the digital market. In 2018 I was mainly a WordPress developer working on smaller and bespoke design projects. 
                </p>
                <p>
                  In 2020 I made the decision to apply to salt and was picked out of 1500 applicants to go through their intense bootcamp. At salt I studied, JavaScript, Node.js, express.js, React, TDD, mob programming among others. Salt gave me the confidence and skills needed to be a flexible, valuable and highly motivated Full Stack Developer able to provide high value right from the start.  
                </p>
                <p>As a developer I lean naturally toward front-end and UI/UX because of my past experiences with design and illustration, but I enjoy working Full-Stack a lot as well.</p>
                <p>My strenghts lay in being able to understand client/user needs and translating them into beatiful, smart and useful applications.</p>
              </section>
            {
              aboutInfo.tech.map(tech => {
                if(tech.type === 'dev') {
                  return <Fade up><article className="skill__content__item">
                    <img src={process.env.PUBLIC_URL + tech.image} alt="" className="skill__content__item__image"/>
                    <h3>{tech.name}</h3>
                  </article></Fade>
                }
              })
            }
              <article className="skill__button__wrapper">
                <Link to="/">
                  <button 
                    className="skill__button" 
                    value="Development"
                    onClick={changeType}>View web projects
                  </button>
                </Link>
              </article>
            </article>
          </section>
          <section className="skill skill--design">
            <span id="design"></span>
            <h2>DESIGN</h2>
            <article className="skill__content">
              <section>
                <p>As I designer I am well-versed with the Adobe CC package and I can design for both print and digital. Some of my skills are in bespoke branding including logos, icons, pampletes, posters and social media content. But my passion in design lays in UI/UX and figuring out smart solutions suitable for clients and their specific needs.</p>
              </section>
            {
              aboutInfo.tech.map(tech => {
                if(tech.type === 'design') {
                  return <Fade up><article className="skill__content__item">
                    <img src={process.env.PUBLIC_URL + tech.image} alt="" className="skill__content__item__image"/>
                    <h3>{tech.name}</h3>
                  </article></Fade>
                }
              })
            }
            </article>
            <article className="skill__button__wrapper">
              <Link to="/">
                <button 
                  className="skill__button" 
                  value="design"
                  onClick={changeType}>View design projects
                </button>
              </Link>
            </article>
          </section>
        </section>
        } 
      </section>
  );
}

export default AboutSkills;
