import { 
    Container,
    Button,
    Grid,
    Box,
    FormGroup,
    FormControlLabel,
    Checkbox,
    MenuItem,
    Typography,
    Stack,
    Paper,
    TextField
} from '@mui/material';
import {Link} from 'react-router-dom';
import React, { useState } from "react";


function MyAccount(props) {
    const ranges = [
        {
            value: 'placeholder1',
            key: 'placeholder1'
        },{
            value: 'placeholder2',
            key: 'placeholder2'
        },{
            value: 'placeholder3',
            key: 'placeholder3'
        },{
            value: 'placeholder4',
            key: 'placeholder4'
        }
    ];

    const personalityTraits = "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(' ');
    const interests = "Gardening Hiking Reading Puzzles Yoga Cooking Music Art Sports Cars".split(' ');

    const [field_1, setField_1] = useState('')
    const [field_2, setField_2] = useState('')
    const [field_3, setField_3] = useState('')
    const [field_4, setField_4] = useState('')
    const [field_5, setField_5] = useState('')
    const [field_6, setField_6] = useState('')
    const [field_7, setField_7] = useState('')

    const [traitsCheckedState, setTraitsCheckedState] = useState(
        new Array(personalityTraits.length).fill(false)
    );
    const [interestsCheckedState, setInterestsCheckedState] = useState(
        new Array(interests.length).fill(false)
    );

    const handleTraitOnChange = (position) => {
        const updatedCheckedState = traitsCheckedState.map((item, index) =>
        index === position ? !item : item
      );
      setTraitsCheckedState(updatedCheckedState);
    }
    const handleInterestOnChange = (position) => {
        const updatedCheckedState = interestsCheckedState.map((item, index) =>
        index === position ? !item : item
      );
      setInterestsCheckedState(updatedCheckedState);
    }

    const handleReset = () => {
        setField_1('')
        setField_2('')
        setField_3('')
        setField_4('')
        setField_5('')
        setField_6('')
        setField_7('')
        // setTraitsCheckedState(new Array(personalityTraits.length).fill(false))
        // setInterestsCheckedState(new Array(interests.length).fill(false))

    };

    const handleSubmit = () => {

        // Submit here
        console.log(field_1, field_2, field_3, field_4, field_5, field_6, field_7);
        console.log(traitsCheckedState)
        console.log(interestsCheckedState)


        handleReset();
    };

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
            <Grid container xs={9} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        Personal Details*
                    </Typography>
                </Grid>

                <Grid container item spacing={4} xs={6}>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_1(e.target.value)} 
                        required
                        value={field_1} 
                        placeholder="Username" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_2(e.target.value)} 
                        required
                        value={field_2} 
                        placeholder="Full Name" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_3(e.target.value)} 
                        required
                        value={field_3} 
                        placeholder="Email" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_4(e.target.value)} 
                        required
                        value={field_4} 
                        placeholder="Phone" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_5(e.target.value)} 
                        required
                        value={field_5} 
                        placeholder="Location" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_6(e.target.value)} 
                        required
                        select
                        value={field_6} 
                        placeholder="Age Range" 
                        helperText="please select your age range">

                        {ranges.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    </Grid>
                </Grid>

                <Grid item xs={6} sx={{backgroundColor: '#E3E7EF', marginY: '4vh', minHeight: '40vh'}}>
                    Content
                </Grid>

                <Grid container xs={12}>
                    <Typography variant='h4'>
                        About Yourself
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField onChange={e => setField_7(e.target.value)} 
                        required
                        value={field_7}
                        fullWidth="50vw"
                        placeholder="Provide a brief description about yourself..." />
                </Grid>
                
                <Grid item container>
                    <Grid item xs={6}>
                        <Grid container xs={12}>
                        <Typography variant='h4'>
                            Personality Traits
                        </Typography>
                        </Grid>

                        <Grid item xs={6}>
                        <FormGroup>
                            {personalityTraits.map((name, index) => {
                            return (
                                <FormControlLabel control={<Checkbox  onChange={()=>handleTraitOnChange(index)}/>} label={name} />
                            );
                            })}
                        </FormGroup>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container xs={12}>
                        <Typography variant='h4'>
                            Interests
                        </Typography>
                        </Grid>


                        <Grid item xs={6}>
                        <FormGroup>
                            {interests.map((name, index) => {
                            return (
                                <FormControlLabel control={<Checkbox  onChange={()=>handleInterestOnChange(index)}/>} label={name} />
                            );
                            })}
                        </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Button onClick={handleSubmit}>Submit</Button>

        </Grid>
        </Grid> 

    );
  }
  
  export default MyAccount;
  