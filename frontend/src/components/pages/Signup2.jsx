import React, { useState } from "react";
import { Grid, Typography, Stack, Box, Button} from "@mui/material";
import StyledButton from "../components/StyledButton";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import HouseLogoPink from "../components/HouseLogoPink";

import {ReactComponent as IconOther} from "../../assets/Icons/IconOther.svg"
import {ReactComponent as IconPropertyOwner} from "../../assets/Icons/IconPropertyOwner.svg"
import {ReactComponent as IconTenant} from "../../assets/Icons/IconTenant.svg"
import {ReactComponent as IconWomanHomeowner} from "../../assets/Icons/IconWomanHomeowner.svg"


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

    const buttonStyle = {
        width: '10vw',
        height: '10vw',
        background: "transparent",
        textTransform: "none", 
    }
    const textStyle = {
        fontWeight: 700,
        variant: 'h7'
    }

    return (
        <>
        <HouseLogoPink></HouseLogoPink>
        <Stack alignItems="center" height={'80vh'} marginTop={'10vh'}>
            <Box width={'40vw'}>
                <SignupProgressionIcon stage='2'></SignupProgressionIcon>
            </Box>
                <Grid item position={'relative'} right='7vw' paddingTop={'8vh'}><div>
                <Typography variant='h4' fontWeight={600} fontSize={"40px"} paddingBottom={'1vh'}> Select Role </Typography>
                <Typography variant='p' color={'#737373'} fontWeight={"600"} fontSize={"20px"}> Please Select the Role you wish to proceed as.</Typography>
            </div></Grid>

            <Stack item direction={'row'} spacing={7} marginTop={'5vh'}> 

                <Button
                    variant="contained"
                    style={{
                        ...buttonStyle,
                        borderRadius: '50px 0 0 50px',
                        background: '#F83E7D',
                        boxShadow: '0px 4px 4px rgba(248, 62, 125, 0.5)'}}>
                    <Stack alignItems={"center"}>
                        <Box width={"4vw"}><IconTenant/></Box>
                        <Typography marginTop={'2vh'} style={{...textStyle}}>Woman Tenant</Typography>
                    </Stack>
                </Button>
                <Button
                    variant="contained"
                    style={{
                        ...buttonStyle,
                        color: '#000000',
                        boxShadow: '0px 4px 4px rgba(66, 172, 249, 0.5)'}}>
                    <Stack alignItems={"center"}>
                        <Box width={"5vw"}><IconWomanHomeowner/></Box>
                        <Typography marginTop={'1vh'} style={{...textStyle, color: '#0045F1'}}>Woman Homeowner</Typography>
                    </Stack>
                </Button>
                <Button
                    variant="contained"
                    style={{
                        ...buttonStyle,
                        color: '#000000',
                        boxShadow: '0px 4px 4px rgba(0, 69, 241, 0.51)'}}>
                    <Stack alignItems={"center"}>
                        <Box width={"3vw"}><IconPropertyOwner/></Box>
                        <Typography marginTop={'2vh'}style={{...textStyle, color: '#113170'}}>Property Owner</Typography>
                    </Stack>
                </Button>
                <Button
                    variant="contained"
                    style={{
                        ...buttonStyle,
                        borderRadius: '0 50px 50px 0',
                        color: '#000000',
                        boxShadow: '0px 4px 4px rgba(115, 115, 115, 0.5)'}}>
                    <Stack alignItems={"center"}>
                        <Box width={"4vw"}><IconOther/></Box>
                        <Typography marginTop={'3vh'} style={{...textStyle, color: '#C5265C'}}>Other</Typography>
                    </Stack>
                </Button>
            </Stack>

            <Typography item width={'20vw'} textAlign={'center'} fontWeight={"700"} paddingY={'4vh'} color={'#F83E7D'} fontSize={"18px"}> 
                I am looking for a place to share and pay rent on a monthly basis.
            </Typography>

            <StyledButton item onClick={onClickNextButton} variant='signup' text='Next'/>
        </Stack>
        </>
    
    )
}

export default Page2