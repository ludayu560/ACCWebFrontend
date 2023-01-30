import React, { useState } from "react";
import { Grid, Typography} from "@mui/material";
import { Stack } from "@mui/system";

import LoginAisha from "../components/LoginAishaLogo";

function Login() {

    return (
        <Grid container direction="column" alignItems="center" height={'80vh'} paddingX={'10vw'} marginTop={'10vh'}>
            <LoginAisha></LoginAisha>
        </Grid>
    )
}

export default Login