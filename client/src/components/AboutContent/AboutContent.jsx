import React from 'react';

import './AboutContent.scss';

const AboutContent = ({ aboutInfo }) => {
  const education = aboutInfo.education;

  return (
    <section className="content">
      <article className="content__about">
        <section className="content__about__image">
          <img src={aboutInfo.image} alt="" className="content__about__image__img"/>
        </section>
        <section className="content__about__info">
          <section className="information">
            <article><h2 className="information__name">{aboutInfo.name}</h2></article>
            <article className="information__text"><h3 className="information__text__header">Location: </h3><p className="information__text__paragraph">{aboutInfo.city}</p></article>
            <article className="information__text"><h3 className="information__text__header">About: </h3><p className="information__text__paragraph">{aboutInfo.about}</p></article>
            <article className="information__text information__text--tech"><h3 className="information__text__header">Tech: </h3><p className="information__text__paragraph"> {aboutInfo.Tech}</p></article>
            <article className="information__text"><h3 className="information__text__header">Skills: </h3><p className="information__text__paragraph"> {aboutInfo.skills}</p></article>
            <article className="information__text"><h3 className="information__text__header">Languages: </h3><p className="information__text__paragraph"> {aboutInfo.languages}</p></article>
            <article className="information__text"><h3 className="information__text__header">Interests: </h3><p className="information__text__paragraph"> {aboutInfo.interests}</p></article>
            <article className="information__text"><h3 className="information__text__header">Education: </h3></article>
          </section>
        </section>
      </article>
    </section>
  );
}

export default AboutContent;
