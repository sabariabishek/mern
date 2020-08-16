import React from 'react';

import './Gallery.scss';
import { Left } from '../../Icons/Icons';
import Thumbnails from '../Thumbnails/Thumbnails';


const Gallery = ({ clickedProject }) => {
  const [imageNumber, setImageNumber] = React.useState(0);
  const gallery = clickedProject.gallery;
  const galleryImages = gallery.length;

  const nextImage = () => {
    if (imageNumber === galleryImages - 1) {
      setImageNumber(0)
    } else if (imageNumber < gallery.length){
      setImageNumber(imageNumber + 1)
    }
  }
 
  const prevImage = () => {
    if (imageNumber <= 0) {
      setImageNumber(galleryImages - 1)
    } else if (imageNumber > 0)
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
      <div className="modal__gallery__image">
        <img src={gallery[imageNumber]} alt="" className="modal__gallery__image__img"/>
      </div>
      <Thumbnails clickedProject={clickedProject}/>
    </article>
  );
}

export default Gallery;
