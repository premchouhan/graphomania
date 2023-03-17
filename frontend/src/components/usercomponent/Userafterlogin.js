//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from "../nav/Navbar"

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Userafterlogin() {
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

//STEP 3 -- EXPORT IT TO USE IT
export default Userafterlogin