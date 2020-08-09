import React from 'react';

import './Home.scss';
import Content from '../../components/Content/Content.jsx';


const Home = (props) => {
  const { projectData } = props;

  return (
    <>
      <Content projectData={projectData}/>
    </>
  );
}

export default Home;
