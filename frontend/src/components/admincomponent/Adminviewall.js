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
                <tr key={index}>
                    <tr>{currentrow.empname}</tr>
                    <tr>{currentrow.empemail}</tr>
                    <tr>{currentrow.empmobile}</tr>
                    <tr>{currentrow.empdob}</tr>
                    <tr>{currentrow.empgender}</tr>
                    <tr>{currentrow.empcountry}</tr>
                    <tr>{currentrow.empaddress}</tr>
                </tr>
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