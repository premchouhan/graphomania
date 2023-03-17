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
                <div align="center" >
                <table border="6" >
                <tr key={index}>
                  <div> CATEGORY   - {currentrow.category}</div>
                  <div>TITLE   - {currentrow.title}</div>
                  <div> NAME   - {currentrow.name}</div>
                  <div>BLOG    - {currentrow.blog}</div>
                  <div> EMAIL - {currentrow.email}</div>
                  <div> CreatedAt - {currentrow.createdAt}</div>

                </tr>
                </table>
                </div>
            );
        });
    }

    return (
        <div align="center">
            <Navbar />

            <h3>PUBLIC POST</h3>

                <tbody>
                    {viewBlogview()}
                </tbody>
           
        </div>
        )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Viewall