import React from 'react';

import './Gallery.scss';
import { Left } from '../../Icons/Icons';


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
      <div className="modal__gallery__thumbnails">
      {gallery.map((image, index) => {
        return (
          <div key={index} className="thumbnail">
            <img src={image} alt="" className="thumbnail__image"/>
          </div>
        )
      })}
      </div>
    </article>
  );
}

export default Gallery;
