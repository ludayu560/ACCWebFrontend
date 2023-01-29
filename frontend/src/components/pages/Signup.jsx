import React, { useState } from "react";
import {Box, Grid, Typography, TextField, Button} from '@mui/material';
import { borderRadius } from '@mui/system';
import { grey, pink, red } from '@mui/material/colors';
import Page1 from "./Signup1";
import Page2 from "./Signup2";
import Page3 from "./Signup3";

function Signup(props) {
    const { nav } = props
    // Styles
    const styleTextField = {
        width: '20vw',
        borderRadius: '100vmax',
        border: '3px solid #73737380',
    };
    const styleInput = {
        style: {
            borderRadius: '25px',  
        },
    }

    // React Hooks
    // const [fName, setFName] = useState('')
    // const [lName, setLName] = useState('')
    // const [email, setEmail] = useState('')
    // const [confirmEmail, setCEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setCPassword] = useState('')
    // const [username, setUsername] = useState('')


    // dynamically assigns the login / signup component. Placeholder components for now
    const leftPanelComponent = (props.name === "login")? 
        <Grid item xs={4} backgroundColor={'pink'} height={'80vh'}/>: 
        <Grid item xs={4} backgroundColor={'#93C6E7'} height={'80vh'}/>;

    return (
        <div style={{width: '100vw', height:'100vh', background:'#000000'}}>
            <Box 
                position={'absolute'} borderRadius={'10vmin'}
                marginX={'5vw'} marginY={'5vh'} 
                width={'90vw'} height={'90vh'} 
                sx={{ backgroundColor: '#ffffff'}}>

                <Grid container>
                    {nav === '1' && <Page1></Page1>}
                    {nav === '2' && <Page2></Page2>}
                    {nav === '3' && <Page3></Page3>}

                </Grid>
            </Box>
        </div>
    );
}

export default Signup;