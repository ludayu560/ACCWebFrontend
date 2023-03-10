import React, { useState } from "react";
import { Grid, Typography, Box} from "@mui/material";
import { Stack } from "@mui/system";

import DropDownMenu from "../components/DropDownMenu";
import DropDownList from "../components/DropDownList";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import HouseLogoPink from "../components/HouseLogoPink";
import axios from "axios";
import { signup } from "../../AuthComponents/actions/auth";
import { connect } from 'react-redux';
function Page3({ setPage, pageValueOne, pageValueTwo, signup, user}) {

    const api = axios.create({
        baseURL: `http://127.0.0.1:8000/ListingAccount/`
    })
    const ages = [
        '<18',
        '18-25',
        '26-35',
        '46-55',
        '56-65',
        '65+',
    ]
    const traitList = [
        'Extroverted',
        'Introverted',
        'Outgoing',
        'Open',
        'Creative',
        'Analytical',
        'Private',
        'Laid-back',
        'Quiet',
        'Adventurous',
    ]
    const interestList = [
        'Gardening',
        'Cooking',
        'Hiking',
        'Music',
        'Reading',
        'Art',
        'Puzzles',
        'Sports',
        'Yoga',
        'Cars'
    ]
    const [location, setLocation] = useState()
    const [occupation, setOccupation] = useState()
    const [dob, setDOB] = useState()

    const [age, setAge] = useState('')
    const [traits, setTraits] = useState()
    const [interests, setInterests] = useState()

    const onClickNextButton = (e) => {
        e.preventDefault()
        console.log("before page set 3")
        // createAccount(true)
        if (pageValueOne.password === pageValueOne.passwordConfirm) {
            signup( pageValueOne.firstName + " " + pageValueOne.lastName, pageValueOne.email, pageValueOne.password, pageValueOne.passwordConfirm)
        }
        console.log('setpage')
        setPage(4)
        // send data to server?
        // returnHook({
        //     traits : traits,
        //     interests : interests,
        //     age : age,
        //     dob : dob,
        //     location : location,
        //     occupation : occupation,
        // })

        console.log("after page set 3")
        // closePage(false)

    }

    if (user) {
        api.post('/', {
            "username": pageValueOne.username,
            "account_type": pageValueTwo,
            "first_name": pageValueOne.firstName,
            "last_name": pageValueOne.lastName,
            "email": pageValueOne.email,
            "phone_number": "",
            "date_of_birth": null,
            "location": location,
            "age_range": age,
            "tell_us_about_yourself": "",
            "profile_picture": null,
            "banner_picture": null,
            "display_picture_one": null,
            "display_picture_two": null,
            "display_picture_three": null,
            "display_picture_four": null,
            "personal_traits": traits,
            "interests": interests,
            "notifications": [],
            "user_id": user.id
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    }

    return (
        <>
        <HouseLogoPink></HouseLogoPink>
        <Stack alignItems="center" marginTop={'10vh'}>
        <Box width={'40vw'}>
        <SignupProgressionIcon stage='3'></SignupProgressionIcon>
        </Box>
        <Grid item position={'relative'} right='4vw' paddingTop={'8vh'}><div>
            <Typography variant='h4' fontWeight={600} paddingBottom={'1vh'}> Setup Profile </Typography>
            <Typography variant='p'> Finish registering by setting up additional profile details. </Typography>
        </div></Grid>

        <Stack direction={'column'} spacing={'2vh'} paddingTop={6}>
            <Stack direction={'row'} spacing={'2vw'}>
                <StyledTextField variant='empty' hook={setLocation} placeholder="Location"> </StyledTextField>
                <DropDownList options={ages} setter={setAge} placeholder='Age Group'></DropDownList>

            </Stack>
            <Stack direction={'row'} spacing={'2vw'}>
                <StyledTextField variant='empty' hook={setOccupation} placeholder='Occupation*'> </StyledTextField>
                <StyledTextField variant='empty' hook={setDOB} placeholder='Date of Birth'> </StyledTextField>
            </Stack>

            <DropDownMenu options={traitList} hook={setTraits} placeholder='Personality Traits'> </DropDownMenu>
            <DropDownMenu options={interestList} hook={setInterests} placeholder='Interests'> </DropDownMenu>
        </Stack>

        <Stack direction={'row'} marginTop={'5vh'} spacing={'4vw'}>
            <StyledButton item variant='empty' textColor='#000' text='Skip'/>
            <StyledButton item onClick={onClickNextButton} variant='signup' text='Next'/>
        </Stack>
        </Stack>
        </>
    )
}


const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, { signup })(Page3);