import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Stack from "@mui/system/Stack";

import SignupAisha from "../components/SignupAishaLogo";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
function Page1(props) {
    const { setPage, returnHook } = props
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [newsConsent, setNewsConsent] = useState(false);

    const signupValuesOne = {
        firstName: firstName,
        lastName : lastName,
        username : username,
        email : email, 
        password : password,
        passwordConfirm : passwordConfirm,
        newsConsent : newsConsent
    }

    const onClickNextButton = () => {
        // send data from all fields as a JSON
        returnHook(signupValuesOne)

        // go next
        setPage(2)
    }


    return (
    <Grid container>
        <SignupAisha></SignupAisha>
        <Grid item xs={8}>
            <Stack alignItems={'left'} justifyContent={'center'} paddingLeft={'10vw'} paddingRight={'10vw'} paddingTop={'10vh'} maxWidth={"100%"}>
                <SignupProgressionIcon stage='1'/>
                <Typography variant="h4" fontWeight={600} paddingTop={'5vh'} paddingBottom={'2vh'}>
                    Sign-up
                </Typography>
                <Grid container rowSpacing={'1vh'} columnSpacing={'1vw'}>
                    <Grid item xs={6}>
                        <StyledTextField hook={setFirstName} placeholder='First Name*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField hook={setLastName} placeholder='Last Name*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField hook={setUsername} placeholder='Username*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField hook={setEmail} placeholder='Email Address*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField hook={setPassword} placeholder='Password*' variant='empty'></StyledTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledTextField hook={setPasswordConfirm} placeholder='Confirm Password*' variant='empty'></StyledTextField>
                    </Grid>
                </Grid>
                <Grid container direction="column" alignItems="center" justifyContent="center" paddingTop={'5vh'}>
                    <FormControlLabel
                        control={<Checkbox onClick={e => setNewsConsent(!newsConsent)} sx={{'&.Mui-checked': {color: '#F83E7D'}}}/>} 
                        label={<Typography variant="p" fontWeight={600}>I agree to receive news and updates.</Typography>}/>
                    <Grid item xs={3} marginY={4}>
                        <StyledButton onClick={onClickNextButton} variant='signup' text='Next'/>
                    </Grid>
                    <Typography variant="h6" fontWeight={700}>
                        Already a member?
                        <Link color={'#F83E7D'} href="/login" sx={{textDecoration: 'none', color: '#F83E7D'}} > Login</Link>
                    </Typography>
                </Grid> 
            </Stack>
        </Grid>
    </Grid>
    )
}

export default Page1