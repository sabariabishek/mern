import React from 'react';
import { Router, Route, Switch } from "react-router";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Aside from './components/Aside/Aside.jsx';
import Content from './components/Content/Content.jsx';
import Main from './components/Main/Main.jsx';



import './App.scss';

function App() {
  return (
    <main className="main">
      <section className="main__section">
        <Header />
        <Main />
        <Aside />
      </section>
      <Footer />
    </main>
  );
}

export default App;
