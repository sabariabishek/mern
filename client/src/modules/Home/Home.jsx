import React from 'react';

import './Home.scss';
import Content from '../../components/Content/Content.jsx';


const Home = (props) => {
  const { projectData } = props;
  const [modal, setModal] = React.useState(false);
  const [clickedProject, setClickedProject] = React.useState('');
 
  const openModal = (e, index) => {
    {!modal ? setModal(true) : setModal(false)}
    {!modal ? setClickedProject(projectData[index]) : setClickedProject('')}
  }

  const clickCloseModal = () => {
    {modal ? setModal(false) : setModal(true)}
  }

  return (
    <section className="content">
      <Content projectData={projectData} openModal={openModal} clickedProject={clickedProject} clickCloseModal={clickCloseModal} modal={modal}/>
    </section>
  );
}

export default Home;
