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
      <NavLink to="/contact" exact>
        <button className="header__button">
          <ContactIcon />
          <h2 className="header__button__text">contact</h2>
        </button>
      </NavLink>
      <span className="content__divider"></span>
    </section>
  );
}

export default TopBar;
