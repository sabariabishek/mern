import React from 'react';

import './BlogModal.scss';
import Gallery from '../Gallery/Gallery';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CancelIcon from '@material-ui/icons/Cancel';
import { Github, WebLink } from '../../Icons/Icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from '../../assets/images/others/salt.jpg';


const BlogModal = ({ closeModal, postIndex, clickedPost }) => {
	console.log(clickedPost)
  return (
    <section className="modal modal--blog">
      <section className="modal__header">
        <article className="modal__header__title modal__header__title--blog">
          <h2 className="modal__header__title__text">{clickedPost.title}</h2>
					<article className="modal__header__time">
						<h3>{clickedPost.date} - {clickedPost.time}</h3>
					</article>
        </article>
        <article className="modal__controls">
          <article className="modal__header__button">
					<a href="" 
						onClick={(e) => {
							e.preventDefault();
							closeModal(e.currentTarget)
							}}
						className="modal__header__close">
            <CancelIcon />
          </a>
        </article>
        </article>
      </section>
      <section className="modal__content">
				<section className="modal__content__text">
					<p dangerouslySetInnerHTML={{__html: clickedPost.text}}></p>
				</section>
        <article className="modal__bloginfo">
					<section className="modal__bloginfo__image"><img src={clickedPost.image} alt=""/></section>
          <section className="modal__bloginfo__text">
						<section className="modal__bloginfo__tags">
							{clickedPost.tags.map(tag => <h3>{tag}</h3>)}
						</section>
						<h3>Description:</h3><p>{clickedPost.description}</p>
						<h3>Written by:</h3><p>{clickedPost.writer}</p>
						<h3>Source:</h3><p dangerouslySetInnerHTML={{__html: clickedPost.source}}></p>
					</section>
        </article>
      </section>
    </section>
  );
}

export default BlogModal;
