import React from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon } from '../../Icons/Icons'
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import { Tooltip } from '@material-ui/core';

const Header = ({ menuOpen }) => {

  return (
    <>
    {menuOpen ? 
      <header className="header">
        <img src="" alt="" className="header__logo"/>
        <nav className="header__navigation">
          <ul className="header__navigation__list">
            <Tooltip title="projects" placement="right">
              <NavLink to="/" exact>
                <article className="header__navigation__list__item">
                  <HomeIcon />
                  <h2 className="header__navigation__list__item__text">home</h2>
                </article>
              </NavLink>
            </Tooltip>
            <Tooltip title="about" placement="right">
              <NavLink to="/about" exact>
                <article className="header__navigation__list__item">
                  <AboutIcon />
                  <h2 className="header__navigation__list__item__text">about</h2>
                </article>
              </NavLink>
            </Tooltip>
          </ul>
        </nav> 
      </header>
    : null }
    </>
  );
}

export default Header;
