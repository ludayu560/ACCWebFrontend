import React, { useState } from "react";
import { Grid, Typography} from "@mui/material";
import { Stack } from "@mui/system";

import StyledTextField from "../ludaworking/StyledTextField";
import SignupProgressionIcon from "../ludaworking/SignupProgressIcon";
import StyledButton from "../ludaworking/StyledButton";

function Page3() {

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
                    <StyledTextField variant='empty' placeholder="Age Group*"> </StyledTextField>
                </Stack>
                <Stack direction={'row'} spacing={3}>
                    <StyledTextField variant='empty' placeholder='Occupation*'> </StyledTextField>
                    <StyledTextField variant='empty' placeholder='Date of Birth'> </StyledTextField>
                </Stack>

                <StyledTextField variant='empty' placeholder='Personality Traits' width='36vw'> </StyledTextField>
                <StyledTextField variant='empty' placeholder='Interests' width='36vw'> </StyledTextField>
            </Stack>

            <Stack direction={'row'} marginTop={6} spacing={7}>
                <StyledButton item variant='signup' link='/signup/3' text='Next'/>
                <StyledButton item variant='empty' link='/signup/3' text='Skip'/>
            </Stack>
        </Grid>
    )
}

export default Page3