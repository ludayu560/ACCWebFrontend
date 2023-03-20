import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonBase } from "@mui/material";
import StyledTextField from "./StyledTextField";
import { Box, Stack } from "@mui/system";
import StyledButton from "./StyledButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function SearchBar(props) {
  const { variant, width } = props;

  // const eventInterestedIn = ''
  // const eventCategory = ''
  // const eventLocation = ''

  return (
    <>
      {!variant && (
        <Paper
          component="form"
          sx={{ display: "flex", alignItems: "center", width: width ? width : "60vw", height: 70, borderRadius: 25 }}
          elevation={10}>
          <InputBase
            sx={{ ml: 1, flex: 1, p: 4 }}
            placeholder="Search for topics or questions..."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "20px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider orientation="vertical" sx={{ borderBottomWidth: 40 }} />
          <ButtonBase variant="text" sx={{ p: "20px", textTransform: "none", borderRadius: 25 }}>
            Menu
          </ButtonBase>
        </Paper>
      )}

      {variant === "event" && (
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: width ? width : "80vw",
            height: 100,
            borderRadius: 25,
            pr: 2,
          }}
          elevation={10}>
          <InputBase sx={{ ml: 1, flex: 1, p: 4 }} placeholder="Events I’m interested in" />
          <IconButton type="button" sx={{ p: "20px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider orientation="vertical" sx={{ borderBottomWidth: 40 }} />
          <InputBase sx={{ ml: 1, flex: 1, p: 4 }} placeholder="Event Category" />
          <Divider orientation="vertical" sx={{ borderBottomWidth: 40 }} />
          <InputBase sx={{ ml: 1, flex: 1, p: 4 }} placeholder="Event Location" />
          <Divider orientation="vertical" sx={{ borderBottomWidth: 40 }} />
          <IconButton type="button" sx={{ p: "20px" }} aria-label="search">
            <CalendarMonthIcon />
          </IconButton>
          <StyledButton variant="pinkBtn" text="Search" />
        </Paper>
      )}

      {variant === "location" && (
        <>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "60vw",
              height: 80,
              borderRadius: 25,
              bgcolor: "transparent",
            }}
            elevation={10}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                width: "1070px",
                height: 80,
                borderRadius: 25,
              }}
              elevation={10}>
              <Stack direction="row" spacing={2} p={2}>
                <StyledTextField variant="dropDownMenu" placeholder="Province" />
                <StyledTextField variant="dropDownMenu" placeholder="City" />
                <StyledTextField variant="dropDownMenu" placeholder="Zip Code" />
              </Stack>
            </Paper>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton type="button" sx={{ m: "10px", color: "white", bgcolor: "#F83E7D" }} aria-label="search">
              <SearchIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Paper>
        </>
      )}

      {variant === "listings" && (
        <Paper
          component="form"
          sx={{ display: "flex", alignItems: "center", width: 1200, height: 70, borderRadius: 25, p: 2 }}
          elevation={10}>
          <SearchIcon />

          <InputBase
            sx={{ ml: 1, flex: 1, p: 4 }}
            placeholder="Search for Listings"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <StyledButton variant="pinkBtn" text="Search" bgcolor="#0045F1" />
        </Paper>
      )}

      {variant === "small" && (
        <Paper
          component="form"
          sx={{ display: "flex", alignItems: "center", width: 500, height: 70, borderRadius: 25, p: 2 }}
          elevation={10}>
          <IconButton type="button" sx={{ my: "10px" }} aria-label="search">
            <SearchIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <InputBase
            sx={{ ml: 1, flex: 1, p: 4 }}
            placeholder="Search for Listings"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      )}
    </>
  );
}
