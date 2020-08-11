import React from 'react';

import './Home.scss';
import Content from '../../components/Content/Content.jsx';
import ContentItem from '../../components/ContentItem/ContentItem';


const Home = (props) => {
  const { projectData } = props;
  const [modal, setModal] = React.useState(false);
  const [clickedProject, setClickedProject] = React.useState('');
 
  const openModal = (e, index) => {
    {!modal ? setModal(true) : setModal(false)}
    {!modal ? setClickedProject(projectData[index]) : setClickedProject('')}
  }

  return (
    <section className="content">
      <Content projectData={projectData} openModal={openModal}/>
      {modal ? <ContentItem projectData={projectData} clickedProject={clickedProject}/> : null }
    </section>
  );
}

export default Home;
