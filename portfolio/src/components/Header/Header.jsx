import React from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';


function Header() {
  return (
    <header className="header">
      <SectionHeader />
      <img src="" alt="" className="header__logo"/>
      <nav className="header__navigation">
        <ul className="header__navigation__list">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about" exact>About</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
