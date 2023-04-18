import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import React from "react";

function ReviewComponent(props) {
  const { username, comment, age, rating} = props;


    return (
        <Paper elevation={3} sx={{borderRadius: '20px'}}>
            <Box>
                <Stack direction={'row'} paddingY={'5vh'}>
                    <Box marginX={'5vw'} border={'1px solid grey'} borderRadius={"1000px"} width={"10vw"} height={"10vw"}/>
                    <Stack>
                        <Typography fontWeight={700} fontSize={24}>{username}</Typography>
                        <Typography fontWeight={500} fontSize={20}>{comment}</Typography>
                        <Stack direction={'row'} paddingTop={'5vh'}>
                            <Typography fontWeight={600} fontSize={16} color={'#737373'}>
                                {age} Days ago</Typography>
                            <Typography fontWeight={600} fontSize={16} color={'#323232'} marginLeft={'50vw'}>
                                Reply</Typography>
                            <Typography fontWeight={600} fontSize={16} color={'#323232'} marginLeft={'2vw'}>
                                Report</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Paper>
    )
}

export default ReviewComponent