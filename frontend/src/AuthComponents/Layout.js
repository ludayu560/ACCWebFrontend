import React, { useEffect } from "react";
import Navbar from "../components/components/NavBar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "./actions/auth"; //checkAuthenticated,
import Mainbar from "../components/components/MainBar";
import { Route } from "react-router-dom";
import Landing from "../components/pages/Landing";
import { Box } from "@mui/system";

//checkAuthenticated,
const Layout = (props) => {
  const authenticated = true;
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);

  return (
    <div style={{overflowX: 'hidden'}}>
      {/*once authenticated use <Mainbar /> */}
      {authenticated === true ? <Mainbar /> : <Navbar />}
      <Box height="10vh" />
      {props.children}
    </div>
  );
};

//checkAuthenticated,
export default connect(null, { checkAuthenticated, load_user })(Layout);
