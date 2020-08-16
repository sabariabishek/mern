import React from 'react';

import './Thumbnails.scss';


const Thumbnails = ({ clickedProject }) => {
  const gallery = clickedProject.gallery;

  return (
    <div className="modal__gallery__thumbnails">
    {gallery.map((image, index) => {
      return (
        <div key={index} className="thumbnail">
          <img src={image} alt="" className="thumbnail__image"/>
        </div>
      )
    })}
    </div>
  );
}

export default Thumbnails;
