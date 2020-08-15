import React from 'react';

import './Gallery.scss';
import { Left } from '../../Icons/Icons';


const Gallery = ({ clickedProject }) => {
  const [imageNumber, setImageNumber] = React.useState(0);
  const gallery = clickedProject.gallery;

  const nextImage = () => {
    setImageNumber(imageNumber + 1)
  }
  const prevImage = () => {
    setImageNumber(imageNumber - 1)
  }

  return (
    <article className="modal__gallery">
      <a href="" onClick={(e) => {
              e.preventDefault();
              prevImage()
              }}>Left</a>
      <a href="" onClick={(e) => {
              e.preventDefault();
              nextImage()
              }}>Right</a>
      <div className="modal__gallery">
        <img src={gallery[imageNumber]} alt="" className="modal__gallery__image"/>
      </div>
    </article>
  );
}

export default Gallery;
