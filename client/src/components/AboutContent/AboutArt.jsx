import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './AboutArt.scss';
import { filterProjects } from '../../js/actions/index';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import face from "../../assets/images/art/face.jpg";
import father from "../../assets/images/art/dad.jpg";
import ImageOne from "../../assets/images/art/green.jpg";
import ImageThree from "../../assets/images/art/leaf.png";
import boy from "../../assets/images/art/boy.jpg";
import space from "../../assets/images/art/space.png";
import raspberry from "../../assets/images/art/raspberry.jpg";
import ImageTwo from "../../assets/images/art/butterfly.jpg";
import Fade from 'react-reveal/Fade';

const slideImages = [
  ImageOne,
  ImageTwo,
  ImageThree
];

const AboutArt = () => {
  const dispatch = useDispatch();

	const changeType = e => {
    const type = e.target.value;
    dispatch(filterProjects({ type: type }))
  }

  return (
		<section className="content__about content__about--art">
			<span id="art"></span>
			<section className="art__wrapper">
				<section className="art__content">
					<article className="slider">
						<div className="slide-container">
							<Slide>
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
						</div>
						<section>
							<h3>Illustration</h3>
							<p>For as long as I can remember I have had either a brush or pen in my hand. Creating, drawing, painting is a life long passion and my skills in it are many. I prefer to paint with watercolours and gouache, but also know how to paint with acrylics, oil and digitally. Allthough painting and drawing is mainly a personal interest of mine it has given me a natural sense and skill in colour and form which helps and guides my design and development decisions daily.</p>
							<Link to="/projects">
                <button
                onClick={changeType}
                value="Illustration">View my Illustration projects</button>
              </Link>
						</section>
					</article>
				</section>
			</section>
		</section>
  );
}

export default AboutArt;
