//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from '../nav/Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminafterlogin() {
    let usertype = sessionStorage.getItem('utype')
    //let usertype = localStorage.getItem('utype')

    if (usertype == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <div>
                <Navbar />
                <>
      {/* <Navbar /> */}
      
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Your Story Your Words</span>
          <span className="headerTitleLg">🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</span>
        </div>
      </div>
    </>
            </div>
        )
    }


}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminafterlogin