import React from 'react';
import Fade from 'react-reveal/Fade';
import './AboutSkills.scss';

const AboutSkills = ({ aboutInfo }) => {
  console.log(aboutInfo)
  let loading = true;
  if(aboutInfo.tech === undefined) {
    loading = true;
  } else {
    loading = false;
  }

  return (
      <section className="content__about">
        {loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <section className="skills__wrapper"> 
          <section className="skill">
            <h2>DEV</h2>
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
              <button>View web development projects</button>
            </article>
          </section>
          <section className="skill">
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
            <button>View design projects</button>
          </section>
        </section>
        } 
      </section>
  );
}

export default AboutSkills;
