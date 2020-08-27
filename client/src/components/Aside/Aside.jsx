import React from 'react';

import './Aside.scss';

const Aside = ({ aboutInfo }) => {
  console.log(aboutInfo)
  return (
    <aside className="sidebar">
      <section className="sidebar__description">
        <p className="sidebar__description__p">"{aboutInfo.about}"</p>
      </section>
    </aside>
  );
}

export default Aside;
