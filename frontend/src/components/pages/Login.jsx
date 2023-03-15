import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

//auth
import { load_listing, login } from "../../AuthComponents/actions/auth";

import StyledTextField from "../components/StyledTextField";
import StyledButton from "../components/StyledButton";

import { ReactComponent as Login1 } from "../../assets/Login1.svg";
import { ReactComponent as Logo } from "../../assets/HouseLogoPink.svg";
import { ReactComponent as LoginText1 } from "../../assets/LoginText1.svg";
import { ReactComponent as LoginText2 } from "../../assets/LoginText2.svg";
import { ReactComponent as AishaSignaturePink } from "../../assets/AishaSignatureWhite.svg";
import { TextField } from "@mui/material";
import CustomTextField from "../components/CustomTextField";

const TextFieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "100vmax",
    border: "2px solid #73737380",
    width: "30vw",
  },
};

const Login = ({ login, isAuthenticated, user, listingAccount }) => {
  // login handlers

  // const [firstName, setFirstName] = useState('');

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    console.log(email,password)
  };

  // dialog handler
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (isAuthenticated) {
    if (user != null) {
      console.log(user);
      console.log(user.id);
      load_listing(user.id);
    }
  }

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        color="inherit"
        size="large"
        sx={{ color: "#F83E7D" }}
      >
        Login
      </Button>

      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: {
            minWidth: "80vw",
            minHeight: "90vh",
            borderRadius: "30px 10vmin 10vmin 30px",
          },
        }}
      >
        <Stack direction={"row"}>
          <Box position={"relative"}>
            <Login1 height={"90vh"} padding={"0px"}></Login1>

            <Stack
              alignItems={"center"}
              width={"100%"}
              position={"absolute"}
              left={"0px"}
              top={"0px"}
            >
              <Stack
                width={"80%"}
                alignItems={"center"}
                marginTop={"90%"}
                spacing={2}
              >
                <LoginText1 />
                <LoginText2 />
              </Stack>

              <Box width={"30%"} marginTop={"80%"}>
                <AishaSignaturePink />
              </Box>
            </Stack>
          </Box>

          <Container disableGutters border={"1px solid pink"}>
            <form onSubmit={(e) => onSubmit(e)}>
              <Stack alignItems="center" paddingTop={"10vh"} spacing={"3vh"}>
                <Logo width={"10%"}></Logo>
                <Typography variant="h4" fontWeight={700}>
                  Welcome Back!
                </Typography>

                <Stack spacing={"5vh"} paddingTop={"6vh"} alignItems={"center"}>
                  <TextField
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    sx={TextFieldStyle}
                  />
                  <TextField
                    required
                    type="password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    sx={TextFieldStyle}
                    minLength="6"
                    borderRadius="100vmax"
                  />
                  <Box width="20vw">
                    <StyledButton
                      variant="signup"
                      type="submit"
                      sx={{ width: "100%", height: "60px" }}
                    >
                      {" "}
                      Login{" "}
                    </StyledButton>
                  </Box>
                </Stack>

                <Stack
                  direction={"column"}
                  textAlign={"center"}
                  spacing={"15px"}
                >
                  <Typography fontWeight={700} variant="p">
                    Not registered yet?{" "}
                    <Link to="/signup"> Create an Account </Link>
                  </Typography>
                  <Typography fontWeight={700} variant="p">
                    Forgot your Password{" "}
                    <Link onClick={handleClose} to="/reset-password">
                      {" "}
                      Reset Password{" "}
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
            </form>
          </Container>
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

export default connect(mapStateToProps, { login })(Login);
