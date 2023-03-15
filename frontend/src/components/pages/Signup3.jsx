import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";

import DropDownMenu from "../components/DropDownMenu";
import DropDownList from "../components/DropDownList";
import StyledButton from "../components/StyledButton";
import CustomTextField from "../components/CustomTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import HouseLogoPink from "../components/HouseLogoPink";
import axios from "axios";
import { signup, create_listing_account} from "../../AuthComponents/actions/auth";
import { connect } from "react-redux";
function Page3({
  setPage,
  pageValueOne,
  pageValueTwo,
  signup,
  user,
  signedup,
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
    if (pageValueOne.password === pageValueOne.passwordConfirm) {
      signup(
        pageValueOne.firstName + " " + pageValueOne.lastName,
        pageValueOne.email,
        pageValueOne.password,
        pageValueOne.passwordConfirm
      );
    }
    if (signedup) {
      const processedTraits = [];
      const processedInterests = [];
      traits.map((item) => processedTraits.append({ trait: item }));
      interests.map((item) => processedInterests.append({ interest: item }));

      listingAccount = {
          username: pageValueOne.username,
          account_type: pageValueTwo,
          first_name: pageValueOne.firstName,
          last_name: pageValueOne.lastName,
          email: pageValueOne.email,
          phone_number: "",
          date_of_birth: null,
          location: location,
          age_range: age,
          occupation: occupation,
          news_consent: true,
          tell_us_about_yourself: "",
          profile_picture: null,
          banner_picture: null,
          display_picture_one: null,
          display_picture_two: null,
          display_picture_three: null,
          display_picture_four: null,
          traits: processedTraits, // we need to process personal traits and interests before they are useable
          interests: processedInterests,
          notifications: [],
          user_id: user.id,
        }
      create_listing_account(listingAccount)
      setPage(1);
    }
  };

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
              style={{width:'23vw'}}
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
              style={{width:'23vw'}}
            >
              {" "}
            </CustomTextField>
            <CustomTextField
              variant="signup"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setDOB(e.target.value)}
              label="Date of Birth"
              type="date"
              style={{width:'25vw'}}
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

export default connect(mapStateToProps, { signup, create_listing_account})(Page3);
