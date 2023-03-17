//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import Navbar from '../nav/Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminManagePost() {
    const [bloglist, setBlogview] = useState([]);
    const [msg, setMessage] = useState("");
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
                         <button onClick={() => removeRow(index)}>Delete</button>
                    </table>
                </div>
            );
        });
    }
 function removeRow(index) {
        var tempbloglist = [...bloglist]; // make a new copy of array instead of mutating the same array directly. 
        let removerow = tempbloglist.splice(index, 1);
        console.log(removerow[0].empemail)

        axios.delete('http://localhost:5000/blogs/delpost/' + removerow[0].email)
            .then(res => {
                console.log(res.data)
                setMessage('SUCCESSFULLY DELETED')
                setBlogview(tempbloglist)
            })
            .catch(err => {
                console.log(err)
                setMessage('PROBLEM....')
            })
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
export default AdminManagePost