//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from '../nav/Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Home() {
    return (
        <div>
            <Navbar />
            <h1> THIS IS Home COMPONENT</h1>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Home