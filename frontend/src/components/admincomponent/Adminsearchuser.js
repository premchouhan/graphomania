//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from '../nav/Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminsearchuser() {

    const [eemail, setEmpEmail] = useState("");
    const [msg, setMessage] = useState("");
    const [emplist, setEmpList] = useState([]);
    const [status, setStatus] = useState(false);

    function viewEmpList() {
        return emplist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.empname}</td>
                    <td>{currentrow.empemail}</td>
                    <td>{currentrow.empmobile}</td>
                    <td>{currentrow.empdob}</td>
                    <td>{currentrow.empgender}</td>
                    <td>{currentrow.empcountry}</td>
                    <td>{currentrow.empaddress}</td>
                </tr>
            );
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:5000/admin/searchuser/' + eemail)
            .then(res => {
                console.log(res.data)
                setEmpList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
                setStatus(false)
            })

        setEmpEmail('')
    }

    if (status === false) {
        return (
            <>
                <Navbar />
                <h4 >🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</h4>

                {/* <div>
                <img height="45" src="https://app.logo.com/view/logo_cf0cdc72-b45e-4f8b-999f-37706a9171cc" />
      </div> */}
                <br />
                <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={eemail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH EMPLOYEE" className="btn btn-success" />
                </form>
            </>)
    }
    else {
        return (
            <>
                <Navbar />
                <h1 >🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</h1>

                <br />
                <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={eemail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH EMPLOYEE" className="btn btn-success" />
                </form>
                <br />
                <div>

                    <h3 style={{ color: 'blue' }}>ALL EMPLOYEE DETAILS</h3>

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
                </div>
            </>)
    }

}


//STEP 3 -- EXPORT IT TO USE IT
export default Adminsearchuser