import React from 'react';
import './Tags.scss';
import StarIcon from '@material-ui/icons/Star';
import BrushIcon from '@material-ui/icons/Brush';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import CodeIcon from '@material-ui/icons/Code';

const Tags = ({ changeType, type }) => {
  const design = <FormatShapesIcon/>;
  const development = <CodeIcon/>;
  const illustration = <BrushIcon/>
  const tagList = [
    {type: 'All', icon: ''}, 
    {type: 'design', icon: design}, 
    {type: 'Development', icon: development}, 
    {type: 'Illustration', icon: illustration}
  ]

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
        className={`${tag.type === type.type ? 'content__nav__tags__button content__nav__tags__button--active' : 'content__nav__tags__button'}`}
        id={tag.type} 
        onClick={(e) => {
            e.preventDefault();
            changeType(e)
        }}>{tag.type}{tag.icon}</article>
       })}
    </article>
  </section>
  );
}

export default Tags;
