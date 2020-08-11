import React from 'react';

import './Home.scss';
import Content from '../../components/Content/Content.jsx';
import ContentItem from '../../components/ContentItem/ContentItem';


const Home = (props) => {
  const { projectData } = props;
  const [modal, setModal] = React.useState(false);


  const openModal = () => {
    {!modal ? setModal(true) : setModal(false)}
  }
  console.log(modal)

  return (
    <section className="content">
      <Content projectData={projectData} openModal={openModal}/>
      {modal ? <ContentItem projectData={projectData}/> : null }
    </section>
  );
}

export default Home;
