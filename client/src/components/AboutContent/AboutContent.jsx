import React from 'react';

import './AboutContent.scss';
import { Github, LinkedIn } from '../../Icons/Icons';

const AboutContent = ({ aboutInfo, educationData }) => {
  console.log(educationData)
  return (
    <section className="content">
      <article className="content__about">
        <section className="content__about__image">
          <img src={aboutInfo.image} alt="" className="content__about__image__img"/>
        </section>
        <section className="content__about__info">
          <section className="information">
            <article className="information__header">
              <h2 className="information__header__name">{aboutInfo.name}</h2>
              <article className="information__header__links">
                <a href={aboutInfo.github} className="information__header__links__link">
                  <Github />
                </a>
                <a href={aboutInfo.linkedin} className="information__header__links__link">
                  <LinkedIn />
                </a>
              </article>
            </article>
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
                      <article key={index} className="information__school__item">
                        <article className="information__school__item__text"><h4>School:</h4> <p>{school.school}</p></article>
                        <article className="information__school__item__text"><h4>Program:</h4> <p>{school.program}</p></article>
                        <article className="information__school__item__text"><h4>City:</h4> <p>{school.city}</p></article>
                        <article className="information__school__item__text"><h4>Year:</h4> <p>{school.year}</p></article>
                      </article>
                    );
                  })}
                </section>
            </article>
          </section>
        </section>
      </article>
    </section>
  );
}

export default AboutContent;
