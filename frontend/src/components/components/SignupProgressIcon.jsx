import { SvgIcon } from '@mui/material';
import {ReactComponent as Progress1} from '../../assets/Progress1.svg';
import {ReactComponent as Progress2} from '../../assets/Progress2.svg';
import {ReactComponent as Progress3} from '../../assets/Progress3.svg';

// renders Progressbar components for the purposes of the Signup 
function SignupProgressionIcon(props) {
    const { stage } = props
    return (
        <div>
            {stage === '1' && <Progress1/>}
            {stage === '2' && <Progress2/>}
            {stage === '3' && <Progress3/>} 
        </div>
    )
}

export default SignupProgressionIcon