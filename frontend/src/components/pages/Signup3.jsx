import React, { useState } from "react";
import { Grid, Typography, Box} from "@mui/material";
import { Stack } from "@mui/system";

import DropDownMenu from "../components/DropDownMenu";
import DropDownList from "../components/DropDownList";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import HouseLogoPink from "../components/HouseLogoPink";
function Page3(props) {

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

    const {setPage, returnHook} = props

    const [location, setLocation] = useState()
    const [occupation, setOccupation] = useState()
    const [dob, setDOB] = useState()

    const [age, setAge] = useState('')
    const [traits, setTraits] = useState()
    const [interests, setInterests] = useState()

    const onClickNextButton = () => {
        setPage(4)
        // send data to server?
        returnHook({
            traits : traits,
            interests : interests,
            age : age,
            dob : dob,
            location : location,
            occupation : occupation,
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
            <StyledButton item onClick={onClickNextButton} variant='signup' link='/account-homeowner' text='Next'/>
        </Stack>
        </Stack>
        </>
    )
}

export default Page3