/* eslint-disable */ 
import React, { useState, useContext } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PurchaseModal from '../ViewPurchase/PurchaseModal';
import Badge from '@material-ui/core/Badge';
import CartContext from '../../CartContext';
import '../../styles/Header.scss';

const Header = () => {
  const { valueContext, setValueContext } = useContext(CartContext);
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
          BEAUTYCORP
        </div>
        <div className="car" onClick={handleClickOpen('paper')} >
          <Badge badgeContent={valueContext.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
      </div>
      <PurchaseModal handleClose = {handleClose} open={open} scroll={scroll} />
    </header>
  );
};

export default Header;
