import React, { useState } from "react";
import {FormControlLabel, Checkbox, Container, Box, Stack, Typography, Link} from "@mui/material";

import StyledTextField from "../components/StyledTextField";
import StyledButton from "../components/StyledButton";

import {ReactComponent as Login1} from '../../assets/Login1.svg';
import {ReactComponent as Logo} from '../../assets/HouseLogoPink.svg';
import {ReactComponent as LoginText1} from '../../assets/LoginText1.svg';
import {ReactComponent as LoginText2} from '../../assets/LoginText2.svg';
import {ReactComponent as AishaSignaturePink} from '../../assets/AishaSignatureWhite.svg';

function Login() {
    // const {setPage, returnHook} = props()

    const [firstName, setFirstName] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password } = formData;
    return (
        <Stack
            direction={'row'} height={'90vh'} width={'90vw'} marginY={'5vh'} marginX={'5vw'}
            borderRadius={'20px 10vmin 10vmin 20px'} sx={{background: 'white'}}>
            
            <Box position={'relative'}>
                <Login1 height={'90vh'} padding={'0px'}></Login1>

                <Stack alignItems={'center'} width={'100%'}
                    position={'absolute'} left={'0px'} top={'0px'}>
                    <Stack width={'80%'} alignItems={'center'} marginTop={'90%'} spacing={2}>
                        <LoginText1/>
                        <LoginText2/>
                    </Stack>
                    
                    <Box width={'30%'} marginTop={'80%'}>
                    <AishaSignaturePink/>
                    </Box>
                </Stack>
            </Box>

            <Container disableGutters border={'1px solid pink'}>
                <Stack alignItems="center" paddingTop={'10vh'} spacing={'3vh'}>
                    <Logo width={'10%'}></Logo>
                    <Typography variant="h4" fontWeight={700}>
                        Welcome Back!
                    </Typography>

                    <Stack spacing={'5vh'} paddingTop={'6vh'}>
                        <StyledTextField 
                           className='form-control'
                           type='email'
                           placeholder='Email*'
                           name='email'
                           value={email}
                           onCHange={e => onchange(e)}
                           required variant='empty' width='25vw'></StyledTextField>
                        <StyledTextField 
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onCHange={e => onchange(e)}
                        required
                        variant='empty' width='25vw'></StyledTextField>
                    </Stack>

                    <Stack direction={'row'} textAlign={'center'} spacing={'3vw'}>
                        {/* <FormControlLabel
                            control={<Checkbox sx={{'&.Mui-checked': {color: '#F83E7D'}}}/>} 
                            label={<Typography variant="p" fontWeight={600}>Remember Me</Typography>}/> */}

                        <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'right'}} >
                            <Link align="right" variant="p" fontWeight={600}> Forgot Password?</Link>
                        </Box>
                    </Stack>

                    <StyledButton variant='signup' text='Login' width='25vw' noArrow type='submit'></StyledButton>

                    <Typography fontWeight={700} variant="p">
                        Not registered yet? <Link> Create an Account </Link>
                    </Typography>
                </Stack>
            </Container>
        </Stack>
    )
}

export default Login