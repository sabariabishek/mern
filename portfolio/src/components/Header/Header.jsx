import React from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon } from '../../Icons/Icons'


function Header() {
  return (
    <header className="header">
      <img src="" alt="" className="header__logo"/>
      <nav className="header__navigation">
        <ul className="header__navigation__list">
          <NavLink to="/" exact>
            <article className="header__navigation__list__item">
              <HomeIcon />
              <h2 className="header__navigation__list__item__text">home</h2>
            </article>
          </NavLink>
          <NavLink to="/about" exact>
           <article className="header__navigation__list__item">
              <AboutIcon />
              <h2 className="header__navigation__list__item__text">about</h2>
            </article>
          </NavLink>
        </ul>
        <NavLink to="/contact" exact>
            <button className="header__navigation__list__item header__navigation__list__item__button">
              <ContactIcon />
              <h2 className="header__navigation__list__item__text">contact</h2>
            </button>
          </NavLink>
      </nav>
    </header>
  );
}

export default Header;
