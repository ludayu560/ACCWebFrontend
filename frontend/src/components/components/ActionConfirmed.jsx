import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DashboardTenantBG from "../../assets/DashboardTenantBG.png";
import DashboardWHBG from "../../assets/DashboardWHBG.png";
import DashboardPOBG from "../../assets/DashboardPOBG.png";
import DashboardOtherBG from "../../assets/DashboardOtherBG.png";

const ActionConfirmed = ({ trigger, onActionCompleted }) => {
  const [open, setOpen] = useState(false);

  // function renderBGImage() {
  //   switch (listingAccount.account_type) {
  //     case "tenant":
  //       return DashboardTenantBG;
  //     case "homeowner":
  //       return DashboardWHBG;
  //     case "propertyowner":
  //       return DashboardPOBG;
  //     default:
  //       return DashboardOtherBG;
  //   }
  // }

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
      <Alert onClose={handleClose} severity="success" elevation={6} variant="filled" backgroundColor="#000">
        Action confirmed!
      </Alert>
    </Snackbar>
  );
};

export default ActionConfirmed;
