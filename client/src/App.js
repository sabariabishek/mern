import React from 'react';
import { Router, Route, Switch } from "react-router";

import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon, Menu, Close } from './Icons/Icons'

import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Main from './components/Main/Main.jsx';
import TopBar from './components/TopBar/TopBar.jsx';

import './App.scss';

import { useDispatch, useSelector } from 'react-redux'
import { loadProjects, filterProjects } from './js/actions/index';


const App = () => {

  const projects = useSelector(state => state);
	const dispatch = useDispatch();

  const [projectData, setProjectData] = React.useState([]);
  const [aboutInfo, setAboutInfo] = React.useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [educationData, setEducationData] = React.useState([]);
  const [type, setType] = React.useState({ info: '' });

  const getProjects = () => {
    fetch('/api/data')
    .then(res => res.json())
    .then(data => setProjectData(data))
    .catch(error => console.log(error))
  }

  const getDevProjects = () => {
    fetch('/api/dev')
    .then(res => res.json())
    .then(data => setProjectData(data.data))
    .catch(error => console.log(error))
  }

  const getInfo = () => {
    fetch('/api/info')
    .then(res => res.json())
    .then(data => setAboutInfo(data.data[0]))
    .catch(error => console.log(error))
  }

  const getEducation = () => {
    fetch('/api/info')
    .then(res => res.json())
    .then(data => setEducationData(data.data[0].education))
    .catch(error => console.log(error))
  }

  const openMenu = () => {
    {!menuOpen ? setMenuOpen(true) : setMenuOpen (false)}
  }

  // const sendType = (e) => {
  // fetch('/api/type', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(type),
  //   })
  //   .then(res => res.json())
  //   .then(data => setType(data))
  // }

  // const changeType = (e) => {
  //   const type = e.target.value;
  //   setType({info: type})
  //   sendType()
  // }

  // const filter = () => {
  //   console.log("filter", projectData)
  // }

  React.useEffect(() => {
    getProjects()
    getInfo()
    getEducation()
    // filter()
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <main className="main">
      <section className="main__section">
        <TopBar openMenu={openMenu} menuOpen={menuOpen}/>
        <Header menuOpen={menuOpen}/>
        <Main projectData={projectData} aboutInfo={aboutInfo} educationData={educationData} getDevProjects={getDevProjects} getProjects={getProjects}/>
        <Aside aboutInfo={aboutInfo}/>
      </section>
    </main>
  );
}

export default App;
