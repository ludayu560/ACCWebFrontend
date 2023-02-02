import React, { useState } from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

import Page1 from "../pages/Signup1";
import Page2 from "../pages/Signup2";
import Page3 from "../pages/Signup3";

function SignupManager() {
    const [currPage, setCurrPage] = useState(1)
    const [pageValueOne, setPageValueOne] = useState()
    const [pageValueTwo, setPageValueTwo] = useState()
    const [pageValueThree, setPageValueThree] = useState()
    

    return (

        <div style={{width: '100vw', height:'100vh', background:'#000000'}}>
        <Box 
            position={'absolute'} borderRadius={'10vmin'}
            marginX={'5vw'} marginY={'5vh'} 
            width={'90vw'} height={'90vh'} 
            sx={{ backgroundColor: '#ffffff'}}>

            <Grid container>
                {currPage === 1?
                <Page1 setPage={setCurrPage} returnHook={setPageValueOne}></Page1>
                : null}
                {currPage === 2?
                <Page2 setPage={setCurrPage} returnHook={setPageValueTwo}></Page2>
                : null}
                {currPage === 3? 
                <Page3 setPage={setCurrPage} returnHook={setPageValueThree}></Page3>
                : null}
            </Grid>
        </Box>
    </div>
    )
}

export default SignupManager