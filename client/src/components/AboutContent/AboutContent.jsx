import React from 'react';
import Fade from 'react-reveal/Fade';

import './AboutContent.scss';
import { Github, LinkedIn } from '../../Icons/Icons';

const AboutContent = ({ aboutInfo, educationData }) => {
  return (
    <section className="content">
      <article className="content__about">
        <Fade left>
        <section className="content__about__image">
          <img src={process.env.PUBLIC_URL + aboutInfo.image} alt="" className="content__about__image__img"/>
        </section>
        </Fade>
        <Fade right>
        <section className="content__about__info">
          <section className="information">
            <article className="information__header">
              <h2 className="information__header__name">{aboutInfo.name}</h2>
              <article className="information__header__links">
                <a href={aboutInfo.github} className="information__header__links__link" target="_blank">
                  <Github />
                </a>
                <a href={aboutInfo.linkedin} className="information__header__links__link" target="_blank">
                  <LinkedIn />
                </a>
              </article>
            </article>
            <section className="information__info">  
              <article className="information__text"><h3 className="information__text__header">Location: </h3><p className="information__text__paragraph">{aboutInfo.city}</p></article>
              <article className="information__text information__text--tech"><h3 className="information__text__header">Tech: </h3><p className="information__text__paragraph"> {aboutInfo.Tech}</p></article>
              <article className="information__text"><h3 className="information__text__header">Skills: </h3><p className="information__text__paragraph"> {aboutInfo.skills}</p></article>
              <article className="information__text"><h3 className="information__text__header">Languages: </h3><p className="information__text__paragraph"> {aboutInfo.languages}</p></article>
              <article className="information__text"><h3 className="information__text__header">Interests: </h3><p className="information__text__paragraph"> {aboutInfo.interests}</p></article>
              <article className="information__text information__text--school">
                <h3 className="information__text__header">Education: </h3>
                  <section className="information__school">
                    {educationData.map((school, index) => {
                      return (
                        <section key={index} className="information__school__item">
                          <h4 className="information__school__item__header">{school.city}, {school.year}</h4>
                          <article className="information__school__item__description">
                            <article className="information__school__item__description__text"><h4>School:</h4> <p>{school.school}</p></article>
                            <article className="information__school__item__description__text"><h4>Program:</h4> <p>{school.program}</p></article>
                          </article>
                        </section>
                      );
                    })}
                  </section>
              </article>
            </section>
          </section>
        </section>
        </Fade>
      </article>
    </section>
  );
}

export default AboutContent;
