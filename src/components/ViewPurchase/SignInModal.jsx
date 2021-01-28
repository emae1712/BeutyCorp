/* eslint-disable */ 
import React, {Fragment, useContext} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import
{
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';
import Header from '../Header/Header';
import NavReview from '../Header/NavReview';
import '../../styles/SignIn.scss';
import { IfFirebaseUnAuthed, IfFirebaseAuthed } from '@react-firebase/auth';
import { orderBD } from "../../firebase/firebase-functions";
import CartContext from '../../CartContext';

const SignIn = (props) => {
  const { openGoogle, handleCloseGoogle } = props;
  //products using React context
  const { valueContext } = useContext(CartContext);
  console.log(valueContext);

  return (
    <>
      <IfFirebaseUnAuthed>
        {({ firebase }) => (
          <Fragment>
            <Dialog
              open={openGoogle}
              onCloseGoogle={handleCloseGoogle}
              aria-labelledby="responsive-dialog-title"
            >
            <CloseIcon
              className="close-icon"
              onClick={handleCloseGoogle}
              color="primary"
            />
            <DialogTitle className="logo" id="customized-dialog-title" onCloseGoogle={handleCloseGoogle}>
              BEAUTYCORP
            </DialogTitle>
            <DialogContent>
              <DialogContentText className="text-secondary">
                Necesitamos conocer más de ti
              </DialogContentText>
              <DialogContentText className="sign-in">
                Inicia sesión/Registrate con
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autofocus
                onClick={() => {
                  orderBD({orderSummary: valueContext});
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                }}
              >
                GOOGLE
              </Button>
            </DialogActions>
            </Dialog>
          </Fragment>
        )}
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        {({ firebase }) => (
          <div className="order-review">
            <Header />
            <NavReview />
            <button
              className="close-btn"
              type="button"
              onClick={() => {
                firebase
                  .app()
                  .auth()
                  .signOut();
              }}
            >
              Volver
            </button>
            <h1 className="title-review">Resumen de pedido</h1>
            <FormControl>
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Distrito"
                variant="outlined"
              />
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Provincia"
                variant="outlined"
              />
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Distrito"
                variant="outlined"
              />
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Teléfono"
                variant="outlined"
              />
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Referencia"
                variant="outlined"
              />
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Teléfono"
                variant="outlined"
              />  
            </FormControl>
          </div>
        )}
      </IfFirebaseAuthed>
    </>
  );
};

SignIn.propTypes = {
  openGoogle: PropTypes.bool.isRequired,
  handleCloseGoogle: PropTypes.func.isRequired,
};

export default SignIn;
