import React, { useEffect, useState, createRef } from 'react';
import Modal from '../Modal/Modal';
import Fade from 'react-reveal/Fade';
import './Content.scss';
import { useDispatch, useSelector } from 'react-redux'

import BrushIcon from '@material-ui/icons/Brush';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import CodeIcon from '@material-ui/icons/Code';
import StarIcon from '@material-ui/icons/Star';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

import { Tooltip } from '@material-ui/core';

function Content({ projectIndex, openModal, clickCloseModal, clickedProject, modal, nextProject, previousProject, type }) {
  let projectData = useSelector(state => state.projectReducer.results);
  console.log(projectData)
  let loading = false;
  
  if(projectData === undefined || projectData.loading) {
    projectData = ['']
    loading = true;
  } else {
    loading = false
  }

  let [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const count = Math.ceil(projectData.length / PER_PAGE);
  const _DATA = usePagination(projectData, PER_PAGE);

  const handleChange = (e, page) => {
    setPage(page);
    _DATA.jump(page);
  };

  return (
    <section className="content--home">
      { loading ? 
          <section className="content__loading">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h3>Loading projects...</h3>
          </section>
        :
          <section className="content__content">
          <article className="content__pagination">
            <article></article>
            <article>
            <Pagination
                count={count}
                size="small"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </article>
            <article>Total projects showing: {projectData.length}</article>
          </article>
          {_DATA.currentData().map((item, index) => {
            return (
              <Fade up>
                <article key={index} className={`content__item content__item--${item.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  openModal(e.currentTarget, projectData.indexOf(item))
                  }}>
                  <div className="content__item__hover"></div>
                  <div className="content__item__header">
                    <div className="content__item__header__title">
                      <h2 className="content__item__header__title__text">{item.projectName}</h2>
                      <article className="content__item__header__title__type">
                        {item.type === 'Development' ? 
                        <Tooltip 
                          title="Development" 
                          placement="left">
                          <CodeIcon/>
                        </Tooltip> 
                        : item.type === 'design' ? 
                        <Tooltip
                          title="Design" 
                          placement="left">
                          <FormatShapesIcon/> 
                        </Tooltip>
                        : item.type === 'Illustration' ? 
                        <Tooltip                          
                          title="Illustration" 
                          placement="left">
                          <BrushIcon /> 
                        </Tooltip>
                        : null}
                        {item.favourite ? 
                          <Tooltip 
                          title="Favourite" 
                          placement="top">
                            <StarIcon/>
                          </Tooltip> 
                          : null}
                      </article>
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
          {modal ? 
          <Modal 
            projectData={projectData} 
            clickedProject={clickedProject} 
            clickCloseModal={clickCloseModal} 
            projectIndex={projectIndex} 
            nextProject={nextProject} 
            previousProject={previousProject}/> 
          : null }
          <article className="content__pagination">
            <Pagination
                count={count}
                size="small"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
          </article>
        </section>
    }
    
    </section>
  );
}

export default Content;
