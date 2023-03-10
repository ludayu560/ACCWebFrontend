import { TextField } from "@mui/material";
import { useState } from "react";

function StyledTextField(props) {
  // textbox functionality is ok, we want to refactor the way textboxes are displayed.
  // kinds of textboxes we wish to implement:
  //      rounded empty grey with black text and label above the border
  //      rounded empty slate grey with black text and label as a placeholder. no border
  //          ^a 'for show' textbox to be used as a dropdown menu icon
  //
  //      rounded filled grey textbox with no border. dark grey text
  //
  //      blocky empty light grey with black text and label as a placeholder. no border

  // variables:
  //  variant
  //  disabled        => default
  //  placeholder     placeholder: placeholder
  //  width           width: width? width : defaultWidth
  //  height          height: height? height : defaultHeight
  //  value
  //  color
  //  hook            => returns up back to parent

  const { disabled, variant, placeholder, multiline, width, height, value, color, hook, label } = props;
  const [field, setField] = useState();

  const onChangeHandler = (e) => {
    setField(e.target.value);
    hook(e.target.value);
  };

  const LoginStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '100vmax',
      border: '2px solid #73737380',
      width: (width)? width : '15vw',
    }
  };

  const styleEmpty = {
    background: "#ffffff",
    borderRadius: "100vmax",
    border: "3px solid #7f7d7d",
  };

  const styleEmptyInput = {
    style: {
      color: color ? color : "#737373FA",
      borderRadius: "100vmax",
      height: height ? height : "5vh",
      width: width ? width : "17vw",
    },
  };

  const styleFilled = {
    background: "#ffffff",
    borderRadius: "100vmax",
  };

  const styleFilledInput = {
    style: {
      color: "#000",
      borderRadius: "100vmax",
      height: height ? height : "5vh",
      width: width ? width : "17vw",
    },
  };

  const styleDropDown = {
    background: "#ffffff",
    borderRadius: "100vmax",
    border: "3px solid #7f7d7d",
    color: color ? color : "#737373FA",
  };
  const styleDropDownInput = {
    style: {
      color: color ? color : "#737373FA",
      borderRadius: "100vmax",
      height: height ? height : "5vh",
      width: width ? width : "17vw",
    },
  };
  return (
    <div>
      {variant === "empty" && (
        <TextField
          onChange={onChangeHandler}
          disabled={disabled ? true : false}
          sx={LoginStyle}
          label={label}
          value={field ? field : value}
          {...props}>
            
          </TextField>
      )}

      {variant === "filled" && (
        <TextField
          disabled={disabled ? true : false}
          onChange={onChangeHandler}
          placeholder={placeholder}
          style={styleFilled}
          value={field ? value : field}
          InputProps={styleFilledInput}
        />
      )}

      {variant === "login" && (
        <TextField
          disabled={disabled ? true : false}
          onChange={onChangeHandler}
          placeholder={placeholder}
          style={styleEmpty}
          value={field ? field : value}
          InputProps={styleEmptyInput}
          variant="filled">
          </TextField>
      )}

      {variant === "dropDownMenu" && (
        <TextField
          disabled={disabled ? true : false}
          onChange={onChangeHandler}
          placeholder={placeholder}
          style={styleDropDown}
          value={field ? field : value}
          InputProps={styleDropDownInput}
        />
      )}

      {variant === "simple" && (
        <TextField
          disabled={disabled ? true : false}
          onChange={onChangeHandler}
          placeholder={placeholder}
          variant='standard'
          required
          multiline={multiline ? true : false}
          value={field ? field : value}
          type='number'
        />
      )}
    </div>
  );
}

export default StyledTextField;
