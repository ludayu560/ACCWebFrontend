import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import StyledButton from "./StyledButton";

function HousemateComponent(props) {
  const { profileLink, username, description, age, occupation } = props;

  let color = (description === "Homeowner")? "#0045F1" : "#F83E7D"
  

    return (
        <Box border={'3px solid'} borderColor={color} borderRadius={"40px"} marginX={2} marginY={5}>
            <Stack width={'20vw'}>
                <Box marginX={'5vw'} marginTop={'3vh'} border={'1px solid grey'} borderRadius={"1000px"} width={"10vw"} height={"10vw"}></Box>
                <Typography textAlign={'center'} fontWeight={600} fontSize={24}>{username}</Typography>
                <Typography textAlign={'center'} fontWeight={500} fontSize={20}color={color}>{description}</Typography>
                <Stack direction='row' width={'100%'} marginTop={3}>
                    <Typography 
                        textAlign={'center'} 
                        fontWeight={600} 
                        fontSize={14} 
                        width={'100%'}
                        color={'#737373'}>
                        {age} Year Old  |   {occupation}</Typography>
                </Stack>

                <Box paddingX={'4vw'} paddingY={'4vh'}>
                    <StyledButton noArrow bgcolor={color} text="See Profile" variant="signup"/>
                </Box>
            </Stack>
        </Box>
    )
}

export default HousemateComponent