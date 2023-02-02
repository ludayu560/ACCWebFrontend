import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Tags(props) {
  const {variant, text} = props;
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

    </>
  );
}

export default Tags;
