/* eslint-disable */ 
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/Header.scss';
import PurchaseModal from './ViewPurchase/PurchaseModal';
import CartContext from '../CartContext';

const Header = () => {
  const cartValue = useContext(CartContext);
  console.log(cartValue);
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
     <div className="firstHead">
      <div className="logo">
        {cartValue.name}
      </div>
      <div className="car" onClick={handleClickOpen('paper')} ><ShoppingCartIcon /></div>
     </div>
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
