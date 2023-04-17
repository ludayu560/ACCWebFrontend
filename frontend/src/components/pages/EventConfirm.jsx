import React, { useState } from "react";
import { connect } from "react-redux";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";

const TextFieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "100vmax",
    border: "2px solid #73737380",
    width: "30vw",
  },
};

const EventConfirm = ({ login, isAuthenticated, user, listingAccount }) => {
  // login handlers

  // const [firstName, setFirstName] = useState('');

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            minWidth: "80vw",
            borderRadius: "2vmin",
          },
        }}>
        <Stack p={20} spacing={10}>
          <Typography variant="h2" align="center" fontWeight="bold">
            CONFIRMED
          </Typography>
          <Typography variant="h5" align="center">
            We have sent a confirmation email that you’ve accepted the invite from the host! If you have any questions
            or concerns, please contact the host via email:
          </Typography>
          <Button>
            <Typography variant="h5" align="center">
              example_email@gmail.com
            </Typography>
          </Button>
        </Stack>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, { EventConfirm })(EventConfirm);
