import { 
    Container,
    Grid,
    Box,
    Typography,
    Stack,
    Paper
} from '@mui/material';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

function MyAccount(props) {

    return (
        <Grid container spacing={8}>
        <Grid item xs={12}>
            <Typography variant='h2' padding={'3vw'} >
                <b>My Account</b>
            </Typography>
        </Grid>
        <Grid item xs={3}>
        <Stack
            marginLeft={8}
            sx={{backgroundColor: '#E3E7EF', padding: '2vw', borderRadius: '25px'}}
        >
            <Link to={`/account-${props.name}`}>My Profile</Link> <br />
            <Link to={`/account-${props.name}`}>Events</Link> <br />
            <Link to={`/account-${props.name}`}>Notifications</Link> <br />
            <Link to={`/account-${props.name}`}>Favourites</Link> <br />
            <Link to={`/account-${props.name}`}>Settings</Link> <br />
            <Link to={`/account-${props.name}`}>Payment</Link> <br />
            <Link to={`/account-${props.name}`}>Help</Link> <br />
            <Link to={`/account-${props.name}`}>Logout</Link> <br />
        </Stack>
        </Grid>

        <Grid item xs={9}>
            <Grid item xs={9}>
                <Paper sx={{backgroundColor: '#E3E7EF'}}>
                    This is content
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Typography variant='h3' align='center'>
                    Tenant
                </Typography>
            </Grid>
            <Grid container xs={9}>
                <Grid item xs={6}>
                    <Typography variant='h4'>
                        Personal Details
                    </Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={5} sx={{backgroundColor: '#E3E7EF'}}>
                    Content
                </Grid>
            </Grid>

        </Grid>
        </Grid> 

    );
  }
  
  export default MyAccount;
  