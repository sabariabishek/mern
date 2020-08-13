import React from 'react';

import './Modal.scss';
import Gallery from '../Gallery/Gallery'
import { Close } from '../../Icons/Icons';


const ContentItem = ({ clickedProject, clickCloseModal }) => {
  return (
    <section className="modal">
      <article className="modal__header">
        <div className="modal__header__title">
          <h2 className="modal__header__title__text">{clickedProject.projectName}</h2>
        </div>
        <div className="modal__header__button">
          <a href="" onClick={(e) => {
              e.preventDefault();
              clickCloseModal(e.currentTarget)
              }}>
            <Close />
          </a>
        </div>
      </article>
      <Gallery clickedProject={clickedProject} />
      <article className="modal__content">
        <h3>Description:</h3><p>{clickedProject.description}</p>
      </article>
    </section>
  );
}

export default ContentItem;
