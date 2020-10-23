import React from 'react';
import Fade from 'react-reveal/Fade';

import './Aside.scss';

const Aside = ({ aboutInfo }) => {
  return (
    <aside className="sidebar">
      <section className="sidebar__description">
        <Fade right>
          <p className="sidebar__description__p">{aboutInfo.about}</p>
        </Fade>
        <Fade right>
        <p className="sidebar__description__p sidebar__description__p--salt">{aboutInfo.salt}</p>

        </Fade>
      </section>
    </aside>
  );
}

export default Aside;
