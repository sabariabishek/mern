import React from 'react';

import './Aside.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

const Aside = () => {
  return (
    <aside className="sidebar">
      <SectionHeader />
      <h2 className="">Sidebar</h2>
    </aside>
  );
}

export default Aside;
