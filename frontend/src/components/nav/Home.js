//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from '../nav/Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Home() {
    return (
        <div>
            <Navbar />
            <div>
          <span className="headerTitleLg">🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</span>
      </div>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Home