import React from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon } from '../../Icons/Icons'


const Header = ({ menuOpen }) => {

  return (
    <>
    {menuOpen ? 
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
        </nav> 
      </header>
    : null }
    </>
  );
}

export default Header;
