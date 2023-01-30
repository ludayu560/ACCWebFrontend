import { Grid } from '@mui/material';
import {ReactComponent as Login1} from '../../assets/Login1.svg';

function LoginAisha() {


    return(
        <Grid xs={4} item container direction="column" alignItems="center" justifyContent="center"
            backgroundColor='#F83E7D' height={'90vh'} style={{borderTopLeftRadius: "10vmin", borderBottomLeftRadius: "10vmin"}}>
                <Grid item> <Login1/> </Grid>
        </Grid>

    )
}

export default LoginAisha