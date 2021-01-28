import { NavLink } from 'react-router-dom';
import '../../styles/Header.scss';
import React from 'react';

const NavBrand = () => (
  <nav className="nav-brand">
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/lbel">
      Lbel
    </NavLink>
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/esika">
      Esika
    </NavLink>
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/cyzone">
      Cyzone
    </NavLink>
  </nav>
);

export default NavBrand;
