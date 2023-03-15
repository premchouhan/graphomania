//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import Navbar from '../nav/Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminviewall() {
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser')
            .then(response => {
                console.log(response.data)
                setEmpList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewEmpList() {
        return emplist.map((currentrow, index) => {
            return (
                <div key={index}>
                    <div>{currentrow.empname}</div>
                    <div>{currentrow.empemail}</div>
                    <div>{currentrow.empmobile}</div>
                    <div>{currentrow.empdob}</div>
                    <div>{currentrow.empgender}</div>
                    <div>{currentrow.empcountry}</div>
                    <div>{currentrow.empaddress}</div>
                </div>
            );
        });
    }

    return (
        <div align="center">
            <Navbar />

            <h3>ALL EMPLOYEE DETAILS</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {viewEmpList()}
                </tbody>
            </table>
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminviewall