//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import "./register.css"
import React, { useState } from "react";
import Navbar from '../../components/nav/Navbar'
import axios from 'axios';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Reg() {
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        //CREATE JSON AND STORE ALL USER INPUT
        const empobj = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress
        }

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/userreg', empobj)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setEmpName('')
                setEmpEmail('')
                setEmpmobile('')
                setEmpDOB('')
                setEmpPass('')
                setEmpGender('')
                setEmpCountry('')
                setEmpAddress('')
            });
    }
    return (
        <div className="register">
            <Navbar />
            <br />
            <h3><span className="registerTitle">REGISTRATION</span></h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input className="registerInput" type="text" value={ename}
                    onChange={(e) => setEmpName(e.target.value)} placeholder="Enter Name"
                    required />
                <br /><br />

                <input className="registerInput" type="email" value={eemail}
                    onChange={(e) => setEmpEmail(e.target.value)} placeholder="Enter Email"
                    required />
                <br /><br />

                <input className="registerInput" type="number" value={emobile}
                    onChange={(e) => setEmpmobile(e.target.value)} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <input className="registerInput" type="date" value={edob}
                    onChange={(e) => setEmpDOB(e.target.value)} />
                <br /><br />

                <input className="registerInput" type="password" value={epass}
                    onChange={(e) => setEmpPass(e.target.value)} placeholder="Enter Password"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={egender === 'MALE'}
                    onChange={(e) => setEmpGender(e.target.value)} />
                <label>Male </label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={(e) => setEmpGender(e.target.value)} />
                <label> Female</label>
                <br /><br />

                <select className="registerInput" value={ecountry} onChange={(e) => setEmpCountry(e.target.value)}>
                    <option value="AF">Afghanistan</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea className="registerInput" value={eaddress}
                    onChange={(e) => setEmpAddress(e.target.value)} rows="3" >
                </textarea>
                <br /><br />

                <input className="registerButton" type="submit" value="REGISTER" />

            </form>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Reg