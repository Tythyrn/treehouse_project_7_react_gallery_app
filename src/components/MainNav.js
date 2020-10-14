import React from 'react';
import {NavLink} from 'react-router-dom';


export default function MainNav (props) {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to={'/cats'} onClick={() => props.search('cats')}>Cats</NavLink></li>
        <li><NavLink to={'/dogs'} onClick={() => props.search('dogs')}>Dogs</NavLink></li>
        <li><NavLink to={'/computers'} onClick={() => props.search('computers')}>Computers</NavLink></li>
      </ul>
    </nav>
  );
}