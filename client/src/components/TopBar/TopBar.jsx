import React from 'react';

import './TopBar.scss';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon, Menu, Close } from '../../Icons/Icons'


const TopBar = ({openMenu, menuOpen}) => {

  return (
    <section className="main__section__topbar">
      <a onClick={(e) => {
          e.preventDefault();
          openMenu(e.currentTarget)
          }} className="main__section__menu">
        {!menuOpen ? <Menu /> : <Close />}
      </a>
      <h1 className="main__section__name">Ninni H.</h1>
      {/* <NavLink to="/contact" exact>
        <button className="header__button">
          <ContactIcon />
        </button>
      </NavLink> */}
      <article className="header__button header__button--construction">
        <h3 className="header__button__construction">Under construction</h3>
      </article>
    </section>
  );
}

export default TopBar;
