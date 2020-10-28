import React from 'react';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import './Aside.scss';

import ImageOne from '../../assets/images/art/raspberry.jpg'
import ImageTwo from '../../assets/images/design/final-project-00.jpg'
import ImageThree from '../../assets/images/development/creu-04.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const slideImages = [
  ImageOne,
  ImageTwo,
  ImageThree
];

const Aside = ({ aboutInfo }) => {
  return (
    <aside className="sidebar">
      <section className="sidebar__description">
        <Fade right>
          <section className="slider">
            <Slide easing="ease">
              <article className="each-slide">
                <article style={{'backgroundImage': `url(${slideImages[0]})`}}>
                </article>
              </article>
              <article className="each-slide">
                <article style={{'backgroundImage': `url(${slideImages[1]})`}}>
                </article>
              </article>
              <article className="each-slide">
                <article style={{'backgroundImage': `url(${slideImages[2]})`}}>
                </article>
              </article>
            </Slide>
            <section className="slider__overlay">
              <h1 className="slider__header">I am a Full-stack JavaScript Developer, Designer and Illustrator</h1>
              <article>
                <Link to="/about">
                  <button>View Profile</button>
                </Link>
                <Link to="/">
                  <button>View Projects</button>
                </Link>
              </article>
            </section>
        </section>
        </Fade>
        <Fade right>
          <section className="sidebar__description">
            <p className="sidebar__description__p sidebar__description__p--salt">{aboutInfo.salt}</p>
            <article className="sidebar__links">
              <LinkedInIcon />
              <GitHubIcon />
            </article>
          </section>
        </Fade>
      </section>
    </aside>
  );
}

export default Aside;
