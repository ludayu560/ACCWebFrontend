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
import { reset_password } from "../../AuthComponents/actions/auth";
import { signup } from "../../AuthComponents/actions/auth";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Page1({ signup, setPage, returnHook, isAuthenticated, user}) {
// function Page1(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [username, setUsername] = useState('');
    const [newsConsent, setNewsConsent] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false);

    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     passwordConfirm: ''
    // });

    // const { firstName, lastName, email, password, passwordConfirm } = formData;

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const signupValuesOne = {
        firstName: firstName,
        lastName : lastName,
        username : username,
        email : email, 
        password : password,
        passwordConfirm : passwordConfirm,
        newsConsent : newsConsent,
        id: null
    }

    const onClickNextButton = e => {
        e.preventDefault();
        console.log(" click worked")
        console.log(`firstName: ${firstName}`)
        console.log(`lastName: ${lastName}`)
        console.log(`email: ${email}`)
        console.log(`password: ${password}`)
        console.log(`passwordConfirm: ${passwordConfirm}`)
        if (password === passwordConfirm) {
            signup( firstName + " " + lastName, email, password, passwordConfirm)
            // setAccountCreated(true);
            
        }
    }
    
    if (user) {
        signupValuesOne.id = user.id
        console.log(user.id)
        returnHook(signupValuesOne)
        setPage(2)
    }
    // if (isAuthenticated) {
    //     return <Navigate to='/home'/>;
    // }

    // if (accountCreated) {
    //     return <Navigate to='/'/>;
    // }
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { signup })(Page1);
// export default Page1;
