/* eslint-disable */ 
import React, { useState, useContext } from 'react';
import
{
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import '../../styles/Modal.scss';
import PropTypes from 'prop-types';
import SignIn from './SignInModal';
import CartContext from '../../CartContext';

// card styles
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    height: '80px',
    width: '80px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const PurchaseModal = (props) => {

  //products using React context
  const { valueContext, setValueContext } = useContext(CartContext);

  // remove a product
  const deleteProduct = (id)=>{
    setValueContext(valueContext.filter((oneCard)=> oneCard.id !== id))
  }

  //increase products
  const increaseProduct = (id)=>{
    const moreProducts = valueContext.map((oneCard)=>{
      if(oneCard.id === id) {
        oneCard.quantity ++;
      };
      return oneCard;
      
    })
    setValueContext(moreProducts)
  }

  //decrease products
  const decreaseProduct = (id)=>{
    const moreProducts = valueContext.map((oneCard)=>{
      if(oneCard.id === id ) {
        oneCard.quantity === 1 ? oneCard.quantity = oneCard.quantity : oneCard.quantity --;
      }
      return oneCard;
    })
    setValueContext(moreProducts)
  }

  // sum of products
  const total = valueContext.reduce((sum, cart) => ( sum + cart.subtotal ), 0);
  

  const { open, handleClose, scroll } = props;

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const classes = useStyles();

  // modal google
  const [openGoogle, setOpenGoogle] = useState(false);

  const handleClickOpenGoogle = () => {
    setOpenGoogle(true);
  };

  const handleCloseGoogle = () => {
    setOpenGoogle(false);
  };

  return (
    <section>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="modal-products"
      >
        <DialogTitle id="scroll-dialog-title" className="dialogTittle">
          CARRITO DE COMPRAS
        </DialogTitle>
        <CloseIcon
          onClick={handleClose}
          color="primary"
          className={classes.closeButton}
        />
        <div className="send-consultant">
          <p>Envia tu resumen de pedido a tu consultora</p>
          <a href="https://api.whatsapp.com/send?text=mañana%20iré%20a%20comer%20?" target="_blank">Enviar</a>
        </div>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {
              valueContext.length > 0 ?
              valueContext.map((cart)=>(
              <Card className={classes.card} key = {cart.id}>
                <CardMedia
                  className={classes.cardMedia}
                  image={cart.image}
                  title="hola"
                />
                <div className={classes.cardDetails}>
                  <CardContent className="cardContent">
                    <div>
                      <Typography
                        variant="subtitle1"
                        paragraph
                        className="name-product"
                      >
                        {cart.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        S/. {cart.subtotal = cart.quantity * cart.price}
                      </Typography>
                    </div>
                    <div className="btns">
                      <span className="btn-remove">
                        <DeleteOutlineIcon onClick = {()=> {deleteProduct(cart.id)}} />
                      </span>
                      <div className="btns-quantity">
                        <button type="button" className="btn-less" onClick = {()=> {decreaseProduct(cart.id)}}>
                          -
                        </button>
                        <p className="quantity">{cart.quantity}</p>
                        <button type="button" className="btn-add" onClick = {()=> {increaseProduct(cart.id)}}>
                          +
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )) :(
              <p>No hay productos seleccionados</p> 
            )
          }
          </DialogContentText>
        </DialogContent>
        <DialogActions className="total-send">
          <div className="price-total">
            <p>Precio Total</p>
            <p> S/ {total}</p>
          </div>
          <button type="button" 
          onClick={ handleClickOpenGoogle}>
            Ir a pagar
          </button>
          <SignIn handleCloseGoogle={handleCloseGoogle} openGoogle={openGoogle} />
        </DialogActions>
      </Dialog>
    </section>
  );
};
PurchaseModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default PurchaseModal;
