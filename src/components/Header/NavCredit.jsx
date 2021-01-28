/* eslint-disable */ 
import { NavLink } from 'react-router-dom';
import '../../styles/Header.scss';
import React from 'react';

const NavCredit = () => (
  <nav className="nav-brand">
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/card">
      Tarjeta de crédito
    </NavLink>
    <NavLink activeClassName="activeRoute" activeStyle={{ color: 'rgba(110, 42, 142, 1)' }} to="/bank">
      Transferencia bancaria
    </NavLink>
  </nav>
);

export default NavCredit;
