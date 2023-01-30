import { Grid } from '@mui/material';
import {ReactComponent as Register1} from '../../assets/Register1.svg';
import {ReactComponent as Register2} from '../../assets/Register2.svg';
import {ReactComponent as Register3} from '../../assets/Register3.svg';

function SignupAisha() {


    return(
        <Grid xs={4} item container direction="column" alignItems="center" justifyContent="center"
            backgroundColor='#F83E7D' height={'90vh'} style={{borderTopLeftRadius: "10vmin", borderBottomLeftRadius: "10vmin"}}>
                <Grid item> <Register1/> </Grid>
                <Grid item marginTop={3}> <Register3/> </Grid>
                <Grid item marginTop={3}> <Register2/> </Grid>
        </Grid>

    )
}

export default SignupAisha