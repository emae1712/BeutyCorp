import { NavLink } from 'react-router-dom';
import '../../styles/Header.scss';
import React from 'react';

const NavReview = () => (
  <nav className="nav-brand">
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/">
      Delivery
    </NavLink>
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/recojo">
      Recojo en tienda
    </NavLink>
  </nav>
);

export default NavReview;
