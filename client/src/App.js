import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { loadProjects, loadPosts } from './js/actions/index';

import Header from './components/Header/Header.jsx';
import Aside from './components/Aside/Aside.jsx';
import Main from './components/Main/Main.jsx';
import TopBar from './components/TopBar/TopBar.jsx';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  const [aboutInfo, setAboutInfo] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const getPosts = () => {
    fetch('/api/posts')
    .then(res => res.json())
    .then(data => dispatch(loadPosts(data.data)))
    .catch(error => console.log(error))
  }

  const openMenu = () => {
    {!menuOpen ? setMenuOpen(true) : setMenuOpen (false)}
  }

  useEffect(() => {
    getProjects()
    getInfo()
    getPosts()
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
        <Header 
          menuOpen={menuOpen}
          openMenu={openMenu}/>
        <Main 
          aboutInfo={aboutInfo}/>
        <Aside 
          aboutInfo={aboutInfo}/>
      </section>
    </main>
  );
}

export default App;
