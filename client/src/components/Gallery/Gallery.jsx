import React from 'react';

import './Gallery.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

  const clickedThumbnail = (image) => {
    setImageNumber(image)
  }

  return (
    <article className="modal__gallery">
      <article className="modal__gallery__image">
        <img src={gallery[imageNumber]} alt="" className="modal__gallery__image__img"/>
      </article>
      <section className="modal__thumbnav">
        <article className="modal__gallery__nav">
          <a href="" onClick={(e) => {
                  e.preventDefault();
                  prevImage()
                  }}><ArrowBackIosIcon />
          </a>
        </article>
        <Thumbnails clickedProject={clickedProject} clickedThumbnail={clickedThumbnail}/>
        <article
         className="modal__gallery__nav">
          <a href="" onClick={(e) => {
                  e.preventDefault();
                  nextImage()
                  }}><ArrowForwardIosIcon/>
          </a>
        </article>
      </section>
    </article>
  );
}

export default Gallery;
