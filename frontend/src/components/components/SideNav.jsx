
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { load_listing_current } from "../../Redux/actions/listingAccount";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../Redux/actions/auth";


function SideNav({load_listing_current, listingAccount, logout}, props) {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("onclick", listingAccount)
    if (listingAccount) {
      load_listing_current(listingAccount.id)
      navigate("/account-profile")
    }
  }
  const handlelogoutclick = () => {
    logout()
    
    navigate("/")
  }

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
        onClick={handleClick}
        variant="text"
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
        onClick={handlelogoutclick}
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
const mapStateToProps = (state) => ({
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, {load_listing_current, logout})(SideNav);