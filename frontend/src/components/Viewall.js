//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import Navbar from '../components/nav/Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Viewall() {
    const [bloglist, setBlogview] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs/viewpost')
            .then(response => {
                console.log(response.data)
                setBlogview(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewBlogview() {
        return bloglist.map((currentrow, index) => {
            return (

                <tr key={index}>
                    <td>{currentrow.category}</td>
                    <td>{currentrow.title}</td>
                    <td>{currentrow.name}</td>
                    <td>{currentrow.blog}</td>
                    <td>{currentrow.email}</td>

                </tr>

            );
        });
    }

    return (
        <div align="center">
            <Navbar />

            <h3>ALL POST</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th> Category   |</th>
                        <th>Title   |</th>
                        <th> Name   |</th>
                        <th>Blog    |</th>
                        <th> Email</th>
                    </tr>
                </thead>

                <tbody>
                    {viewBlogview()}
                </tbody>
            </table>
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default Viewall