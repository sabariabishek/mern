import React from 'react';

import './Modal.scss';
import Gallery from '../Gallery/Gallery';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CancelIcon from '@material-ui/icons/Cancel';
import { Github, WebLink } from '../../Icons/Icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const Modal = ({ clickedProject, clickCloseModal, nextProject, previousProject }) => {
  return (
    <>
    <section 
      className="underlay" 
      onClick={(e) => {
        e.preventDefault();
        clickCloseModal(e.currentTarget)
        }}></section>
    <section className="modal">
      <section className="modal__header">
        <article className="modal__header__title">
          <h2 className="modal__header__title__text">{clickedProject.projectName}</h2>
          <article className="modal__header__title__link">
            {clickedProject.github ? <a href={clickedProject.github} target="_blank"><GitHubIcon/></a> : null}
            {clickedProject.link ? <a href={clickedProject.link} target="_blank"><LinkIcon/></a> : null}
          </article>
        </article>
        <article className="modal__controls">
          <article className="modal__controls__control modal__controls__control--desktop">
            <a href="" onClick={(e) => {
                  e.preventDefault();
                  previousProject()
                  }}><h3 className="modal__controls__control__item modal__controls__control__item--left"><ArrowRightAltIcon />Previous project</h3></a>
          </article>
          <article className="modal__controls__control modal__controls__control--desktop">
            <a href="" onClick={(e) => {
                  e.preventDefault();
                  nextProject()
                  }}><h3 className="modal__controls__control__item">Next project<ArrowRightAltIcon/></h3></a>
          </article>
          <article className="modal__header__button">
          <a href="" onClick={(e) => {
              e.preventDefault();
              clickCloseModal(e.currentTarget)
              }} className="modal__header__close">
            <CancelIcon />
          </a>
        </article>
        </article>
      </section>
      <section className="modal__content">
        <Gallery clickedProject={clickedProject} />
        <article className="modal__content__info">
          <section className="modal__content__info__tags">
            {clickedProject.tags.map(tag => {
              return(<article>{tag}</article>)
            })}
          </section>
          <h3>Year:</h3><p>{clickedProject.year}</p>
          <h3>Description:</h3><p>{clickedProject.description}</p>
          {clickedProject.tools ? <><h3>Tools:</h3><p>{clickedProject.tools}</p></> : null}
        </article>
      </section>
      <section className="modal__controls">
        <article className="modal__controls__control modal__controls__control--mobile">
          <a href="" onClick={(e) => {
                e.preventDefault();
                previousProject()
                }}><h3 className="modal__controls__control__item modal__controls__control__item--left"><ArrowRightAltIcon />Previous project</h3></a>
        </article>
        <article className="modal__controls__control modal__controls__control--mobile">
          <a href="" onClick={(e) => {
                e.preventDefault();
                nextProject()
                }}><h3 className="modal__controls__control__item">Next project<ArrowRightAltIcon/></h3></a>
        </article>
      </section>
    </section>
    </>
  );
}

export default Modal;
