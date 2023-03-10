import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";

function Tags(props) {
  const { variant, text, color } = props;
  return (
    <>
      {variant === "pink" && (
        <Box display="flex" sx={{ bgcolor: "#FED8E5", p: 2, borderRadius: 5 }}>
          <FiberManualRecordIcon sx={{ mr: 2, color: "#F83E7D" }}></FiberManualRecordIcon>
          <Typography>{text}</Typography>
        </Box>
      )}

      {variant === "blue" && (
        <Box display="flex" sx={{ bgcolor: "#CCDAFC", p: 2, borderRadius: 5 }}>
          <FiberManualRecordIcon sx={{ mr: 2, color: "#113170" }}></FiberManualRecordIcon>
          <Typography>{text}</Typography>
        </Box>
      )}

      {variant === "filter" && (
        <Box
          display="flex"
          sx={{ border: 3, borderColor: color ? color : "#F83E7D", borderRadius: 10, px: 2 }}
          style={{ alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: color ? color : "#F83E7D", m: "10px" }}>
            {text}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Tags;
