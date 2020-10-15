import React from 'react';
import './Tags.scss';

const Tags = ({ getDevProjects, getProjects, changeType }) => {
  const tagList = ['All', 'design', 'Development', 'Illustration']
  
  return (
  <section className="content__nav">
    <article className="content__nav__tags">
      {tagList.map(tag => {
        return <button 
        className="content__nav__tags__button"
        id={tag} 
        onClick={(e) => {
            e.preventDefault();
            changeType(e)
            }}>{tag} </button>
       })}
    </article>
    {/* <article className="content__nav__input">
      <input type="text"/>
      <button>search</button>
    </article> */}
  </section>
  );
}

export default Tags;
