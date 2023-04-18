import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import StyledButton from "./StyledButton";
import AishaSignature from "../../assets/AishaSignatureVariant2.svg";
import HomeLogo from "../../assets/LogoVariant5.svg";
import Socials from "../../assets/Socials.svg";

function Footer() {
  return (
    <Grid container bgcolor="#113170" p={5} px={10} spacing={5}>
      <Grid item xs={5}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={2}>
            <Box component="img" src={HomeLogo} />
            <Box component="img" src={AishaSignature} />
          </Stack>
          <Typography sx={{ color: "white" }} pb={10}>
            Aisha Comfortable Coliving is a digital platform that works to empower women through new housing solutions
            and strives to build an inclusive community for women.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          COMPANY
        </Typography>
        <Stack pt={2}>
          <Link href="/about" underline="hover">
            <Typography sx={{ color: "white" }}>About</Typography>
          </Link>
          <Link href="/tenanthome" underline="hover">
            <Typography sx={{ color: "white" }}>Tenants</Typography>
          </Link>
          <Link href="/homeowners" underline="hover">
            <Typography sx={{ color: "white" }}>Homeowners</Typography>
          </Link>
          <Link href="/events" underline="hover">
            <Typography sx={{ color: "white" }}>Events</Typography>
          </Link>
          <Link href="/contact" underline="hover">
            <Typography sx={{ color: "white" }}>Contact Us</Typography>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          LEGAL
        </Typography>
        <Stack pt={2}>
          <Typography sx={{ color: "white" }}>Terms & Conditions</Typography>
          <Typography sx={{ color: "white" }}>Privacy Policy</Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          NEWSLETTER
        </Typography>
        <Stack spacing={1} pt={2}>
          <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required />
          <TextField variant="filled" label="Email" style={{ backgroundColor: "white" }} required />
          <StyledButton variant="pinkBtn" text="Subscribe" bgcolor="#F83E7D" />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row">
          <Typography sx={{ color: "white" }}>© 2022 Aisha Comfortable Coliving</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="img" src={Socials} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Footer;
