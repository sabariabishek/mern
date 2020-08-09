import React from 'react';

import './Content.scss';

function Content({ projectData }) {
  console.log(projectData)
  return (
    <section className="content">
      <span className="content__divider"></span>
      <h1 className="">Content</h1>
    </section>
  );
}

export default Content;
