import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { setInstituteDetails } from "./Authstate";
import axios from "axios";

function EducationLogin() {
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [error, setError] = useState("");
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/login", {
        email,
        phoneNo,
      });
      const {
        id,
        name,
        selectedOption,
        address,
        state,
        boardeducation,
        worktype,
      } = response.data;
      localStorage.setItem("instituteId", id);
      localStorage.setItem("instituteName", name);
      localStorage.setItem("instituteEmail", email);
      localStorage.setItem("institutePhoneNo", phoneNo);
      localStorage.setItem("Selected", selectedOption);

      localStorage.setItem("instituteAddress", address);
      localStorage.setItem("instituteState", state);
      localStorage.setItem("instituteBoardeducation", boardeducation);
      localStorage.setItem("instituteWorktype", worktype);
      console.log(response.data);
      alert("Login Successfull");
      navigate("/Institutehome"); // Callback function to handle successful login
    } catch (error) {
      setError("Invalid email or password"); // Set error message for invalid login
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-body-tertiary p-5">
        <div className="row">
          <div className="col-12">
            <div className="container pt-4">
              <form className="row g-3" onSubmit={handleLogin}>
                <div className="col-md-6">
                  <label
                    for="email"
                    className="form-label text-primary fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter the Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    required
                  />{" "}
                </div>
                <div className="col-md-6">
                  <label
                    for="password"
                    className="form-label text-primary fw-bold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter the Mobile Number"
                    value={phoneNo}
                    onChange={(event) => {
                      setPhoneNo(event.target.value);
                    }}
                    required
                  />
                </div>
                <p className="pt-3">
                  Don't Have an Account?
                  <Link to="/Registrationform">Sign Up here</Link>
                </p>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EducationLogin;
