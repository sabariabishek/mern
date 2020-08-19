import React from 'react';

import './Modal.scss';
import Gallery from '../Gallery/Gallery'
import { Close, Github, WebLink, Left, Right } from '../../Icons/Icons';


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
      <section className="modal__controls">
        <article className="modal__controls__control">
          <a href="" onClick={(e) => {
                e.preventDefault();
                previousProject()
                }} className="modal__controls__control__item"><h3><Left />Previous project</h3></a>
        </article>
        <article className="controls__wrap">
          <a href="" onClick={(e) => {
                e.preventDefault();
                nextProject()
                }} className="modal__controls__control__item"><h3>Next project<Right/></h3></a>
        </article>
      </section>
    </section>
  );
}

export default Modal;
