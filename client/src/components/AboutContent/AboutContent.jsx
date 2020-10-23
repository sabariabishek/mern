import React from 'react';
import Fade from 'react-reveal/Fade';

import './AboutContent.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AboutTimeline from './AboutTimeline';
import AboutSkills from './AboutSkills';


const AboutContent = ({ aboutInfo, educationData }) => {
  return (
    <section className="content">
      <section className="content__about">
        <section className="content__about__image">
          <Fade left>
            <img src={process.env.PUBLIC_URL + aboutInfo.image} alt="" className="content__about__image__img"/>
          </Fade>
        </section>
        <Fade right>
          <section className="content__about__wrapper">
            <article className="content__about__header">
              <h1>Hello, my name is Ninni Hagström</h1>
              <p>{aboutInfo.about}</p>
            </article>
            <article className="content__about__info">
              <article><h3>location:</h3><p>{aboutInfo.city}</p></article>
              <article><h3>skills:</h3><p> Webdevelopment, Illustration, Design</p></article>
              <article><h3>Languages:</h3><p>{aboutInfo.languages}</p></article>
              <article><h3>Interests:</h3><p>{aboutInfo.interests}</p></article>
              <article className="content__about__info--links">
                <h3>Links:</h3>
                <ul>
                  <li>
                    <a href={aboutInfo.github} className="information__header__links__link" target="_blank">
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href={aboutInfo.linkedin} className="information__header__links__link" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </article>
            </article>
          </section>
        </Fade>
      </section>
    <AboutSkills aboutInfo={aboutInfo}/>
    <AboutTimeline aboutInfo={aboutInfo}/>
    </section>
  );
}

export default AboutContent;
