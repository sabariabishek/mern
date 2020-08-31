import React from 'react';

import './Home.scss';
import Content from '../../components/Content/Content.jsx';
import Tags from '../../components/Tags/Tags';

const Home = (props) => {
  const { projectData, getDevProjects, getProjects } = props;
  console.log('hey', getDevProjects)
  const [modal, setModal] = React.useState(false);
  const [projectIndex, setProjectIndex] = React.useState([]);
  const [clickedProject, setClickedProject] = React.useState('');

  const openModal = (e, index) => {
    {!modal ? setModal(true) : setModal(false)}
    {!modal ? setProjectIndex(index) : setProjectIndex('')}
    {!modal ? setClickedProject(projectData[index]) : setClickedProject('')}
  }

  const clickCloseModal = () => {
    {modal ? setModal(false) : setModal(true)}
  }

  const nextProject = () => {
    if (projectIndex === projectData.length - 1) {
      setProjectIndex(0)
    } else if (projectIndex < projectData.length){
      setProjectIndex(projectIndex + 1)
      setClickedProject(projectData[projectIndex+1])
    }
  }

  const previousProject = () => {
    if (projectIndex <= 0) {
      setProjectIndex(projectData.length - 1)
    } else if (projectIndex > 0) {
    setProjectIndex(projectIndex - 1)
    setClickedProject(projectData[projectIndex - 1])
    }
  }

  return (
    <section className="content">
      <Tags getDevProjects={getDevProjects} getProjects={getProjects}/>
      <Content projectData={projectData} openModal={openModal} clickedProject={clickedProject} clickCloseModal={clickCloseModal} modal={modal} projectIndex={projectIndex} nextProject={nextProject} previousProject={previousProject}/>
    </section>
  );
}

export default Home;
