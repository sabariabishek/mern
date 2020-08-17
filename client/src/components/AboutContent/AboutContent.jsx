import React from 'react';

import './AboutContent.scss';

const AboutContent = ({ aboutInfo }) => {

  return (
    <section className="content">
      <article className="content__about">
        <section>
          <img src="" alt=""/>
        </section>
        <section>
          <article>
            <h2>Information</h2>
            <h3>Education</h3>
            <h3>Skills</h3>
            <h3>Interests</h3>
          </article>
        </section>
      </article>
    </section>
  );
}

export default AboutContent;
