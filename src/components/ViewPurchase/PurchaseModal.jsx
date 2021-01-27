/* eslint-disable */ 
import React, { useState } from 'react';
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
import image from '../../images/1.png';
import SignIn from './SignInModal';

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
          <button type="button">Enviar</button>
        </div>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={image}
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
                      Nike × Pigalle 8P Basketball
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      S/ 35.00
                    </Typography>
                  </div>
                  <div className="btns">
                    <span className="btn-remove">
                      <DeleteOutlineIcon />
                    </span>
                    <div className="btns-quantity">
                      <button type="button" className="btn-add">
                        -
                      </button>
                      <p className="price-item">01</p>
                      <button type="button" className="btn-less">
                        +
                      </button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={image}
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
                      Nike × Pigalle 8P Basketball
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      S/ 35.00
                    </Typography>
                  </div>
                  <div className="btns">
                    <span className="btn-remove">
                      <DeleteOutlineIcon />
                    </span>
                    <div className="btns-quantity">
                      <button type="button" className="btn-add">
                        -
                      </button>
                      <p className="price-item">01</p>
                      <button type="button" className="btn-less">
                        +
                      </button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="total-send">
          <div className="price-total">
            <p>Precio Total</p>
            <p> S/ 35.00</p>
          </div>
          <button type="button" onClick={handleClickOpenGoogle}>
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
