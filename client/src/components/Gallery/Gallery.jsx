import React from 'react';

import './Gallery.scss';
import { Left } from '../../Icons/Icons';


const Gallery = ({ clickedProject }) => {
  console.log(clickedProject)
  return (
    <article className="modal__gallery">
      {/* <Left /> */}
      <div className="modal__gallery">
        <img src={clickedProject.image} alt="" className="modal__gallery__image"/>
      </div>
    </article>
  );
}

export default Gallery;
