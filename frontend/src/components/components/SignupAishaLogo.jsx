import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ReactComponent as Register1} from '../../assets/HouseLogoWhite.svg';
import {ReactComponent as Register2} from '../../assets/Register2.svg';
import {ReactComponent as Register3} from '../../assets/Register3.svg';
import {ReactComponent as Signature} from '../../assets/AishaSignatureWhite.svg';


function SignupAisha() {
    return(
        <Grid item xs={4}alignItems="center" justifyContent="center" height={'90vh'} backgroundColor='#F83E7D'
            style={{borderTopLeftRadius: "10vmin", borderBottomLeftRadius: "10vmin"}}>
            <Box width={'100%'}>
                <Box width={'40%'} marginX={'30%'} marginTop={'20vh'}>
                    <Register1/> 
                </Box>
                <Box width={'60%'} marginX={'20%'} marginY={'3vh'}>
                    <Register3/> 
                </Box>
                <Box width={'60%'} marginX={'20%'}>
                    <Register2/> 
                </Box>
                <Box width={'20%'} marginX={'40%'} marginTop={'30vh'}>
                    <Signature/> 
                </Box>
            </Box>
        </Grid>
    )
}

export default SignupAisha