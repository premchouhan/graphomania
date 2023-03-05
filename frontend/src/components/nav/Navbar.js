//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";

import { Link } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Navbar() {
    let usertype = sessionStorage.getItem('utype')
    // let usertype = localStorage.getItem('utype')
    let username = sessionStorage.getItem('username')

    if (usertype === 'ADMIN') {
        return (
            <>
                <nav>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/adminafterlogin">ADMIN HOME |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/adminsearchuser">SEARCH USER |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}}to="/adminviewall">VIEW ALL |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}}to="#">DEL |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}}to="/adminlogout">LOGOUT</Link>
                </nav>
                <hr />
            </>
        )
    }
    else if (usertype === 'USER') {
        return (
            <>
                <nav>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="#">USER HOME |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}}to="#">PROFILE UPDATE |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/write">WRITE |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}}to="/userlogout">LOGOUT</Link>
                </nav>
                <hr />
                <h3 style={{ color: 'green' }}>WELCOME {username}</h3>
            </>
        )
    }
    else {
        return (
            <>
                <nav>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/">HOME |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/userreg">REG |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/userlogin">LOGIN |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/contactus">CONTACT US |</Link>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/adminlogin">ADMIN LOGIN</Link>
                </nav>
                <hr />
            </>
        )
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default Navbar