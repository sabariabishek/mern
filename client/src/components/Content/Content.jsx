import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Fade from 'react-reveal/Fade';
import './Content.scss';
import { useDispatch, useSelector } from 'react-redux'


function Content({ projectIndex, openModal, clickCloseModal, clickedProject, modal, nextProject, previousProject, type }) {
  let projectData = useSelector(state => state.projectReducer.results);
  console.log(projectData)

  let loading = false;

  if(projectData === undefined) {
    projectData = ['']
    loading = true;
  } else {
    loading = false
  }

  return (
    <section className="content--home">
      { loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
          <section className="content__content">
          {projectData.map((item, index) => {
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
                    <Fade down>
                      <div className="content__item__tags">
                        {item.tags.map((tags, index) => {
                          return (
                            <article key={index}>
                              <button className="content__item__tags__button">{tags}</button>
                            </article>
                          )
                        })}
                      </div>
                    </Fade>
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
    }
      
     
    </section>
  );
}

export default Content;
