import React, { useEffect } from 'react';
import Navbar from '../components/components/NavBar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from './actions/auth'; //checkAuthenticated, 
//checkAuthenticated, 
const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, []);

    return (
        <div>
            <Navbar />
            { props.children}
        </div>
    );
};

//checkAuthenticated, 
export default connect(null, {checkAuthenticated, load_user })(Layout);
