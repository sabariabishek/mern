import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import { filterProjects } from '../../js/actions/index';

import './AboutSkills.scss';

const AboutSkills = ({ aboutInfo }) => {
  const dispatch = useDispatch();

  console.log(aboutInfo)
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
