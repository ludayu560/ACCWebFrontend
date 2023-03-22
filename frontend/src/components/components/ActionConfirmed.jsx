import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ActionConfirmed = ({ trigger, onActionCompleted }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (trigger) {
      setOpen(true);
    }
  }, [trigger]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (onActionCompleted) {
      onActionCompleted();
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="success" elevation={6} variant="filled">
        Action confirmed!
      </Alert>
    </Snackbar>
  );
};

export default ActionConfirmed;
