//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import "./login.css";
import React from "react";
import Navbar from '../../components/nav/Navbar'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Login() {
    const [useremail, setUserEmail] = useState("");
    const [userpass, setUserPass] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate()

    const executeSubmit = (evt) => {
        evt.preventDefault();

        console.log(`USER Email: ${useremail}`);
        console.log(`PASS: ${userpass}`);

        const loginobj = {
            loginemail: useremail,
            loginpass: userpass
        }

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/userlogin', loginobj)
            .then(response1 => {
                console.log(response1.data)
                sessionStorage.setItem("utype", "USER")
                //localStorage.setItem("utype", "USER")
                sessionStorage.setItem("username", response1.data[0].empname)

                navigate("/userafterlogin");
            })
            .catch(err => {
                //console.log(err)
                setMsg('INVALID UID OR PASSWORD')
            })

        setUserEmail('')
        setUserPass('')
    }

    return (
        <div className="login">
            <Navbar />
            <h3 className="loginTitle" >LOGIN</h3>
            <h4 >{msg}</h4>

            <form className="loginForm" onSubmit={executeSubmit}>

                <input className="loginInput" type='email' value={useremail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter USER ID" />
                <br /><br />
                <input className="loginInput" type='password' value={userpass}
                    onChange={(e) => setUserPass(e.target.value)}
                    placeholder="Enter PASSWORD" />
                <br /><br />
                <input className="loginButton" type='submit' />
            </form>

        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Login