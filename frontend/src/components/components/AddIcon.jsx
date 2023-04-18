import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import CheckIcon from "@mui/icons-material/Check";
import Check from "@mui/icons-material/Check";

function AddIcon(props) {
  const { variant, text } = props;

  return (
    <>
      {variant === "start" && (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
          <Box p={2}>
            <CheckIcon sx={{ color: "primary.main" }}></CheckIcon>
          </Box>
          <Typography variant="h6">{text}</Typography>
        </Box>
      )}

      {variant === "end" && (
        <Box
          p={1}
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
          <>
            <Typography variant="h6">{text}</Typography>
            <ArrowForwardIcon></ArrowForwardIcon>
          </>
        </Box>
      )}
    </>
  );
}

export default AddIcon;
