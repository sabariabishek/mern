import React from 'react';

import './ContentItem.scss';

function ContentItem({ clickedProject }) {
  console.log(clickedProject)
  
  return (
    <article className="content__item__modal">
      
      <p>{clickedProject.description}</p>
    </article>
  );
}

export default ContentItem;
