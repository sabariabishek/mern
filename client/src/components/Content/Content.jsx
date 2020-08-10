import React from 'react';
import ContentItem from '../ContentItem/ContentItem';

import './Content.scss';

function Content({ projectData }) {
  console.log(projectData[0])

  return (
    <section className="content">
      <span className="content__divider"></span>
      <h1 className="">Content</h1>
      {projectData.map((item, index) => {
        return (
            <article key={index} className="content__item">
              <div className="content__item__header">
                <h2 className="content__item__header__title">{item.projectName}</h2>
              </div>
              <div className="content__item__image">
                <img src="" alt="" srcset=""/>
              </div>
              <div className="content__item__description">
                <p className="content__item__description__p">
                  {item.description}
                </p>
              </div>
              <div className="content__item__tags">
                <button className="content__item__tags__button">{item.tags[0]}</button>
                <button className="content__item__tags__button">{item.tags[1]}</button>
              </div>
            </article>
          );
        })}
    </section>
  );
}

export default Content;
