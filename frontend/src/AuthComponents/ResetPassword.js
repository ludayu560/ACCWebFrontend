import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "./actions/auth";
import { Box, Stack } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import StyledButton from "../components/components/StyledButton";
import MainLogo from "../assets/Icons/MainLogo.svg";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Stack alignItems="center" pt={20} spacing={5} px={10}>
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#0045F1" }}>
          Request Password Reset:
        </Typography>
        <Typography variant="h5">Please enter your email to send a password reset request</Typography>
        <form onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="filled"
            label="Email"
            style={{ backgroundColor: "white" }}
            required
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </form>
        <StyledButton variant="pinkBtn" text="Submit" type="submit"/>
        <Box component="img" src={MainLogo} width="5vw" pt={5} />
      </Stack>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
