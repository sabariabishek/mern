import React from 'react';
import Modal from '../Modal/Modal';

import './Content.scss';

function Content({ projectData, openModal, clickCloseModal, clickedProject, modal }) {

  return (
    <section className="content--home">
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
                  {item.tags.map((tags, index) => {
                    return (
                      <article key={index}>
                        <button className="content__item__tags__button">{tags}</button>
                      </article>
                    )
                  })}
                </div>
              </div>
              <div className="content__item__image">
                <img src={item.image} alt="" srcSet="" className="content__item__image__img"/>
              </div>
            </article>
          );
        })}
        {modal ? <Modal projectData={projectData} clickedProject={clickedProject} clickCloseModal={clickCloseModal}/> : null }
    </section>
  );
}

export default Content;
