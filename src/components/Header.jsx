/* eslint-disable */ 
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/Header.scss';
import PurchaseModal from './ViewPurchase/PurchaseModal';

const Header = () => {
  // modal configuration
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
  <header className="header__container">
    <div className="logo">
      BeautyCorp
    </div>
    <div className="car" onClick={handleClickOpen('paper')} ><ShoppingCartIcon /></div>
    <PurchaseModal handleClose = {handleClose} open={open} scroll={scroll} />
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
};

export default Header;
