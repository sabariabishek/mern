import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon } from '../../Icons/Icons'
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Tooltip } from '@material-ui/core';
import { filterProjects } from '../../js/actions/index';

const Header = ({ menuOpen, openMenu }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    openMenu()
    changeType(e)
  }

  const [type, setType] = React.useState({
    type: 'favourite'
  })

  const changeType = e => {
    const type = e.target.id;
    dispatch(filterProjects({ type: type }))
    setType({ type: type})
  }

  return (
    <>
    {menuOpen ? 
      <header className="header">
        <img src="" alt="" className="header__logo"/>
        <nav className="header__navigation">
          <ul className="header__navigation__list">
            <Tooltip title="about me" placement="right">
              <NavLink to="/" exact onClick={onClick}>
                <article className="header__navigation__list__item">
                  {/* <AccountBoxOutlinedIcon /> */}
                  <h2 id="" className="header__navigation__list__item__text">about me</h2>
                </article>
              </NavLink>
            </Tooltip>
            <Tooltip title="design" placement="right">
              <NavLink to="/projects" exact onClick={onClick}>
                <article className="header__navigation__list__item">
                  {/* <AccountBoxOutlinedIcon /> */}
                  <h2 id="design" className="header__navigation__list__item__text">design</h2>
                </article>
              </NavLink>
            </Tooltip>
            <Tooltip title="developmen" placement="right">
              <NavLink to="/projects" exact onClick={onClick}>
                <article className="header__navigation__list__item">
                  {/* <AccountBoxOutlinedIcon /> */}
                  <h2 id="Development" className="header__navigation__list__item__text">development</h2>
                </article>
              </NavLink>
            </Tooltip>
            <Tooltip title="illustration" placement="right">
              <NavLink to="/projects" exact onClick={onClick}>
                <article className="header__navigation__list__item">
                  {/* <AccountBoxOutlinedIcon /> */}
                  <h2 id="Illustration" className="header__navigation__list__item__text">illustration</h2>
                </article>
              </NavLink>
            </Tooltip>
            <Tooltip title="blog" placement="right">
              <NavLink to="/blog" exact onClick={onClick}>
                <article className="header__navigation__list__item">
                  {/* <MenuBookOutlinedIcon /> */}
                  <h2 className="header__navigation__list__item__text">Writing</h2>
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
