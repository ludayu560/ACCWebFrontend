import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { create_blog } from "../../Redux/actions/blog";

import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Footer from "../components/Footer";


const CustomToggleButtonStyles = {
  "&.MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected":
    {
      border: "3px solid #0045F1",
      borderRadius: "100vmax",
    },
  "&.MuiButtonBase-root": {
    border: "3px solid #0045F1",
    borderColor: "#D9D9D9",
    borderRadius: "100vmax",
    marginRight: "10px",
    minWidth: "3.5rem",
    ":first-of-type": {
      border: "3px solid #0045F1",
      borderColor: "#D9D9D9",
      borderRadius: "100vmax",
    },
    ":not(:first-of-type)": {
      border: "3px solid #0045F1",
      borderColor: "#D9D9D9",
      borderRadius: "100vmax",
    },
  },
  "&.Mui-selected.MuiButtonBase-root": {
    border: "3px solid #0045F1",
    borderRadius: "100vmax",
    bgcolor: "white",
  },
};

function BlogsCreate(props) {
  const { listingAccount, create_blog } = props;
  const { control, handleSubmit, watch } = useForm();

  const [category, setCategory] = useState("lifestyle_and_wellness");

  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate("/blogs");
  };

  const onSubmit = (data) => {
    const blog = {
      title: data.BlogHeader,
      subtitle: data.Subtitle,
      background_image: null,
      category_type: category,
      markdown_content: data.event_description,
      created: data.event_date,
      author: listingAccount.id,
      // tags to be added later
      tags: [],
    }

    create_blog(blog);
  };

  // debug console.log for watched values
  const watchedValues = watch();
  useEffect(() => {
    console.log("Current form values:", watchedValues);
  }, [watchedValues]);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Our Latest Blogs */}
      <Box pt={10} px={10} spacing={3} display="flex" alignItems="center">
        <IconButton onClick={handleOnClick}>
          <ArrowBackIcon style={{ fontSize: 60 }} sx={{ m: 5 }} />
        </IconButton>

        <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
          Add new blog
        </Typography>
      </Box>
      <Stack alignItems="center">
        <Divider width="90%" />
      </Stack>
      {/* Blogs Grid */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={10}
          alignContent="center"
          justifyContent="center"
          pt={10}
          px={10}
          pb={20}
        >
          <Grid item xs={12}>
            <Stack spacing={5}>
              <Controller
                name="BlogHeader"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    label="Blog Header"
                    variant="outlined"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="Subtitle"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    label="Subtitle"
                    variant="outlined"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="event_date"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="filled"
                  label="Date"
                  style={{ backgroundColor: "white" }}
                  type="date"
                  required
                  InputLabelProps={{ shrink: true }}
                  width="50%"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={12}>
            {/* Utilities Included */}
            <Container>
              <Typography
                variant="h4"
                marginTop={"3vh"}
                gutterBottom
                fontWeight={700}
              >
                Categories
              </Typography>
              <ToggleButtonGroup
                exclusive
                value={category}
                onChange={(event, value) => {
                  setCategory(value);
                }}
                sx={{ flexWrap: "wrap" }}
              >
                <ToggleButton value={"lifestyle_and_wellness"} sx={CustomToggleButtonStyles}>
                  <Typography variant="h6">LIFESTYLE & WELLNESS</Typography>
                </ToggleButton>
                <ToggleButton value={"inspiring_women"} sx={CustomToggleButtonStyles}>
                  <Typography variant="h6">INSPIRING WOMEN</Typography>
                </ToggleButton>
                <ToggleButton value={"real_estate"} sx={CustomToggleButtonStyles}>
                  <Typography variant="h6">REAL ESTATE</Typography>
                </ToggleButton>
                <ToggleButton value={"food"} sx={CustomToggleButtonStyles}>
                  <Typography variant="h6">FOOD</Typography>
                </ToggleButton>
                <ToggleButton value={"entertainment"} sx={CustomToggleButtonStyles}>
                  <Typography variant="h6">ENTERTAINMENT</Typography>
                </ToggleButton>
                <ToggleButton
                  value={"coliving"}
                  sx={CustomToggleButtonStyles}
                >
                  <Typography variant="h6">COLIVING</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={10}>
              <Controller
                name="event_description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    id="filled-multiline-static"
                    label="MARKDOWN"
                    multiline
                    rows={11}
                    defaultValue=""
                    variant="filled"
                    sx={{ width: "100%", mt: 4 }}
                    {...field}
                  />
                )}
              />
              <TextField
                label="PREVIEW"
                variant="outlined"
                fullWidth
                disabled
              />
            </Stack>
          </Grid>
          <Button type="submit" marginTop="100px">
            Submit
          </Button>
        </Grid>
      </form>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, { create_blog })(BlogsCreate);
