import React, { useState } from "react";
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Link, Button} from "@mui/material";
import { Stack, borderRadius } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import {ReactComponent as Register1} from '../../assets/Register1.svg';
import {ReactComponent as Register2} from '../../assets/Register2.svg';
import {ReactComponent as Register3} from '../../assets/Register3.svg';
import {ReactComponent as Progress1} from '../../assets/Progress1.svg';

function Page1() {
    const styleTextField = {
        background: '#ffffff',
        borderRadius: '100vmax',
        border: '3px solid #7f7d7d'
    };
    const styleInput = {
        style: {
            color: '#737373FA',
            borderRadius: '100vmax',
            height: '5vh',
            width: '17vw'
        }
    }
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
        <Grid item xs={4} backgroundColor='#F83E7D' style={{borderTopLeftRadius: "10vmin", borderBottomLeftRadius: "10vmin"}}>
            {/* left pink panel */}
            <Stack alignItems={'center'} justifyContent={'center'} height={'80vh'} paddingX={'2vw'} spacing={2}>
                <Register1/>
                <Register2/>
                <Register3/>
            </Stack>
        </Grid>

        <Grid item xs={8}>
            <Stack alignItems={'left'} justifyContent={'center'} paddingLeft={'10vw'} paddingRight={'10vw'} paddingTop={'10vh'}>
                <Progress1/>
                <Typography variant="h4" fontWeight={600} paddingTop={'5vh'} paddingBottom={'2vh'}>
                    Sign-up
                </Typography>
                <Grid container rowSpacing={'1vh'} columnSpacing={'1vw'}>
                    <Grid item xs={6}>
                    <TextField 
                        placeholder="First Name*"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        placeholder="Last Name*"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        placeholder="Username*"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField 
                        placeholder="Email Address*"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        placeholder="Password*"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        placeholder="Confirm Password*"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                </Grid>
                <Grid container direction="column" alignItems="center" justifyContent="center" paddingTop={'5vh'}>
                    <FormControlLabel
                        control={<Checkbox sx={{'&.Mui-checked': {color: '#F83E7D'}}}/>} 
                        label={<Typography variant="p" fontWeight={600}>I agree to receive news and updates.</Typography>}/>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            bgcolor="#F83E7D"
                            sx={{ background: "#F83E7D" }}
                            style={{ width: "12vw", height: "6vh", borderRadius: "100vmax", marginTop: "2vh"}}
                            endIcon={<ArrowForwardIcon />}
                            href="">
                            <Typography variant="h5" fontWeight={600}> Next </Typography>
                        </Button>
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