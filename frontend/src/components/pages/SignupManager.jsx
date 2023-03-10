import React, { useState } from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Page1 from "./Signup1";
import Page2 from "./Signup2";
import Page3 from "./Signup3";

import axios from "axios";
import { signup } from "../../AuthComponents/actions/auth";
import { connect } from 'react-redux';

    
function SignupManager({ signup, isAuthenticated, user}) {
    const [open, setOpen] = React.useState(false);

    const api = axios.create({
        baseURL: `http://127.0.0.1:8000/ListingAccount/`
    })

    const [currPage, setCurrPage] = useState(1)
    const [pageValueOne, setPageValueOne] = useState()
    const [pageValueTwo, setPageValueTwo] = useState()
    const [pageValueThree, setPageValueThree] = useState()

    if (currPage === 4) {
        if (pageValueOne.password === pageValueOne.passwordConfirm) {
            signup( pageValueOne.firstName + " " + pageValueOne.lastName,
            pageValueOne.email, pageValueOne.password, pageValueOne.passwordConfirm)
        }
        // setCurrPage(1)
    }

    if (user) {
        // api.post('/', {
        //     "first_name": pageValueOne.firstName,
        //     "last_name": pageValueOne.lastName,
        //     "email": pageValueOne.email,
        //     "date_of_birth": pageValueThree.dob? pageValueThree.dob : null,
        //     "location": pageValueThree.location? pageValueThree.location : null,
        //     "age_range": pageValueThree.age,
        //     "tell_us_about_yourself": "Tell us about yourself",
        //     "profile_picture": null,
        //     "banner_picture": null,
        //     "display_picture_one": null,
        //     "display_picture_two": null,
        //     "display_picture_three": null,
        //     "display_picture_four": null,
        //     "personal_traits": [],
        //     "interests": [],
        //     "favorites": [],
        //     "notifications": [],
        //     "accountEvents": [],
        //     ""
        // })
        // .then(function (response) {
        // console.log(response);
        // })
        // .catch(function (error) {
        // console.log(error);
        // })
    }

    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
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
                <Page3 setPage={setCurrPage} returnHook={setPageValueThree}/>
                : null}
            </Box>
        </Dialog>
    </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { signup })(Page1);