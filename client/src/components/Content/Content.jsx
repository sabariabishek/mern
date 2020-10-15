import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import Fade from 'react-reveal/Fade';
import './Content.scss';

function Content({ projectData, projectIndex, openModal, clickCloseModal, clickedProject, modal, nextProject, previousProject, type }) {

  let result = projectData.filter((project, index) => {
    if(type.type === 'All'){
      return project
    } else if(project.type === type.type){
      return project
    }
  })
  console.log('result:', result)

  return (
    <section className="content--home">
      {result.map((item, index) => {
          return (
            <Fade up>
              <article key={index} className={`content__item content__item--${item.id}`} 
              onClick={(e) => {
                e.preventDefault();
                openModal(e.currentTarget, index)
                }}>
                <div className="content__item__hover"></div>
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
            </Fade>
          );
        })} 
        {modal ? <Modal projectData={projectData} clickedProject={clickedProject} clickCloseModal={clickCloseModal} projectIndex={projectIndex} nextProject={nextProject} previousProject={previousProject}/> : null }
    </section>
  );
}

export default Content;
