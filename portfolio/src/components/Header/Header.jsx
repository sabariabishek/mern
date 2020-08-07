import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="">
        <img src="" alt="" className=""/>
        <nav className="">
        	<ul className="">
            <Link to="/" exact>Home</Link>
            <Link to="/about" exact>About</Link>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
