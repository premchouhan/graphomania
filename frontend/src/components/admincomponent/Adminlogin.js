import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../nav/Navbar'
import "./alogin.css"
//STEP 1 for binding data
import { useState } from 'react';

function Adminlogin() {
    //STEP 2 CREATE VARIABLE
    const [adminid, setAdminId] = useState("");
    const [adminpass, setAdminPass] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate()

    //STEP 5
    const executeSubmit = (evt) => {
        evt.preventDefault();

        console.log(`ADMIN USER ID: ${adminid}`);
        console.log(`PASS: ${adminpass}`);

        if (adminid === 'admin' && adminpass === 'pass') {
            console.log('VALID')
            sessionStorage.setItem("utype", "ADMIN")
            //localStorage.setItem("utype", "ADMIN")
            navigate("/adminafterlogin");
        }
        else {
            setMsg('INVALID UID OR PASSWORD')
            setAdminId('')
            setAdminPass('')
        }
    }

    return (
        <div className="alogin">
            <Navbar />
            <h3 className="aloginTitle">ADMIN LOGIN</h3>
            <h4 >{msg}</h4>

            {/* STEP 4 - AFTER CLICK LOGIN BUTTON */}
            <form className="aloginForm" onSubmit={executeSubmit}>
                {/* STEP 3 ADD VALUE={} & OnCHANGE={} */}
                <input className="aloginInput" type='text' value={adminid}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="Enter USER ID" />
                <br /><br />
                <input className="aloginInput" type='password' value={adminpass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    placeholder="Enter PASSWORD" />
                <br /><br />
                <input className="aloginButton" type='submit' />
            </form>
        </div>
    )
}


export default Adminlogin