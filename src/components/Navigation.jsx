import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
  return (
    <header>
      <div className="logo">
        <h1>Blog example</h1>
      </div>
      <nav>
        <ul className="menu">
          <li>
            <NavLink
              exact
              to="/home"
              activeClassName="active">
                Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              activeClassName="active">
                Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/albums"
              activeClassName="active">
                Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
