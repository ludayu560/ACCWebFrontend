import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

function StyledButton(props) {
  const { variant, link, text, content, textColor, onClick, noArrow, width, bgcolor, type } = props;

  const signupStyle = {
    minWidth: width ? width : "",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: "100vmax",
    textTransform: "none",
    background: bgcolor ? bgcolor : "#F83E7D",
    color: textColor ? textColor : "white",
  };

  const tagStyle = {
    minWidth: width ? width : "",
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: "100vmax",
    textTransform: "none",
    background: bgcolor ? bgcolor : "#C5265CBF",
    color: textColor ? textColor : "white",
  };

  const emptyStyle = {
    width: width ? width : "12vw",
    height: "6vh",
    borderRadius: "100vmax",
    textTransform: "none",
    background: "transparent",
    textColor: { textColor },
  };

  const leftRoleStyle = {
    width: "10vw",
    height: "10vw",
    borderRadius: "50px 0 0 50px",
    background: "transparent",
    textTransform: "none",
    color: textColor,
  };

  const rightRoleStyle = {
    width: "10vw",
    height: "10vw",
    borderRadius: "0 50px 50px 0",
    background: "transparent",
    textTransform: "none",
    color: textColor,
  };

  const middleRoleStyle = {
    width: "10vw",
    height: "10vw",
    background: "transparent",
    textTransform: "none",
    color: textColor,
  };

  return (
    <div>
      {variant === "signup" ? (
        <Button
          onClick={onClick ? onClick : null}
          variant="contained"
          style={signupStyle}
          endIcon={noArrow ? null : <ArrowForwardIcon />}
          href={link}
          type={type}
          {...props}>
          <Typography variant="h5" fontWeight={600} sx={{ typography: { xs: "h6", sm: "h6", lg: "h5" } }}>
            {text}
            {props.children}
          </Typography>
        </Button>
      ) : null}

      {variant === "empty" && (
        <Button variant="contained" style={emptyStyle} endIcon={<ArrowForwardIcon />} href={link} {...props}>
          <Typography
            color={textColor}
            variant="h5"
            fontWeight={700}
            sx={{ typography: { xs: "h6", sm: "h6", lg: "h5" } }}>
            {text}
            {props.children}
          </Typography>
        </Button>
      )}

      {variant === "leftRole" && (
        <Button variant="contained" style={leftRoleStyle} {...props}>
          {content}
          {props.children}
        </Button>
      )}

      {variant === "middleRole" && (
        <Button variant="contained" style={middleRoleStyle} {...props}>
          {content}
          {props.children}
        </Button>
      )}

      {variant === "rightRole" && (
        <Button variant="contained" style={rightRoleStyle} {...props}>
          {content}
          {props.children}
        </Button>
      )}

      {variant === "pinkBtn" && (
        <Button variant="contained" style={signupStyle} href={link} {...props}>
          <Typography variant="h5" sx={{ typography: { xs: "h6", sm: "h6", lg: "h5" } }}>
            {text}
            {props.children}
          </Typography>
        </Button>
      )}

      {variant === "tag" && (
        <Button variant="contained" style={tagStyle} {...props} disabled>
          <Typography variant="h6" fontSize="12px">
            {text}
            {props.children}
          </Typography>
        </Button>
      )}
    </div>
  );
}

export default StyledButton;
