import React from 'react';
import ContentItem from '../ContentItem/ContentItem';

import './Content.scss';

function Content({ projectData, openModal }) {
  console.log(openModal)

  return (
    <section className="content--home">
      <span className="content__divider"></span>
      {projectData.map((item, index) => {
        return (
            <article key={index} className={`content__item content__item--${item.id}`} 
            onClick={(e) => {
              e.preventDefault();
              openModal(e.currentTarget, index)
              }}>
              <div className="content__item__header">
                <div className="content__item__header__title">
                  <h2 className="content__item__header__title__text">{item.projectName}</h2>
                </div>
                <div className="content__item__tags">
                  <button className="content__item__tags__button">{item.tags[0]}</button>
                  <button className="content__item__tags__button">{item.tags[1]}</button>
                </div>
              </div>
              <div className="content__item__image">
                <img src={item.image} alt="" srcset="" className="content__item__image__img"/>
              </div>
              <div className="content__item__description">
                <p className="content__item__description__p">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
    </section>
  );
}

export default Content;
