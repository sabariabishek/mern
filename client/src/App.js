import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { loadProjects, filterProjects } from './js/actions/index';

import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon, Menu, Close } from './Icons/Icons'

import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Main from './components/Main/Main.jsx';
import TopBar from './components/TopBar/TopBar.jsx';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  const [aboutInfo, setAboutInfo] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [educationData, setEducationData] = useState([]);

  const getProjects = () => {
    fetch('/api/data')
    .then(res => res.json())
    .then(data => dispatch(loadProjects(data)))
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

  useEffect(() => {
    getProjects()
    getInfo()
    getEducation()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="main">
      <section className="main__section">
        <TopBar 
          openMenu={openMenu} 
          menuOpen={menuOpen}/>
        <Header menuOpen={menuOpen}/>
        <Main 
          aboutInfo={aboutInfo} 
          educationData={educationData}/>
        <Aside 
          aboutInfo={aboutInfo}/>
      </section>
    </main>
  );
}

export default App;
