/* eslint-disable */ 
import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/Header.scss';

const Header = () => (
  <header className="header__container">
    <div className="logo">
      BeautyCorp
    </div>
    <div className="car"><ShoppingCartIcon /></div>
    <nav>
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
  </header>
);

export default Header;
