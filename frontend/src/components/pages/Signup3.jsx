import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/actions/auth";
import { create_listing_account } from "../../Redux/actions/listingAccount";
import CustomTextField from "../components/CustomTextField";
import DropDownList from "../components/DropDownList";
import DropDownMenu from "../components/DropDownMenu";
import HouseLogoPink from "../components/HouseLogoPink";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import StyledButton from "../components/StyledButton";
function Page3({
  setPage,
  pageValueOne,
  pageValueTwo,
  signup,
  user,
  signedup,
  create_listing_account,
}) {
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/ListingAccount/`,
  });
  const ages = ["<18", "18-25", "26-35", "46-55", "56-65", "65+"];
  const traitList = [
    "Extroverted",
    "Introverted",
    "Outgoing",
    "Open",
    "Creative",
    "Analytical",
    "Private",
    "Laid-back",
    "Quiet",
    "Adventurous",
  ];
  const interestList = [
    "Gardening",
    "Cooking",
    "Hiking",
    "Music",
    "Reading",
    "Art",
    "Puzzles",
    "Sports",
    "Yoga",
    "Cars",
  ];
  const [location, setLocation] = useState();
  const [occupation, setOccupation] = useState();
  const [dob, setDOB] = useState();

  const [age, setAge] = useState("");
  const [traits, setTraits] = useState();
  const [interests, setInterests] = useState();

  const onClickNextButton = () => {
    signup(
      pageValueOne.firstName + " " + pageValueOne.lastName,
      pageValueOne.email,
      pageValueOne.password,
      pageValueOne.passwordConfirm
    );
  };
  if (signedup) {
    const listingAccount = {
      username: pageValueOne.username,
      account_type: pageValueTwo,
      first_name: pageValueOne.firstName,
      last_name: pageValueOne.lastName,
      email: pageValueOne.email,
      phone_number: "",
      date_of_birth: dob,
      location: location,
      age_range: age,
      occupation: occupation,
      news_consent: true,
      tell_us_about_yourself: "",
      profile_picture: null,
      banner_picture: null,
      display_picture: null,
      preferences: "",
      price_range_min: 0,
      price_range_max: 700,
      traits: traits,
      interests: interests,
      user: user.id,
    };
    const tempdata = {
      id: 3,
      username: "geoorgge",
      account_type: "tenant",
      first_name: "George",
      last_name: "Li",
      email: "georgeli293@gmail.com",
      phone_number: "6476790885",
      date_of_birth: "2002-09-26",
      location: "Toronto",
      age_range: "18-22",
      occupation: "Doctor",
      news_consent: true,
      tell_us_about_yourself: "blehhhh",
      profile_picture: null,
      banner_picture: null,
      display_picture: null,
      preferences: "",
      price_range_min: "1300.00",
      price_range_max: "2000.00",
      subscription_type: "none",
      user: 1,
    };
    create_listing_account(listingAccount);

    setPage(1);
  }

  return (
    <>
      <HouseLogoPink></HouseLogoPink>
      <Stack alignItems="center" marginTop={"10vh"}>
        <Box width={"40vw"}>
          <SignupProgressionIcon stage="3"></SignupProgressionIcon>
        </Box>
        <Grid item position={"relative"} right="4vw" paddingTop={"8vh"}>
          <div>
            <Typography variant="h4" fontWeight={600} paddingBottom={"1vh"}>
              {" "}
              Setup Profile{" "}
            </Typography>
            <Typography variant="p">
              {" "}
              Finish registering by setting up additional profile details.{" "}
            </Typography>
          </div>
        </Grid>

        <Stack direction={"column"} spacing={"2vh"} paddingTop={6}>
          <Stack direction={"row"} spacing={"2vw"}>
            <CustomTextField
              variant="signup"
              onClick={(e) => setLocation(e.target.value)}
              label="Location"
              style={{ width: "23vw" }}
            >
              {" "}
            </CustomTextField>
            <DropDownList
              options={ages}
              setter={setAge}
              label="Age Group"
            ></DropDownList>
          </Stack>
          <Stack direction={"row"} spacing={"2vw"}>
            <CustomTextField
              variant="signup"
              onClick={(e) => setOccupation(e.target.value)}
              label="Occupation*"
              style={{ width: "23vw" }}
            >
              {" "}
            </CustomTextField>
            <CustomTextField
              variant="signup"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setDOB(e.target.value)}
              label="Date of Birth"
              type="date"
              style={{ width: "25vw" }}
            >
              {" "}
            </CustomTextField>
          </Stack>

          <DropDownMenu
            options={traitList}
            hook={setTraits}
            label="Personality Traits"
          >
            {" "}
          </DropDownMenu>
          <DropDownMenu
            options={interestList}
            hook={setInterests}
            label="Interests"
          >
            {" "}
          </DropDownMenu>
        </Stack>

        <Stack direction={"row"} marginTop={"5vh"} spacing={"4vw"}>
          <StyledButton
            item
            onClick={onClickNextButton}
            variant="empty"
            text="Skip"
          />
          <StyledButton
            item
            onClick={onClickNextButton}
            variant="signup"
            text="Next"
            bgcolor="#F83E7D"
          />
        </Stack>
      </Stack>
    </>
  );
}

const mapStateToProps = (state) => ({
  signedup: state.auth.signedup,
  user: state.auth.user,
});

export default connect(mapStateToProps, { signup, create_listing_account })(
  Page3
);
