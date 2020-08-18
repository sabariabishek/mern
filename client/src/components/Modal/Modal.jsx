import React from 'react';

import './Modal.scss';
import Gallery from '../Gallery/Gallery'
import { Close, Github, WebLink } from '../../Icons/Icons';


const Modal = ({ clickedProject, clickCloseModal }) => {
  return (
    <section className="modal">
      <section className="modal__header">
        <article className="modal__header__title">
          <h2 className="modal__header__title__text">{clickedProject.projectName}</h2>
          <article className="modal__header__title__link">
            {clickedProject.github ? <a href={clickedProject.github}><Github/></a> : null}
            {clickedProject.link ? <a href={clickedProject.link}><WebLink/></a> : null}
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
    </section>
  );
}

export default Modal;
