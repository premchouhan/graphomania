//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import "./register.css";
import React, { useState } from "react";
import Navbar from "../../components/nav/Navbar";
import axios from "axios";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Reg() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const [ename, setEmpName] = useState("");
  // const [eemail, setEmpEmail] = useState("");
  const [emobile, setEmpmobile] = useState("");
  // const [edob, setEmpDOB] = useState("");
  // const [epass, setEmpPass] = useState("");
  // const [egender, setEmpGender] = useState("");
  // const [ecountry, setEmpCountry] = useState("");
  // const [eaddress, setEmpAddress] = useState("");

  const [msg, setMessage] = useState("");
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const onsubmit = (data) => {
    //CREATE JSON AND STORE ALL USER INPUT
    console.log(data);
    //COMMUNICATE WITH BACKEND USING REST API

    const empobj = {
      empname: data.ename,
      empemail: data.eemail,
      empmobile: emobile,
      empdob: data.edob,
      emppass: data.epass,
      empgender: data.egender,
      empcountry: data.ecountry,
      empaddress: data.eaddress,
    };
    axios.post("http://localhost:5000/user/userreg", empobj).then((res) => {
      console.log(res.data);
      setMessage("REGISTRATION SUCCESSFUL");
    });
  };
  return (
    <div className="register">
      <br></br> <br></br>
      <h3>🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</h3>
      <br></br>
      <Navbar />
      <h3>REGISTRATION</h3>
      <h4 style={{ color: "brown" }}> {msg}</h4>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          className="form-control"
          type="text"
          {...register("ename", { required: true })}
          placeholder="Enter Name"
        />
        {errors.ename && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <br />
        <input
          className="form-control"
          type="email"
          {...register("eemail", {
            required: "This field is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
          placeholder="Enter Email"
        />
        {errors.eemail && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <br />
        <PhoneInput
          inputProps={{
            required: true,
          }}
          country="in"
          placeholder="Enter phone number"
          onChange={setEmpmobile}
        />
        <br />
        <br />
        <input
          className="form-control"
          type="date"
          {...register("edob", { required: true })}
          placeholder="Enter Date"
        />
        {errors.edob && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <br />
        <input
          className="form-control"
          type="password"
          {...register("epass", { required: true })}
          placeholder="Enter password"

        />
        {errors.epass && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          className="form-check-input"
          {...register("egender")}
        />
        <label>Male </label>{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          className="form-check-input"
          {...register("egender")}


        />
        <label> Female</label>
        <br />
        <select className="form-control" {...register("ecountry")}>
          <option value="India">India</option>
          <option value="Am">America</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select>
        {errors.ecountry && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <br></br>
        <label>ADDRESS: </label> <br />
        <textarea
          className="form-control"
          {...register("eaddress", { required: true })}
          placeholder="Enter Address"

        ></textarea>
        {errors.eaddress && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <br />
        <button className="btn btn-outline-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

//STEP 3 -- EXPORT IT TO USE IT
export default Reg;
