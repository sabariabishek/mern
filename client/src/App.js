import React from 'react';
import { Router, Route, Switch } from "react-router";

import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon, Menu, Close } from './Icons/Icons'

import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Main from './components/Main/Main.jsx';
import TopBar from './components/TopBar/TopBar.jsx';



import './App.scss';

const App = () => {
  const [projectData, setProjectData] = React.useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const getProjects = () => {
    fetch('/api/data')
    .then(res => res.json())
    .then(data => setProjectData(data))
    .catch(error => console.log(error))
  }

  const openMenu = () => {
    {!menuOpen ? setMenuOpen(true) : setMenuOpen (false)}
  }

  React.useEffect(() => {
    getProjects()
  }, [])

  return (
    <main className="main">
      <section className="main__section">
        <TopBar openMenu={openMenu} menuOpen={menuOpen}/>
        <Header menuOpen={menuOpen}/>
        <Main projectData={projectData}/>
        <Aside />
      </section>
    </main>
  );
}

export default App;
