import React, { useState, useEffect } from "react";
import { logout } from "../../Redux/actions/auth";
import { connect } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Logo from "../../assets/Aisha Logo.svg";
import { useNavigate } from "react-router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Mainbar({ logout, setNav }) {
  const navigate = useNavigate();

  const trigger = useScrollTrigger();
  const logout_user = () => {
    logout();
    setNav(false);
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnClickT = (id) => {
    navigate("/tenanthome");
    handleMenuClose();
  };
  const handleOnClickH = (id) => {
    navigate("/housemates");
    handleMenuClose();
  };
  const handleOnClickL = (id) => {
    navigate("/listings");
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar positon="static">
        <Toolbar sx={{ height: "168px", background: "white" }}>
          <Link href="/">
            <Box component="img" alt="Logo" src={Logo} />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2}>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/dashboard">
              Home
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/events">
              Events
            </Button>
            <Button onClick={handleMouseEnter} endIcon={<ArrowDropDownIcon />}>
              Tenants
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              keepMounted>
              <MenuItem onClick={handleOnClickT}>Tenants</MenuItem>
              <MenuItem onClick={handleOnClickH}>Housemates</MenuItem>
              <MenuItem onClick={handleOnClickL}>Listings</MenuItem>
            </Menu>

            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/homeowners">
              Homeowners
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/about">
              About
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/blogs">
              Blogs
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/contact">
              Contact
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} onClick={logout_user}>
              Logout
            </Button>
            <IconButton href="/account">
              <Avatar></Avatar>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default connect(null, { logout })(Mainbar);
