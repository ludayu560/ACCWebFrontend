import React, { useState } from "react";
import { Grid, Typography, Stack, Box, Button, ButtonGroup} from "@mui/material";
import StyledButton from "../components/StyledButton";
import SignupProgressionIcon from "../components/SignupProgressIcon";
import HouseLogoPink from "../components/HouseLogoPink";

import {ReactComponent as IconOther} from "../../assets/Icons/IconOther.svg"
import {ReactComponent as IconPropertyOwner} from "../../assets/Icons/IconPropertyOwner.svg"
import {ReactComponent as IconTenant} from "../../assets/Icons/IconTenant.svg"
import {ReactComponent as IconWomanHomeowner} from "../../assets/Icons/IconWomanHomeowner.svg"
import {ReactComponent as IconOtherWhite} from "../../assets/Icons/IconOtherWhite.svg"
import {ReactComponent as IconPropertyOwnerWhite} from "../../assets/Icons/IconPropertyOwnerWhite.svg"
import {ReactComponent as IconTenantWhite} from "../../assets/Icons/IconTenantWhite.svg"
import {ReactComponent as IconWomanHomeownerWhite} from "../../assets/Icons/IconWomanHomeownerWhite.svg"

function Page2(props) {
    const {setPage, returnHook} = props

    const onClickNextButton = () => {
        if (selected) {
            // send data from all fields as a JSON
            returnHook(selected)
            // go next
            setPage(3)
        }
    }

    // handle the state of the buttons. only one button should be selected at once
    const [selected, setSelected] = useState('');

    const handleClick = (index) => {
        if (selected === index) {
          setSelected(null);
        } else {
          setSelected(index);
        }
      };

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
                <Grid item position={'relative'} right='7vw' paddingTop={'8vh'}>
                <Box paddingBottom={'5vh'}>
                    <Typography variant='h4' fontWeight={600} fontSize={"40px"} paddingBottom={'1vh'}> Select Role </Typography>
                    <Typography variant='p' color={'#737373'} fontWeight={"600"} fontSize={"20px"}> Please Select the Role you wish to proceed as.</Typography>
                </Box>
                </Grid>

            <ButtonGroup>
                <Button
                    onClick={() => handleClick('tenant')}
                    variant='contained'
                    style={{
                        ...buttonStyle,
                        borderRadius: '50px 0 0 50px',
                        background: (selected === 'tenant') ? '#F83E7D' : 'transparent',
                        boxShadow: '0px 4px 4px rgba(248, 62, 125, 0.5)',
                        marginRight: '3vw'}}>

                    <Stack alignItems={"center"}>
                        <Box width={"4vw"}>
                            {selected === 'tenant'? <IconTenantWhite/> : <IconTenant/>}
                        </Box>
                        <Typography marginTop={'2vh'} style={{...textStyle, color: (selected === 'tenant') ? '#fff' : '#F83E7D'}}>Woman Tenant</Typography>
                    </Stack>
                </Button>
                <Button
                    onClick={() => handleClick('homeowner')}
                    variant='contained'
                    style={{
                        ...buttonStyle,
                        background: (selected === 'homeowner') ? '#0045F1' : 'transparent',
                        boxShadow: '0px 4px 4px rgba(66, 172, 249, 0.5)',
                        marginRight: '3vw'}}>

                    <Stack alignItems={"center"}>
                        <Box width={"5vw"}>
                            {selected === 'homeowner'? <IconWomanHomeownerWhite/> : <IconWomanHomeowner/>}
                        </Box>
                        <Typography marginTop={'1vh'} style={{...textStyle, color: (selected === 'homeowner') ? '#fff' : '#0045F1'}}>Woman Homeowner</Typography>
                    </Stack>
                </Button>
                <Button
                    onClick={() => handleClick('propertyowner')}
                    variant='contained'
                    style={{
                        ...buttonStyle,
                        background: (selected === 'propertyowner') ? '#113170' : 'transparent',
                        boxShadow: '0px 4px 4px rgba(0, 69, 241, 0.51)',
                        marginRight: '3vw'}}>

                    <Stack alignItems={"center"}>
                        <Box width={"3vw"}>
                            {selected === 'propertyowner'? <IconPropertyOwnerWhite/> : <IconPropertyOwner/>}
                        </Box>
                        <Typography marginTop={'2vh'}style={{...textStyle, color: (selected === 'propertyowner') ? '#fff' : '#113170'}}>Property Owner</Typography>
                    </Stack>
                </Button>
                <Button
                    variant='contained'
                    onClick={() => handleClick('other')}
                    style={{
                        ...buttonStyle,
                        borderRadius: '0 50px 50px 0',
                        background: (selected === 'other') ? '#C5265C' : 'transparent',
                        boxShadow: '0px 4px 4px rgba(115, 115, 115, 0.5)'}}>
                    <Stack alignItems={"center"}>
                        <Box width={"4vw"}>
                            {selected === 'other'? <IconOtherWhite/> : <IconOther/>}
                        </Box>
                        <Typography marginTop={'3vh'} style={{...textStyle, color: (selected === 'other') ? '#fff' : '#C5265C'}}>Other</Typography>
                    </Stack>
                </Button>
            </ButtonGroup>

            <Typography item width={'20vw'} textAlign={'center'} fontWeight={"700"} paddingY={'4vh'} color={'#F83E7D'} fontSize={"18px"}> 
                I am looking for a place to share and pay rent on a monthly basis.
            </Typography>

            <StyledButton item onClick={onClickNextButton} variant='signup' text='Next'/>
        </Stack>
        </>
    
    )
}

export default Page2