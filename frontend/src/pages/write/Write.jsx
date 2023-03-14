import { useState } from "react";
import "./write.css";
import axios from "axios";

export default function Write() {
  const [email, setEmail] = useState('');
  const [cat, setCat] = useState('');
  const [name, setName] = useState('');
  const [blog, setBlog] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const blogobj = {
      cat: cat,
      title: title,
      blog: blog,
      email: email,
      name: name
    }
    axios.post('http://localhost:5000/blogs/write', blogobj)
    .then(res => {
      console.log(res.data)
//set every variable to zero
      setBlog('');
      setEmail('');
      setCat('');
      setName('');
      setTitle('');

    })
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>Catagory</th>
            <th>
              <select>
                <option value='travel'>Travel</option>
                <option value='food'>Food</option>
                <option value='cinema'>Cinema</option>
                <option value='music'>Music</option>
                <option value='nature'>Nature</option>
              </select>
            </th>
          </tr>
          <tr>
            <th>
              Title
            </th>
            <th>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th>
              Blog
            </th>
            <th>
              <textarea value={blog} onChange={(e) => setBlog(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th>
              Email
            </th>
            <th>
              <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <th>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </th>
          </tr>
          <tr>
          <th>
              Submit
            </th>
            <th colSpan='2' className="buttonContainer"><input  className="submit" type='submit'/></th></tr>
        </table>
      </form>
    </div>
  );
}