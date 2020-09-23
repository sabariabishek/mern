import React from 'react';

import './Aside.scss';

const Aside = ({ aboutInfo }) => {
  return (
    <aside className="sidebar">
      <section className="sidebar__description">
        <p className="sidebar__description__p">{aboutInfo.about}</p>
        <p className="sidebar__description__p sidebar__description__p--salt">{aboutInfo.salt}</p>
      </section>
    </aside>
  );
}

export default Aside;
