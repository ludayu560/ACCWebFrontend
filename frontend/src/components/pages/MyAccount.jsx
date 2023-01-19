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
    TextField,
    ImageListItem,
    Divider
} from '@mui/material';
import {Link} from 'react-router-dom';
import React, { useState } from "react";
import RectangleOne from "../../assets/Rectangle1.svg"
import AccountContent from "../../assets/AccountContent.svg"
import NavBar from '../NavBar';
import axios from 'axios'

function MyAccount(props) {
    const ranges = [
        {
            value: '18 - 23',
            key: '18 - 23'
        },{
            value: '23 - 28',
            key: '23 - 28'
        },{
            value: '28 - 33',
            key: '28 - 33'
        },{
            value: '33 - 38',
            key: '33 - 38'
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

        const returnTraits = [];
        for (let i = 0; i <= personalityTraits.length; i++) {
            if (traitsCheckedState[i]) {
                returnTraits.append(personalityTraits[i]);
            }
        }
        const returnInterests = [];
        for (let i = 0; i <= interests.length; i++) {
            if (interestsCheckedState[i]) {
                returnInterests.append(interests[i]);
            }
        }
        // Submit here
        const accountFields = {
            "username": field_1,
            "first_name": field_2,
            "email": field_3,
            "phone": field_4,
            "location": field_5,
            "ageRange": field_6,
            "about": field_7,
            "personalityTraits": returnTraits,
            "interests": returnInterests
        }

        axios.get('http://127.0.0.1:8000/ListingAccount/', {
            params: {
                ID: 12,
                first_name: field_2,
                last_name: '',
                email: field_3,
                phone_number: field_4,
                location: '',
                age_range: '',
                tell_us_about_yourself: field_7,
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            console.log('request executed')
          });

        handleReset();
    };


    const styleTextField = {
        background: '#E3E7EF',
        borderRadius: '25px',
    };
    const styleInput = {
        style: {
            color: '#737373FA',
            borderRadius: '25px',
            minWidth: '20vw'
        }
    }
    return (
        <>
        <NavBar></NavBar>
        <Grid container spacing={8}>
        <Grid item xs={12}>
            <Typography variant='h2' padding={'3vw'} fontWeight={700}>
                <b>My Account</b>
                <Divider variant='middle' sx={{width:'15vw', border: '2px solid #F83E7D' , opacity: 100}}/>
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
                <ImageListItem>
                    <img src={RectangleOne} />
                </ImageListItem>
            </Grid>
            <Grid item xs={9}>
                <Typography variant='h3' align='center' color='#F83E7D' fontWeight={700} marginTop={'2vmin'}>
                    {props.name}
                </Typography>
            </Grid>
            <Grid container xs={9} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4' fontWeight={600} fontSize={40} marginTop={'2vmin'}>
                        Personal Details*
                        <Divider variant='left' sx={{width:'7vw', border: '2px solid #F83E7D', opacity: 100, marginY: '2vmin'}}/>
                    </Typography>
                </Grid>

                <Grid container item spacing={4} xs={6}>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_1(e.target.value)} 
                        required
                        value={field_1} 
                        placeholder="Username" 
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_2(e.target.value)} 
                        required
                        value={field_2} 
                        placeholder="Full Name"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_3(e.target.value)} 
                        required
                        value={field_3} 
                        placeholder="Email"
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_4(e.target.value)} 
                        required
                        value={field_4} 
                        placeholder="Phone" 
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_5(e.target.value)} 
                        required
                        value={field_5} 
                        placeholder="Location" 
                        style={styleTextField}
                        InputProps={styleInput} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField onChange={e => setField_6(e.target.value)} 
                        required
                        select
                        value={field_6} 
                        placeholder="Age Range" 
                        style={styleTextField}
                        InputProps={styleInput}>

                        {ranges.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    </Grid>
                </Grid>

                <Grid item xs={6} sx={{minHeight: '40vh'}}>
                    <img src={AccountContent}/>
                </Grid>

                <Grid container xs={12}>
                    <Typography variant='h4' fontWeight={600} fontSize={40} marginTop={'2vmin'}>
                        About Yourself
                        <Divider variant='left' sx={{width:'7vw', border: '2px solid #F83E7D', opacity: 100, marginY: '2vmin'}}/>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField onChange={e => setField_7(e.target.value)} 
                        required
                        value={field_7}
                        fullWidth="50vw"
                        placeholder="Provide a brief description about yourself..."
                        style={{
                            background: '#E3E7EF',
                            borderRadius: '10px',
                        }}
                        InputProps={{
                            style: {
                                color: '#737373FA',
                                borderRadius: '10px',
                                minWidth: '20vw',
                                minHeight: '20vh',
                            }
                        }}/>
                </Grid>
                
                <Grid item container marginTop={'2vmin'} spacing={1}>
                    <Grid item xs={6}>
                        <Grid container xs={12}>
                        <Typography variant='h4' fontWeight={600} fontSize={30}>
                            Personality Traits
                            <Divider variant='left' sx={{width:'7vw', border: '2px solid #F83E7D', opacity: 100, marginY: '2vmin'}}/>
                        </Typography>
                        </Grid>

                        <Grid item xs={12}>
                        <FormGroup>
                            <Grid item container xs={12}>
                                {personalityTraits.map((name, index) => {
                                return (
                                    <FormControlLabel item control={
                                        <Checkbox onChange={()=>handleTraitOnChange(index)} sx={{'&.Mui-checked': {color: '#F83E7D'}}}/>} 
                                        label={<Typography width='8vw'>{name}</Typography>} />
                                );
                                })}
                            </Grid>
                        </FormGroup>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container xs={12}>
                        <Typography variant='h4' fontWeight={600} fontSize={30}>
                            Interests
                            <Divider variant='left' sx={{width:'7vw', border: '2px solid #F83E7D', opacity: 100, marginY: '2vmin'}}/>
                        </Typography>
                        </Grid>

                        <Grid item xs={12}>
                        <FormGroup>
                            <Grid item container xs={12}>
                                {interests.map((name, index) => {
                                return (
                                    <FormControlLabel item control={<Checkbox onChange={()=>handleTraitOnChange(index)}/>} 
                                        label={<Typography width='8vw'>{name}</Typography>} />
                                );
                                })}
                            </Grid>
                        </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Button backgroundColor='#F9568D' onClick={handleSubmit}>Submit</Button>

        </Grid>
        </Grid> 
        </>
    );
  }
  
  export default MyAccount;
  