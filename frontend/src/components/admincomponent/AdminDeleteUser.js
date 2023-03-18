//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from '../nav/Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminDeleteUser() {

    const [msg, setMessage] = useState("");
    const [eemail, setEmpEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('http://localhost:5000/admin/deluser/' + eemail)
            .then(res => {
                console.log(res.data)
                setMessage('EMPLOYEE SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
            })

        setEmpEmail('')
    }

    return (
        <>
            <Navbar />
            <h4>🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</h4>

            <br />
            <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR DELETE</h3>
            <b style={{ color: "red" }}>{msg}</b>
            <form onSubmit={handleSubmit}>
                <input type="email" value={eemail}
                    onChange={(e) => setEmpEmail(e.target.value)}
                    placeholder="EMAIL ID"
                    required />
                <br />
                <br />
                <input type="submit" value="DELETE EMPLOYEE" className="btn btn-danger" />
            </form>
        </>)
}


//STEP 3 -- EXPORT IT TO USE IT
export default AdminDeleteUser