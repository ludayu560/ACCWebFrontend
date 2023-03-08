import axios from "axios";
import Navbar from "../components/NavBar";
import Mainbar from "../components/MainBar";
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Toolbar } from "@mui/material";
const NavbarManager = ({isAuthenticated, user}) => {
    const [pageNavigate, setPageNavigate] = useState(false);
    // isAuthenticated ? setPageNavigate(true) : setPageNavigate(false)
    
    return (
        <div>
            {isAuthenticated ? 
            <>
                <Toolbar sx={{height: 168}}/>
                <Mainbar setNav={setPageNavigate}/>
            </>
            : 
            <>
                <Toolbar sx={{height: 168}}/>
                <Navbar setNav={setPageNavigate}/>
            </>}
                        {/* {isAuthenticated ? <Toolbar height='168px'><Mainbar nav={setPageNavigate}></Mainbar> </Toolbar>
            : <Toolbar height='168px'><Navbar nav={setPageNavigate}></Navbar></Toolbar>} */}
        </div>
        )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(NavbarManager);