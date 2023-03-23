import {
  Container,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
  TextField,
  Divider,
  Slider,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import SideNav from "../components/SideNav";

import axios from "axios";
import StyledButton from "../components/StyledButton";

import { connect } from "react-redux";
import ImageUpload from "../components/ImageUploadComponent";
import CustomTextField from "../components/CustomTextField";
import ActionConfirmed from "../components/ActionConfirmed";

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/ListingAccount/`,
});

function ImageGallery({ props, isAuthenticated, listingAccount }) {
  function colorTheme() {
    //   switch (listingAccount.account_type) {
    //     case "tenant":
    //       return "#F83E7D";
    //     case "homeowner":
    //       return "#0045F1";
    //     case "propertyowner":
    //       return "#113170";
    //     default:
    //       return "#C5265C";
    //   }
    return "#F83E7D";
  }

  const ranges = [
    {
      value: "18 - 23",
      key: "18 - 23",
    },
    {
      value: "23 - 28",
      key: "23 - 28",
    },
    {
      value: "28 - 33",
      key: "28 - 33",
    },
    {
      value: "33 - 38",
      key: "33 - 38",
    },
  ];

  const personalityTraits =
    "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(
      " "
    );
  const interests =
    "Gardening Hiking Reading Puzzles Yoga Cooking Music Art Sports Cars".split(
      " "
    );

  // the overall state for the whole form
  const [formdata, setFormData] = useState({
    first_name: "George",
    last_name: "Li",
    username: "George",
    email: "g257li@uwaterloo.ca",
    phone_number: "6476790885",
    date_of_birth: "2002-09-26",
    location: "Toronto",
    age_range: "19-21",
    tell_us_about_yourself: "ahhhh",
    // preferences: ""
    occupation: "Doctor",
    profile_picture:
      "http://127.0.0.1:8000/media/profile_picture/43dfc696e92214af5868b2421604f4cd.jpg",
    banner_picture:
      "http://127.0.0.1:8000/media/banner_picture/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_one:
      "http://127.0.0.1:8000/media/display_picture_one/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_two:
      "http://127.0.0.1:8000/media/display_picture_two/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_three:
      "http://127.0.0.1:8000/media/display_picture_three/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_four:
      "http://127.0.0.1:8000/media/display_picture_four/43dfc696e92214af5868b2421604f4cd.jpg",
    personal_traits: [],
    interests: [],
  });
  const [profile_picture, setProfilePicture] = useState(null);
  const [banner_picture, setBanner_picture] = useState(null);
  const [display_picture_one, setDisplay_picture_one] = useState(null);
  const [display_picture_two, setDisplay_picture_two] = useState(null);
  const [display_picture_three, setDisplay_picture_three] = useState(null);
  const [display_picture_four, setDisplay_picture_four] = useState(null);

  const [traitsCheckedState, setTraitsCheckedState] = useState(
    new Array(personalityTraits.length).fill(false)
  );
  const [interestsCheckedState, setInterestsCheckedState] = useState(
    new Array(interests.length).fill(false)
  );

  const handleTraitOnChange = (position) => {
    const updatedCheckedState = traitsCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setTraitsCheckedState(updatedCheckedState);
  };

  const handleInterestOnChange = (position) => {
    const updatedCheckedState = interestsCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setInterestsCheckedState(updatedCheckedState);
  };

  const handleReset = () => {
    // setField_1("");
    // setField_2("");
    // setField_3("");
    // setField_4("");
    // setField_5("");
    // setField_6("");
    // setField_7("");
  };

  const [triggerConfirmed, setTriggerConfirmed] = useState(false);

  const handleSubmit = () => {
    setTriggerConfirmed(true);
    console.log("snackbar triggered ");

    const returnTraits = [];
    for (let i = 0; i <= personalityTraits.length; i++) {
      if (traitsCheckedState[i]) {
        returnTraits.push(personalityTraits[i]);
      }
    }
    const returnInterests = [];
    for (let i = 0; i <= interests.length; i++) {
      if (interestsCheckedState[i]) {
        returnInterests.push(interests[i]);
      }
    }

    const id = 1;
    const formData = new FormData();
    formData.append("profile_picture", formdata.profile_picture);
    formData.append("banner_picture", formdata);
    formData.append("display_picture_one", formdata);
    formData.append("display_picture_two", formdata);
    formData.append("display_picture_three", formdata);
    formData.append("display_picture_four", formdata);
    formData.append("first_name", formdata.first_name);
    formData.append("last_name", formdata.last_name);
    formData.append("username", formdata.username);
    formData.append("email", formdata.email);
    formData.append("phone_number", formdata.phone_number);
    formData.append("date_of_birth", formdata.date_of_birth);
    formData.append("location", formdata.location);
    formData.append("age_range", formdata.age_range);
    formData.append("tell_us_about_yourself", formdata.tell_us_about_yourself);
    formData.append("occupation", formdata.occupation);
    formData.append("personal_traits", formdata.personal_traits);
    formData.append("interests", formdata.interests);

    // axios
    //   .post("http://localhost:8000/ListingAccount/" + { id } + "/", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // handleReset();
  };

  const [value, setValue] = useState([400, 4000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // get account type from redux

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#000",
//       },
//       secondary: {
//         main: "#E33E7F",
//       },
//       tertiary: {
//         main: "#000",
//       },
//     },
//   });

//   return (
//     <MuiThemeProvider theme={theme}>
//       <Root />
//       <div color={theme.palette.primary}>content</div>
//     </MuiThemeProvider>
//   );
}

export default ImageGallery;
//   const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     listingAccount: state.auth.listingAccount,
//   });

//   export default connect(mapStateToProps)(MyAccount);
