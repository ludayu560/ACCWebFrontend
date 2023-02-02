
import {
  Container,
  Button,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
  Stack,
  Paper,
  TextField,
  ImageListItem,
  Divider,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { borderRadius } from "@mui/system";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { styled } from "@mui/material/styles";

function SideNav(props) {
  return (
    <Stack
      marginLeft={10}
      sx={{
        padding: "1vw",
        border: 1,
        borderRadius: "25px",
        boxShadow: 3,
      }}
      bgcolor='white'
    >
      <Button
        variant="text"
        href={`/account-profile`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        My Profile
      </Button>
      <Button
        variant="text"
        href={`/account-events`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        Events
      </Button>
      <Button
        variant="text"
        href={`/account-notifications`}
        size="large"
        sx={{ color: "black", padding: 3 }}
        endIcon={<NotificationsActiveIcon />}
      >
        Notifications
      </Button>
      <Button
        variant="text"
        href={`/account-favourites`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        Favourites
      </Button>
      <Button
        variant="text"
        href={`/account-settings`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        Settings
      </Button>
      <Button
        variant="text"
        href={`/account-subscribe`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        Payment
      </Button>
      <Button
        variant="text"
        href={`/account-help`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        Help
      </Button>
      <Button
        variant="text"
        to={`/account-${props.name}`}
        size="large"
        sx={{ color: "black", padding: 3 }}
      >
        Logout
      </Button>
    </Stack>
  );
}

export default SideNav;
