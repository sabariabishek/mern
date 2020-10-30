import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './AboutArt.scss';
import { filterProjects } from '../../js/actions/index';

import face from "../../assets/images/art/face.jpg";
import father from "../../assets/images/art/dad.jpg";
import green from "../../assets/images/art/green.jpg";
import leaf from "../../assets/images/art/leaf.png";
import boy from "../../assets/images/art/boy.jpg";
import space from "../../assets/images/art/space.png";
import raspberry from "../../assets/images/art/raspberry.jpg";
import butterfly from "../../assets/images/art/butterfly.jpg";
import Fade from 'react-reveal/Fade';

const AboutArt = () => {
  const dispatch = useDispatch();

	const changeType = e => {
    const type = e.target.value;
    dispatch(filterProjects({ type: type }))
  }

  return (
		<section className="content__about content__about--art">
			<section className="art__wrapper">
				<section className="art__content">
					<article className="art__content__item">
						<img src={face} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={father} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={leaf} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={green} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={space} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={raspberry} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={boy} alt=""/>
					</article>
					<article className="art__content__item">
						<img src={butterfly} alt=""/>
					</article>
					<section>
						<p>For as long as I can remember I have had either a brush or pen in my hand. Creating, drawing, painting is a life long passion and my skills in it are many. I prefer to paint with watercolours and gouache, but also know how to paint with acrylics, oil and digitally. Allthough painting and drawing is mainly a personal interest of mine it has given me a natural sense and skill in colour and form which helps and guides my design and development decisions daily.</p>
					</section>
					<section className="skill__button__wrapper">
						<Link to="/">
							<button 
								className="skill__button skill__button--art" 
								value="Illustration"
								onClick={changeType}>View illustration projects
							</button>
						</Link>
					</section>
				</section>
			</section>
		</section>
  );
}

export default AboutArt;
