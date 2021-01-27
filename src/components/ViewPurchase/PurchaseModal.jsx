import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Card, CardMedia, CardContent, Typography, makeStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import image from '../../images/1.png';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
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
const PurchaseModal = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>hola</Button>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">CARRITO DE COMPRAS</DialogTitle>
        <CloseIcon onClick={handleClose} color="primary" className={classes.closeButton} />
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="gridCard">
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={image} title="hola" />
                <div className={classes.cardDetails}>
                  <CardContent>
                    <div>
                      <Typography variant="subtitle1" paragraph className="name-product">
                        Nike × Pigalle 8P Basketball
                      </Typography>
                      <Typography />
                      <Typography variant="subtitle1" color="textSecondary">
                        S/ 35.00
                      </Typography>
                    </div>
                    <div>
                      <button type="button" className="btn-remove">
                        <CloseIcon />
                      </button>
                      <div>
                        <button type="button" className="btn-add">
                          <CloseIcon />
                        </button>
                        <p className="price">price</p>
                        <button type="button" className="btn-less">
                          <CloseIcon />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PurchaseModal;
