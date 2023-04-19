import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ImageUpload from "../components/ImageUploadComponent";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import { create_private_event } from "../../Redux/actions/privateEvent";
import StyledButton from "../components/StyledButton";

const CommunityEventPage = (props) => {
  const { listingAccount, create_private_event } = props;
  const [guests, setGuests] = useState([{ id: 0 }]);

  const addGuest = () => {
    setGuests([...guests, guests.length]);
  };

  const removeGuest = (guestIndex) => {
    setGuests(guests.filter((_, index) => index !== guestIndex));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("listing account: ", listingAccount.id);
    var newEvent = {
      event_name: data.eventTitle,
      event_date_time: data.timeDate,
      event_location: data.location,
      event_description: data.eventDescription,
      event_what_to_bring: data.whatToBring,
      event_image: null,
      invited: data.guests,
      creator_listing_account: listingAccount.id,
    };
    // console.log("creating new event: ", newEvent);
    create_private_event(newEvent);
  };
  // debug console.log for watched values
  const watchedValues = watch();
  useEffect(() => {
    console.log("Current form values:", watchedValues);
    console.log("Current form errors:", errors);
  }, [watchedValues]);

  return (
    <Box marginX={"10vw"} marginBottom={"10vh"}>
      <Typography fontWeight={700} fontSize={48} marginY={"50px"} color={"primary.main"} textAlign={"center"}>
        Organize a community event
        <Divider sx={{ height: "3px !important", color: "#737373" }} />
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionHeader>Event Information</SectionHeader>
        <Grid container spacing={3} maxWidth={"100vw"}>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center" height={"28vh"}>
              <ImageUpload height="28vh" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Box height={"28vh"}>
                <MyAccountTextfield
                  type="text"
                  {...register("eventTitle", { required: true })}
                  placeholder="Event Title"></MyAccountTextfield>
                <MyAccountTextfield
                  type="datetime-local"
                  {...register("timeDate", { required: true })}
                  placeholder="Time & Date"></MyAccountTextfield>

                {/**This should be a drop down menu with Online and Inperson as states, not yet added! */}
                <MyAccountTextfield
                  type="text"
                  {...register("Event Type", { required: true })}
                  placeholder="Event Type"></MyAccountTextfield>

                <MyAccountTextfield
                  type="text"
                  {...register("location", { required: true })}
                  placeholder="Location"></MyAccountTextfield>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <MultilineField
              {...register("eventDescription", { required: true })}
              placeholder="Event Description"></MultilineField>
          </Grid>
        </Grid>

        <SectionHeader>Organizer Contact Information</SectionHeader>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <MyAccountTextfield
              type="text"
              {...register("hostFirstName", { required: true })}
              placeholder="First Name"></MyAccountTextfield>
          </Grid>
          <Grid item xs={4}>
            <MyAccountTextfield
              type="text"
              {...register("hostLastName", { required: true })}
              placeholder="Last Name"></MyAccountTextfield>
          </Grid>
          <Grid item xs={4}>
            <MyAccountTextfield
              type="email"
              {...register("hostEmail", { required: true })}
              placeholder="Email"></MyAccountTextfield>
          </Grid>
        </Grid>

        <Divider sx={{ height: "3px !important", color: "#737373", marginY: "5vh" }} />

        <Box display="flex" justifyContent="center">
          <FormControlLabel
            control={
              <Checkbox
                {...register("agreeToTerms", { required: true })}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "2rem",
                  },
                }}
              />
            }
            label={
              <Typography fontWeight={700} size={16}>
                I agree to the Aisha Community Terms & Conditions
              </Typography>
            }
          />
        </Box>

        <Box display="flex" justifyContent="center" my="4rem" px="10rem">
          <Typography variant="h6" align="center">
            Before your event is available for public browsing, a member of ACC will review your request and will send
            you an email upon check completion.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <StyledButton variant="pinkBtn" text="Pend Review" type="submit"></StyledButton>
        </Box>
      </form>
    </Box>
  );
};

// Renders section headers
function SectionHeader(props) {
  const { children } = props;
  return (
    <Typography fontWeight={600} fontSize={40} marginY={"50px"}>
      {children}
      <Divider
        variant="left"
        sx={{
          marginLeft: "20px",
          width: "5%",
          border: "2px solid",
          color: "primary.main",
          opacity: 100,
          marginY: "3px",
        }}
      />
    </Typography>
  );
}

const MyAccountTextfield = React.forwardRef((props, ref) => {
  return (
    <TextField
      label={props.placeholder.length < 20 ? props.placeholder : ""}
      inputRef={ref}
      sx={{
        marginY: "20px",
        marginRight: "100px",
        width: "100%",
        input: {
          color: "black",
          background: "#E3E7EF",
          borderRadius: "30vmax",
        },
        "& label": { paddingLeft: (theme) => theme.spacing(2) },
        "& input": {
          paddingLeft: (theme) => theme.spacing(3.5),
          border: "0px",
        },
        "& fieldset": {
          paddingLeft: (theme) => theme.spacing(2.5),
          borderRadius: "30vmax",
        },
      }}
      inputProps={{
        sx: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #E3E7EF inset",
            borderRadius: "30vmax",
          },
        },
      }}
      InputProps={{
        disableUnderline: true,
        sx: {
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      }}
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
});

const MultilineField = React.forwardRef((props, ref) => {
  const { placeholder, ...rest } = props;
  return (
    <MyAccountTextfield
      ref={ref}
      multiline
      rows={4}
      required
      placeholder={placeholder ? placeholder : ""}
      style={{
        background: "#E3E7EF",
        borderRadius: "10px",
        width: "100%",
      }}
      InputProps={{
        style: {
          color: "#737373FA",
          borderRadius: "10px",
          minHeight: "20vh",
        },
        sx: {
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      }}
      {...rest}
    />
  );
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, { create_private_event })(CommunityEventPage);
