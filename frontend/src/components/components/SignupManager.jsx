import React, { useState } from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

import Page1 from "../pages/Signup1";
import Page2 from "../pages/Signup2";
import Page3 from "../pages/Signup3";

import axios from "axios";

function SignupManager() {
    const api = axios.create({
        baseURL: `http://127.0.0.1:8000/ListingAccount/`
    })

    const [currPage, setCurrPage] = useState(1)
    // const signupValuesOne = {
    //     firstName: firstName,
    //     lastName : lastName,
    //     username : username,
    //     email : email, 
    //     password : password,
    //     passwordConfirm : passwordConfirm,
    //     newsConsent : newsConsent
    // }
    const [pageValueOne, setPageValueOne] = useState()
    // const signupValuesTwo = {
    //     'role' : 1
    // }
    const [pageValueTwo, setPageValueTwo] = useState()
    // {
    //     traits : traits,
    //     interests : interests,
    //     age : age,
    //     dob : dob,
    //     location : location,
    //     occupation : occupation,
    // }
    const [pageValueThree, setPageValueThree] = useState()

    console.log(pageValueOne, pageValueTwo, pageValueThree)

    if (currPage === 4) {
        api.post('/', {
            "first_name": pageValueOne.first_name,
            "last_name": "WWEEEEEEE",
            "email": "fgWEGEEWGWEG@gmail.com",
            "date_of_birth": null,
            "location": "Toronto",
            "age_range": "18-20",
            "tell_us_about_yourself": "k",
            "personal_traits": [{"trait": "happy"}, {"trait": "few"}, {"trait": "few"}],
            "interests": [{"interest": "skateboarding"}]
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
        .finally(function () {
        console.log('request executed')
        });
    }

    return (

        <div style={{width: '100vw', height:'100vh', background:'#000000'}}>
        <Box 
            position={'absolute'} borderRadius={'10vmin'}
            marginX={'5vw'} marginY={'5vh'} 
            width={'90vw'} height={'90vh'} 
            sx={{ backgroundColor: '#ffffff'}}>

            <Grid container>
                {currPage === 1?
                <Page1 setPage={setCurrPage} returnHook={setPageValueOne}></Page1>
                : null}
                {currPage === 2?
                <Page2 setPage={setCurrPage} returnHook={setPageValueTwo}></Page2>
                : null}
                {currPage === 3? 
                <Page3 setPage={setCurrPage} returnHook={setPageValueThree}></Page3>
                : null}
            </Grid>
        </Box>
    </div>
    )
}

export default SignupManager