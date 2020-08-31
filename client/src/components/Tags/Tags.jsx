import React from 'react';
import './Tags.scss';

function Tags({ getDevProjects, getProjects, changeType }) {
  console.log(changeType)
  return (
  <section className="content__nav">
    <article className="content__nav__tags">
      <button className="content__nav__tags__button" onClick={(e) => {
              e.preventDefault();
              getProjects();
              }}>All</button>
      <button className="content__nav__tags__button" onClick={(e) => {
          changeType(e)
        }} value="Design">Design</button>
      <button className="content__nav__tags__button" onClick={(e) => {
              e.preventDefault();
              getDevProjects();
              }}>Web dev</button>
      <button className="content__nav__tags__button">Illustration</button>
      <button className="content__nav__tags__button">WordPress</button>
      <button className="content__nav__tags__button">React</button>
    </article>
    <article className="content__nav__input">
      <input type="text"/>
      <button>search</button>
    </article>
  </section>
  );
}

export default Tags;
