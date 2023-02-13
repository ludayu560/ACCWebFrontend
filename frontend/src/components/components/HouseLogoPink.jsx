import { Box } from '@mui/material';
import {ReactComponent as Logo} from '../../assets/HouseLogoPink.svg';

// renders Progressbar components for the purposes of the Signup 
function HouseLogoPink() {
    return (
        <Box position={'absolute'}>
            <Box position={'relative'} left={'10vmin'} width={'10vmin'}>
                <Logo>
                </Logo>
            </Box>
        </Box>
    )
}

export default HouseLogoPink