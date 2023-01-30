import React, { useState } from "react";
import { Grid, Typography, FormControlLabel, Checkbox, Link} from "@mui/material";
import { Stack } from "@mui/system";


import SignupAisha from "../components/SignupAishaLogo";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
function Page1() {
    return (
    <>
        <style>
            {
                `.a:hover, .a:active, .a:link, .a:visited {
                    color: '#F83E7D'
                }`
            }
        </style>
    <Grid container maxHeight={'100vh'}>
        <SignupAisha></SignupAisha>
        <Grid item xs={8}>
            <Stack alignItems={'left'} justifyContent={'center'} paddingLeft={'10vw'} paddingRight={'10vw'} paddingTop={'10vh'}>
                <SignupProgressionIcon stage='1'/>
                <Typography variant="h4" fontWeight={600} paddingTop={'5vh'} paddingBottom={'2vh'}>
                    Sign-up
                </Typography>
                <Grid container rowSpacing={'1vh'} columnSpacing={'1vw'}>
                    <Grid item xs={6}>
                        <StyledTextField placeholder='First Name*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField placeholder='Last Name*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField placeholder='Userame*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField placeholder='Email Address*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField placeholder='Password*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField placeholder='Confirm Password*' variant='empty'></StyledTextField>
                    </Grid>
                </Grid>
                <Grid container direction="column" alignItems="center" justifyContent="center" paddingTop={'5vh'}>
                    <FormControlLabel
                        control={<Checkbox sx={{'&.Mui-checked': {color: '#F83E7D'}}}/>} 
                        label={<Typography variant="p" fontWeight={600}>I agree to receive news and updates.</Typography>}/>
                    <Grid item xs={3} marginY={4}>
                        <StyledButton variant='signup' link='/signup/2' text='Next'/>
                    </Grid>
                    <Typography variant="h6" fontWeight={700}>
                        Already a member?
                        <Link color={'#F83E7D'} href="/login" sx={{textDecoration: 'none', color: '#F83E7D'}} > Login</Link>
                    </Typography>
                </Grid> 
            </Stack>
        </Grid>
    </Grid>
    </>
    )
}

export default Page1