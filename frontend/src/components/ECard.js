import React from "react";
import { Card, CardMedia, Box, CardContent, Typography, Avatar, Stack, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ECard() {
  return (
    <Card raised="true" sx={{borderRadius: 5}}>
      <CardMedia component="img" height="340" />
      <CardContent>
        <Typography>Location</Typography>
        <Typography>Title</Typography>
        <Typography>Time</Typography>
        <Stack direction='row' spacing={4}>
            <Avatar></Avatar>
            <Typography>Hosted by:</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
                <ArrowForwardIcon color='primary'/>
            </IconButton>
        </Stack>
        
      </CardContent>
    </Card>
  );
}

export default ECard;
