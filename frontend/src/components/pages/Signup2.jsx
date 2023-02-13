import React, { useState } from "react";
import { Grid, Typography, Stack, Box} from "@mui/material";
import StyledButton from "../components/StyledButton";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import HouseLogoPink from "../components/HouseLogoPink";

function Page2(props) {
    const {setPage, returnHook} = props


    const signupValuesTwo = {
        'role' : 1
    }

    const onClickNextButton = () => {
        // send data from all fields as a JSON
        returnHook(signupValuesTwo)

        // go next
        setPage(3)
    }

    return (
        <>
        <HouseLogoPink></HouseLogoPink>
        <Stack alignItems="center" height={'80vh'} marginTop={'10vh'}>

        <Box width={'40vw'}>
            <SignupProgressionIcon stage='2'></SignupProgressionIcon>
        </Box>
            <Grid item position={'relative'} right='7vw' paddingTop={'8vh'}><div>
            <Typography variant='h4' fontWeight={600} paddingBottom={'1vh'}> Select Role </Typography>
            <Typography variant='p'> Please Select the Role you wish to proceed as.</Typography>
        </div></Grid>

        <Stack item direction={'row'} spacing={7} marginTop={'5vh'}> 
            <StyledButton variant='leftRole' content="Woman Tenant" textColor='#000000'></StyledButton>    
            <StyledButton variant='middleRole' content="Woman Homeowner" textColor='#000000'></StyledButton>      
            <StyledButton variant='middleRole' content="Property Owner" textColor='#000000'></StyledButton>      
            <StyledButton variant='rightRole' content="Other" textColor='#000000'></StyledButton>
        </Stack>

        <Typography item width={'20vw'} textAlign={'center'} paddingY={'3vh'} color={'#F83E7D'} fontWeight={800}> 
            I am looking for a place to share and pay rent on a monthly basis.
        </Typography>

        <StyledButton item onClick={onClickNextButton} variant='signup' text='Next'/>
        </Stack>
        </>
    
    )
}

export default Page2