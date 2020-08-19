import React from 'react';

import './Modal.scss';
import Gallery from '../Gallery/Gallery'
import { Close, Github, WebLink } from '../../Icons/Icons';


const Modal = ({ clickedProject, clickCloseModal, nextProject, previousProject }) => {

  return (
    <section className="modal">
      <section className="modal__header">
        <article className="modal__header__title">
          <h2 className="modal__header__title__text">{clickedProject.projectName}</h2>
          <article className="modal__header__title__link">
            {clickedProject.github ? <a href={clickedProject.github} target="_blank"><Github/></a> : null}
            {clickedProject.link ? <a href={clickedProject.link} target="_blank"><WebLink/></a> : null}
          </article>
        </article>
        <div className="modal__header__button">
          <a href="" onClick={(e) => {
              e.preventDefault();
              clickCloseModal(e.currentTarget)
              }} className="modal__header__close">
            <Close />
          </a>
        </div>
      </section>
      <section className="modal__content">
        <Gallery clickedProject={clickedProject} />
        <article className="modal__content__info">
          <h3>Description:</h3><p>{clickedProject.description}</p>
        </article>
      </section>
      <section>
      <article>
          <a href="" onClick={(e) => {
                e.preventDefault();
                previousProject()
                }}><h3>Previous project</h3></a>
        </article>
        <article>
          <a href="" onClick={(e) => {
                e.preventDefault();
                nextProject()
                }}><h3>Next project</h3></a>
        </article>
      </section>

    </section>
  );
}

export default Modal;
