import React from 'react';
import {NavLink} from 'react-router-dom';

//Nav bar with three default search options
export default function MainNav (props) {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to={'/cats'} aria-label="Cats Button">Cats</NavLink></li>
        <li><NavLink to={'/dogs'} aria-label="Dogs Button">Dogs</NavLink></li>
        <li><NavLink to={'/computers'} aria-label="Computers Button">Computers</NavLink></li>
      </ul>
    </nav>
  );
}