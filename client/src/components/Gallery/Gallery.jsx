import React from 'react';

import './Gallery.scss';


const Gallery = ({ clickedProject }) => {
  console.log(clickedProject)
  return (
    <article className="modal__gallery">
      <a href="">Arrow left</a>
      <a href="">Arrow Right</a>
      <div className="modal__gallery">
        <img src={clickedProject.image} alt="" className="modal__gallery__image"/>
      </div>
    </article>
  );
}

export default Gallery;
