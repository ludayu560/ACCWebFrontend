import * as React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import { borderRadius } from '@mui/system';
import { grey, pink, red } from '@mui/material/colors';
function Signup(props) {


    // dynamically assigns the login / signup component. Placeholder components for now
    const leftPanelComponent = (props.name === "login")? 
        <Grid item xs={4} backgroundColor={'pink'} height={'80vh'}/>: 
        <Grid item xs={4} backgroundColor={'#93C6E7'} height={'80vh'}/>;

    const progressBarComponent = () => {
        if (props.progress === "1") {
            return <Grid item container xs={8}>
                <Grid item xs={12} backgroundColor={'#604258'} height={'30vh'}></Grid>
                <Grid item xs={2} height={'50vh'}> </Grid>
                <Grid item container xs={8}> 
                    <Grid item xs={12}> 
                        <Typography variant='h4'>Sign Up</Typography>
                    </Grid>

                </Grid>
            </Grid>
        } else if (props.progress === "2") {
            return <Grid item container xs={8}>
                <Grid item xs={12} backgroundColor={'#504258'} height={'30vh'}></Grid>

                <Grid item xs={12}> 
                    Select Role
                    <Grid item container xs={12}>

                    </Grid>
                </Grid>
            </Grid>
        } else {
            return <Grid item container xs={8}>
                <Grid item xs={12} backgroundColor={'#404258'} height={'30vh'}></Grid>
                <Grid item xs={12}> 
                    Finish Profile
                    <Grid item container xs={12}>

                    </Grid>
                </Grid>
            </Grid>
        }
    }

    return (
        <div style={{width: '100vw', height:'100vh', background:'#000000'}}>
            <Box 
                position={'absolute'} borderRadius={'10vmin'}
                marginX={'5vw'} marginY={'10vh'} 
                width={'90vw'} height={'80vh'} 
                sx={{ backgroundColor: '#ffffff'}}>

                <Grid container>
                    {leftPanelComponent}
                    {progressBarComponent()}
                </Grid>
            </Box>
        </div>
    );
}

export default Signup;