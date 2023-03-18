
import React, { useState } from 'react'
import "./write.css";
import axios from "axios";
import Navbar from '../../components/nav/Navbar'

export default function Write() {
  const [bloglist, setBlogview] = useState([]);
  const [msg, setMessage] = useState("");
  var tempbloglist = [...bloglist]; // make a new copy of array instead of mutating the same array directly. 
  

  const [ecategory, setCategory] = useState('');
  const [eemail, setEmail] = useState('');
  const [ename, setName] = useState('');
  const [eblog, setBlog] = useState('');
  const [etitle, setTitle] = useState('');


  const handleSubmit = (evt) => {
    evt.preventDefault();

    const blogobj = {
      category: ecategory,
      title: etitle,
      name: ename,
      blog: eblog,
      email: eemail,

    }

    axios.post('http://localhost:5000/blogs/write', blogobj)
    .then(res => {
      console.log(res.data)
      setMessage('SUCCESSFULLY POSTED')
      setBlogview(tempbloglist)
        sessionStorage.setItem("write", JSON.stringify(res.data))
        
      })
      .catch(err => {
        console.log(err)
        setMessage('PROBLEM....')
    })
    setCategory('');
    setTitle('');
    setName('');
    setBlog('');
    setEmail('');

  }

  return (
    <>
      <Navbar />
      <h4 >🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</h4>

    <b style={{ color: "green" }}>{msg}</b>
      <div className="write">
        <img width={800}
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm" onSubmit={handleSubmit} >
          <table>
            <tr>
              <br></br>
              <br></br>
              <br></br>
              <th>
                Type
              </th>

              <th>
                <select value={ecategory} onChange={(e) => setCategory(e.target.value)}>
                <option >select</option>
                  <option value='travel'>Travel</option>
                  <option value='food'>Food</option>
                  <option value='cinema'>Cinema</option>
                  <option value='music'>Music</option>
                  <option value='nature'>Nature</option>
                </select>
              </th>
            </tr>
            <tr>
              <br></br>
              <br></br>
              <th>
                Title
              </th>
              <th>
                <input type='text' value={etitle} onChange={(e) => setTitle(e.target.value)} />
              </th>
            </tr>

            <tr>
              <br></br>
              <br></br>
              <th>
                Name
              </th>
              <th>
                <input type='text' value={ename} onChange={(e) => setName(e.target.value)} />
              </th>
            </tr>

            <tr>
              <br></br>
              <br></br>
              <th>
                Blog
              </th>
              <th>
                <textarea value={eblog} onChange={(e) => setBlog(e.target.value)} />
              </th>
            </tr>
            <tr>
              <br></br>
              <br></br>
              <th>
                Email
              </th>
              <th>
                <input type='text' value={eemail} onChange={(e) => setEmail(e.target.value)} />
              </th>
            </tr>

            <tr>
              <br></br>
              <br></br>
              <th>
              </th>
              <th value="UPDATED" colSpan='2' className="buttonContainer"><input type="submit" /></th>
              </tr>
          </table>
        </form>
      </div>
    </>
  );
}