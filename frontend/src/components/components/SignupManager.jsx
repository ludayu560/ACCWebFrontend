import React, { useState } from "react";

import Page1 from "../pages/Signup1";
import Page2 from "../pages/Signup2";
import Page3 from "../pages/Signup3";

function SignupManager() {
    const [currPage, setCurrPage] = useState(1)
    const [pageValueOne, setPageValueOne] = useState({})
    
    console.log(currPage, pageValueOne)

    return (
        <div>
            {currPage === 1? 
            <Page1 setPage={setCurrPage} returnHook={setPageValueOne}></Page1>
            : null}
            {currPage === 2? 
            <Page2></Page2>
            : null}
            {currPage === 3? 
            <Page3></Page3>
            : null}
        </div>
    )
}

export default SignupManager