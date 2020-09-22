import React from 'react';

import './Thumbnails.scss';


const Thumbnails = ({ clickedProject, clickedThumbnail }) => {
  const gallery = clickedProject.gallery;
  console.log(gallery)
  return (
    <section className="modal__gallery__thumbnails">
    {gallery.map((image, index) => {
      return (
        <article key={index} className="thumbnail" 
        onClick={(e) => {
          e.preventDefault();
          clickedThumbnail(index)
          }}>
          <img src={image} alt="" className="thumbnail__image"/>
        </article>
      )
    })}
    </section>
  );
}

export default Thumbnails;
