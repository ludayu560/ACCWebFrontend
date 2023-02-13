import { Box } from '@mui/material';
import {ReactComponent as Progress1} from '../../assets/Progress1.svg';
import {ReactComponent as Progress2} from '../../assets/Progress2.svg';
import {ReactComponent as Progress3} from '../../assets/Progress3.svg';

// renders Progressbar components for the purposes of the Signup 
function SignupProgressionIcon(props) {
    const { stage } = props
    return (
        <div>
            {stage === '1' && 
                <Box width={'90%'} marginX={'5%'}>
                    <Progress1/>
                </Box>
                }
            {stage === '2' && 
                <Box width={'90%'} marginX={'5%'}>
                    <Progress2/>
                </Box>
            }
            {stage === '3' && 
                <Box width={'90%'} marginX={'5%'}>
                    <Progress3/>
                </Box>
            }
        </div>
    )
}

export default SignupProgressionIcon