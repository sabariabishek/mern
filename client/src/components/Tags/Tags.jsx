import React from 'react';
import './Tags.scss';
import StarIcon from '@material-ui/icons/Star';

const Tags = ({ changeType, type }) => {
  const tagList = ['All', 'design', 'Development', 'Illustration']
  return (
  <section className="content__nav">
    <article className="content__nav__tags">
      <article 
        className={`${'favourite' === type.type || '' === type.type ? 'content__nav__tags__button content__nav__tags__button--active' : 'content__nav__tags__button'}`}
        id="favourite" 
        onClick={(e) => {
            e.preventDefault();
            changeType(e)
            }}><StarIcon/>
      </article>
      {tagList.map(tag => {
        return <article 
        className={`${tag === type.type ? 'content__nav__tags__button content__nav__tags__button--active' : 'content__nav__tags__button'}`}
        id={tag} 
        onClick={(e) => {
            e.preventDefault();
            changeType(e)
            }}>{tag} </article>
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
