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
					<section className="skill__button__wrapper">
						<Link to="/">
							<button 
								className="skill__button skill__button--art" 
								value="illustration"
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
