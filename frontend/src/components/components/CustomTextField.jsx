import * as React from "react";
import TextField from "@mui/material/TextField";

// Custom TextField prototype

// Handles the styles applied to the textfields

// TextField for the Signup Component
class SignUp extends React.Component {
  render() {
    return (
      <TextField
        sx={{
          width: "15vw",
          input: {
            color: "black",
          },
          "& label": { paddingLeft: (theme) => theme.spacing(2) },
          "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
          "& fieldset": {
            paddingLeft: (theme) => theme.spacing(2.5),
            borderRadius: "30vmax",
            border: "4px solid #73737380",
          },
        }}
        inputProps={{
          sx: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
            },
          },
        }}
        {...this.props}
      />
    );
  }
}
// TextField for the MyAccountPage Component
class MyAccount extends React.Component {
  render() {
    return (
      <TextField
        sx={{
          width: "20vw",
          input: {
            color: "black",
            background: "#E3E7EF",
            borderRadius: "30vmax",
          },
          "& label": { paddingLeft: (theme) => theme.spacing(2) },
          "& input": {
            paddingLeft: (theme) => theme.spacing(3.5),
            border: "0px",
          },
          "& fieldset": {
            paddingLeft: (theme) => theme.spacing(2.5),
            borderRadius: "30vmax",
          },
        }}
        inputProps={{
          sx: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px #E3E7EF inset",
              borderRadius: "30vmax",
            },
          },
        }}
        InputProps={{
          disableUnderline: true,
          sx: {
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        }}
        {...this.props}
      />
    );
  }
}
// RLF
class RLF extends React.Component {
  render() {
    return (
      <TextField
        sx={{
          width: "20vw",
          input: {
            color: "black",
            borderRadius: "30vmax",
          },
          "& label": { paddingLeft: (theme) => theme.spacing(2) },
          "& input": {
            paddingLeft: (theme) => theme.spacing(3.5),
            border: "0px",
          },
          "& fieldset": {
            paddingLeft: (theme) => theme.spacing(2.5),
            borderRadius: "30vmax",
          },
        }}
        inputProps={{
          sx: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              borderRadius: "30vmax",
            },
          },
        }}
        {...this.props}
      />
    );
  }
}

// This function handles the state and and logic of the textfields.
export default function CustomTextField(props) {
  // this is required in order to hijack the 'variant' prop which is used by MUI
  const { variant, ...rest } = props;
  return (
    <div>
      {variant ? null : <RLF {...rest} />}
      {variant === "signup" ? <SignUp {...rest} /> : null}
      {variant === "myaccount" ? <MyAccount {...rest} /> : null}
      {variant === "rlf" ? <RLF {...rest} /> : null}

    </div>
  );
}
