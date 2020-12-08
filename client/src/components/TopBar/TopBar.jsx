import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './TopBar.scss';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, AboutIcon, ContactIcon, Menu, Close } from '../../Icons/Icons'
import { filterProjects } from '../../js/actions/index';


const TopBar = ({openMenu, menuOpen}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    openMenu()
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
    <section className="main__section__topbar">
      <a onClick={(e) => {
          e.preventDefault();
          openMenu(e.currentTarget)
          }} className="main__section__menu">
        {!menuOpen ? <Menu /> : <Close />}
      </a>
      <Link to="/"><h1 className="main__section__name">Ninni H.</h1></Link>
        <nav className="navigation">
          <li><Link to="/"><h3>about me</h3></Link></li>
          <li  
            onClick={(e) => {
              e.preventDefault();
              changeType(e)
              }}><NavLink to="/projects"><h3 id="design"
              >design</h3></NavLink></li>
          <li
            onClick={(e) => {
              e.preventDefault();
              changeType(e)
              }}><NavLink to="/projects"><h3 id="Development">development</h3></NavLink></li>
          <li
            onClick={(e) => {
              e.preventDefault();
              changeType(e)
              }}><NavLink to="/projects"><h3 id="Illustration">illustration</h3></NavLink></li>
          <li
            onClick={(e) => {
              e.preventDefault();
              changeType(e)
              }}><NavLink to="/blog"><h3 id="Illustration">writing</h3></NavLink></li>

        </nav>
    </section>
  );
}

export default TopBar;
