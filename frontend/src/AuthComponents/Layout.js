import React, { useEffect } from 'react';
import Navbar from '../components/components/NavBar';
import NavbarManager from '../components/pages/NavbarManager';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user, load_listing } from './actions/auth'; //checkAuthenticated, 
import Mainbar from '../components/components/MainBar';
import { Route } from 'react-router-dom';
import Landing from '../components/pages/Landing';
import { Stack } from '@mui/system';
import { Toolbar } from "@mui/material";

//checkAuthenticated,
const Layout = (props, user) => {
  const authenticated = true;
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);
  
  if (user) {
    props.load_listing(user.id);
  }
    return (
        <div>
            {/*once authenticated use <Mainbar /> */}
            {/* <Toolbar sx={{height: 168}}/>  */}
            <NavbarManager />
            <Stack>
                {props.children}
            </Stack>
        </div>
    );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

//checkAuthenticated, 
export default connect(mapStateToProps, { checkAuthenticated, load_user, load_listing })(Layout);
