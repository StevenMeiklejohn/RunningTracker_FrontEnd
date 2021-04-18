import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>


      <ul className="menu">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/data/all">All Progress</Link>
        </li>
        <li>
          <Link to="/data/choose">Individual Progress</Link>
        </li>
       </ul>
    </header>
  )
}

export default NavBar;
