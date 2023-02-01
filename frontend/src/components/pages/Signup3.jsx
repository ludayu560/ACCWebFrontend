import React, { useState } from "react";
import { Grid, Typography, Menu} from "@mui/material";
import { Stack } from "@mui/system";

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from "@mui/material"
import {Paper} from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {ListItemText} from "@mui/material";
import {ListItemButton} from "@mui/material";


import DropDownMenu from "../components/DropDownMenu";
import DropDownList from "../components/DropDownList";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import SignupProgressionIcon from "../components/SignupProgressIcon";
function Page3() {
    const ages = [
        '<18',
        '18-25',
        '26-35',
        '46-55',
        '56-65',
        '65+',
    ]
    const traits = [
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
    const interests = [
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

    const [trait, setTraits] = useState('')

    return (
        <Grid container direction="column" alignItems="center" height={'80vh'} paddingX={'10vw'} marginTop={'10vh'}>
            <SignupProgressionIcon stage='3'></SignupProgressionIcon>
            <Grid item position={'relative'} right='4vw' paddingTop={'8vh'}><div>
                <Typography variant='h4' fontWeight={600} paddingBottom={'1vh'}> Setup Profile </Typography>
                <Typography variant='p'> Finish registering by setting up additional profile details. </Typography>
            </div></Grid>

            <Stack direction={'column'} spacing={3} paddingTop={6}>
                <Stack direction={'row'} spacing={3}>
                    <StyledTextField variant='empty' placeholder="Location"> </StyledTextField>
                    <DropDownList options={ages} setter={setTraits} placeholder='Age Group'></DropDownList>

                </Stack>
                <Stack direction={'row'} spacing={3}>
                    <StyledTextField variant='empty' placeholder='Occupation*'> </StyledTextField>
                    <StyledTextField variant='empty' placeholder='Date of Birth'> </StyledTextField>
                </Stack>

                <DropDownMenu options={traits} placeholder='Personality Traits'> </DropDownMenu>
                <DropDownMenu options={interests} placeholder='Interests'> </DropDownMenu>
            </Stack>

            <Stack direction={'row'} marginTop={6} spacing={7}>
                <StyledButton item variant='empty' textColor='#000' link='/signup/3' text='Skip'/>
                <StyledButton item variant='signup' link='/signup/3' text='Next'/>
            </Stack>
        </Grid>
    )
}

export default Page3