import React from 'react';
import { Router, Route, Switch } from "react-router";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Aside from './components/Aside/Aside.jsx';
import Content from './components/Content/Content.jsx';
import Main from './components/Main/Main.jsx';



import './App.scss';

const App = () => {
  const [projectData, setProjectData] = React.useState([]);

  React.useEffect(() => {
    const getProjects = () => {
      fetch('/api/data')
      .then(res => res.json())
      .then(data => setProjectData(data))
      .catch(error => console.log(error))
    }
    getProjects()
  }, [])

  console.log(projectData)

  return (
    <main className="main">
      <section className="main__section">
        <Header />
        <Main projectData={projectData}/>
        <Aside />
      </section>
      <Footer />
    </main>
  );
}

export default App;
