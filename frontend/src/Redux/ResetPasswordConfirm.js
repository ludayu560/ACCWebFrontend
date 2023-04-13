import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "./actions/auth";
import { Box, Stack } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import StyledButton from "../components/components/StyledButton";
import MainLogo from "../assets/Icons/MainLogo.svg";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const { uid, token } = useParams();
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // const uid = match.params.uid;
    // const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Stack alignItems="center" pt={20} spacing={5} px={10}>
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#0045F1" }}>
          Set a New Password
        </Typography>
        <Typography variant="h5">Please enter a new password for your account.</Typography>
        <form onSubmit={(e) => onSubmit(e)}>
          <Stack alignItems="center" spacing={5} px={10}>
            <TextField
              variant="filled"
              label="New Password"
              style={{ backgroundColor: "white" }}
              required
              className="form-control"
              type="password"
              placeholder="New Password"
              name="new_password"
              value={new_password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
            <TextField
              variant="filled"
              label="Confirm Password"
              style={{ backgroundColor: "white" }}
              required
              className="form-control"
              type="password"
              placeholder="Confirm New Password"
              name="re_new_password"
              value={re_new_password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
            <StyledButton variant="pinkBtn" text="Submit" type="submit" width="20vw" />
          </Stack>
        </form>
        <Box component="img" src={MainLogo} width="5vw" pt={5} />
      </Stack>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
