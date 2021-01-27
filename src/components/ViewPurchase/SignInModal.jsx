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
import CloseIcon from '@material-ui/icons/Close';

const SignIn = (props) => {
  const { openGoogle, handleCloseGoogle } = props;
  
  return (
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
          <Button autoFocus onClick={handleCloseGoogle} color="primary">
            Disagree
          </Button>
          <Button onClick={handleCloseGoogle} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  </Fragment>
  );
};
SignIn.propTypes = {
  openGoogle: PropTypes.bool.isRequired,
  handleCloseGoogle: PropTypes.func.isRequired,
};
export default SignIn;