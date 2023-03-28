import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomTextField from "../components/CustomTextField";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
  Slider,
  Grid,
} from "@mui/material";
import ActionConfirmed from "../components/ActionConfirmed";

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/ListingAccount/`,
});

function ImageGallery(props) {
  const { isAuthenticated, listingAccount } = props;

  const personalityTraits =
    "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(
      " "
    );
  const interests =
    "Gardening Hiking Reading Puzzles Yoga Fitness Cooking Music Art Sports Cars Travel".split(
      " "
    );

  const [triggerConfirmed, setTriggerConfirmed] = useState(false);

  const [value, setValue] = useState([400, 4000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setTriggerConfirmed(true)
  }
  console.log(errors);

  return (
    <Grid>
      <ActionConfirmed
        trigger={triggerConfirmed}
        onActionCompleted={() => setTriggerConfirmed(false)}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField
        variant="myaccount"
        label="FirstName"
        {...register("FirstName", { required: "First name is required" })}
        error={errors.FirstName}
        helperText={errors.FirstName && errors.FirstName.message}
      />
      <CustomTextField
        variant="myaccount"
        label="LastName"
        {...register("LastName", { required: "Last name is required" })}
        error={errors.LastName}
        helperText={errors.LastName && errors.LastName.message}
      />
      <CustomTextField
        variant="myaccount"
        label="Phone Number"
        type="tel"
        {...register("Phone Number", { required: "Phone number is required" })}
        error={errors["Phone Number"]}
        helperText={errors["Phone Number"] && errors["Phone Number"].message}
      />
      <CustomTextField
        variant="myaccount"
        label="Location"
        {...register("Location", { required: "Location is required" })}
        error={errors.Location}
        helperText={errors.Location && errors.Location.message}
      />
      <FormControl fullWidth>
        <InputLabel shrink>Age Range</InputLabel>
        <CustomTextField
          sx={{
            width: "20vw",
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
          required
          select
          style={{
            background: "#E3E7EF",
            borderRadius: "25px",
          }}
          InputProps={{
            sx: {
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            },
            style: {
              color: "#737373FA",
              borderRadius: "25px",
              minWidth: "20vw",
            },
          }}
          {...register("AgeRange", { required: "Age range is required" })}
          error={errors["AgeRange"]}
        >
          <MenuItem value="18 - 23">18 - 23</MenuItem>
          <MenuItem value="24 - 28">24 - 28</MenuItem>
          <MenuItem value="29 - 33">29 - 33</MenuItem>
          <MenuItem value="34 - 38">34 - 38</MenuItem>
        </CustomTextField>

        {/* {errors['Age Range'] && <FormHelperText error>{errors['Age Range'].message}</FormHelperText>} */}
      </FormControl>
      <CustomTextField
        variant="myaccount"
        label="Occupation"
        {...register("Occupation", { required: "Occupation is required" })}
        error={errors.Occupation}
        helperText={errors.Occupation && errors.Occupation.message}
      />
      <CustomTextField
        variant="myaccount"
        multiline
        rows={4}
        required
        fullWidth="50vw"
        placeholder="Provide a brief description about yourself..."
        style={{
          background: "#E3E7EF",
          borderRadius: "10px",
        }}
        InputProps={{
          style: {
            color: "#737373FA",
            borderRadius: "10px",
            minWidth: "20vw",
            minHeight: "20vh",
          },
          sx: {
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        }}
        {...register("AboutYourself", {})}
      />
      <CustomTextField
        multiline
        rows={4}
        required
        fullWidth="50vw"
        placeholder="Provide what you're looking for in a rental or housemate."
        style={{
          background: "#E3E7EF",
          borderRadius: "10px",
        }}
        InputProps={{
          style: {
            color: "#737373FA",
            borderRadius: "10px",
            minWidth: "20vw",
            minHeight: "20vh",
          },
          sx: {
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        }}
        {...register("Preferences", {})}
      />
      <Slider
        label="Price Range Preference"
        type="range"
        {...register("PriceRangePreference", {})}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
    </Grid>
  );
}

export default ImageGallery;
