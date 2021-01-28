/* eslint-disable */ 
import React, {Fragment} from 'react';
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
import { IfFirebaseUnAuthed, IfFirebaseAuthed } from '@react-firebase/auth';

const SignIn = (props) => {
  const { openGoogle, handleCloseGoogle } = props;

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
            <DialogTitle id="customized-dialog-title" onCloseGoogle={handleCloseGoogle}>
              Use Googles location service?
            </DialogTitle>
            <CloseIcon
              onClick={handleCloseGoogle}
              color="primary"
            />
            <DialogContent>
              <DialogContentText>
                Let Google helpp apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autofocus
                onClick={() => {
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                }}
              >
                Sign in
              </Button>
            </DialogActions>
            </Dialog>
          </Fragment>
        )}
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        {({ firebase }) => (
          <div className="order-review">
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

        {/* <FirebaseAuthConsumer>
            {({ isSignedIn, firebase }) => {
              if (isSignedIn === true) {
                return (
                  <div>
                    <h2>You're signed in 🎉 </h2>
                    <button
                      onClick={() => {
                        firebase
                          .app()
                          .auth()
                          .signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <DialogContent>
                      <DialogContentText>
                        Inicia sesión/Registrate con
                      </DialogContentText>
                    </DialogContent>
                    <Button autoFocus onClick={handleCloseGoogle} color="primary" onClick={() => {
                      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                      firebase.auth().signInWithPopup(googleAuthProvider);
                    }}>
                      Google
                    </Button>
                  </div>
                );
              }
            }}
          </FirebaseAuthConsumer> */}