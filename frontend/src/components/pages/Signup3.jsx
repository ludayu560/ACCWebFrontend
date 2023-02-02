import React, { useState } from "react";
import { Grid, Typography, Menu} from "@mui/material";
import { Stack } from "@mui/system";

import DropDownMenu from "../components/DropDownMenu";
import DropDownList from "../components/DropDownList";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
function Page3(props) {
    const {setPage, returnHook} = props

    const [location, setLocation] = useState()
    const [occupation, setOccupation] = useState()
    const [dob, setDOB] = useState()

    const [age, setAge] = useState('')
    const [traits, setTraits] = useState()
    const [interests, setInterests] = useState()


    const onClickNextButton = () => {
        // send data to server?
        console.log(traits, interests)
    }

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


    return (
        <Grid container direction="column" alignItems="center" height={'80vh'} paddingX={'10vw'} marginTop={'10vh'}>
            <SignupProgressionIcon stage='3'></SignupProgressionIcon>
            <Grid item position={'relative'} right='4vw' paddingTop={'8vh'}><div>
                <Typography variant='h4' fontWeight={600} paddingBottom={'1vh'}> Setup Profile </Typography>
                <Typography variant='p'> Finish registering by setting up additional profile details. </Typography>
            </div></Grid>

            <Stack direction={'column'} spacing={3} paddingTop={6}>
                <Stack direction={'row'} spacing={3}>
                    <StyledTextField variant='empty' hook={setLocation} placeholder="Location"> </StyledTextField>
                    <DropDownList options={ages} setter={setAge} placeholder='Age Group'></DropDownList>

                </Stack>
                <Stack direction={'row'} spacing={3}>
                    <StyledTextField variant='empty' hook={setOccupation} placeholder='Occupation*'> </StyledTextField>
                    <StyledTextField variant='empty' hook={setDOB} placeholder='Date of Birth'> </StyledTextField>
                </Stack>

                <DropDownMenu options={traitList} hook={setTraits} placeholder='Personality Traits'> </DropDownMenu>
                <DropDownMenu options={interestList} hook={setInterests} placeholder='Interests'> </DropDownMenu>
            </Stack>

            <Stack direction={'row'} marginTop={6} spacing={7}>
                <StyledButton item variant='empty' textColor='#000' link='/signup/3' text='Skip'/>
                <StyledButton item onClick={onClickNextButton} variant='signup' text='Next'/>
            </Stack>
        </Grid>
    )
}

export default Page3