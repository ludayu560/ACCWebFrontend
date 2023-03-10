import React, { useState } from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Page1 from "./Signup1";
import Page2 from "./Signup2";
import Page3 from "./Signup3";
    
export default function SignupManager() {
    const [open, setOpen] = useState(false);


    const [currPage, setCurrPage] = useState(1)
    const [pageValueOne, setPageValueOne] = useState()
    const [pageValueTwo, setPageValueTwo] = useState()

    if (currPage === 4) {
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setCurrPage(1)
    };

    return (
    <div>
        <Button onClick={handleClickOpen} color="inherit" size="large" sx={{ color: "#F83E7D", background: "#F83E7D4A" }}>
            Get Started 
        </Button>
        <Dialog onClose={handleClose} open={open}
            PaperProps={{sx: {minWidth: "80vw", minHeight: "90vh", borderRadius: "100px"}}}>
            <Box>
                {currPage === 1?
                <Page1 setPage={setCurrPage} returnHook={setPageValueOne}/>
                : null}
                {currPage === 2?
                <Page2 setPage={setCurrPage} returnHook={setPageValueTwo}/>
                : null}
                {currPage === 3? 
                <Page3 setPage={setCurrPage} closePage={setOpen} pageValueOne={pageValueOne} pageValueTwo={pageValueTwo}/>
                : null}
            </Box>
        </Dialog>
    </div>
    );
}