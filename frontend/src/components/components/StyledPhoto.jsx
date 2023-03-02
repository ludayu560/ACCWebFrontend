import { Button, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

function StyledPhoto(props) {
  const { variant, w, h } = props;

  return (
    <>{variant === "placeholder" ? <Box sx={{ width: { w }, height: { h }, bgcolor: "gray" }}>Photo</Box> : null}</>
  );
}

export default StyledPhoto;
