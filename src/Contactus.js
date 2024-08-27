import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;


    if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = "Name should contain only alphabets";
      isValid = false;
    }

 
    if (!/^[A-Za-z\s]\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

   
    if (!/^[6-9]\d{9}$/.test(phno)) {
      errors.phno = "Invalid phone number";
      isValid = false;
    }

    if (!/^[A-Za-z].*$/.test(msg)) {
      errors.msg = "Message should start with alphabets only";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:9090/contactUs/sendfeedback",
          {
            name: name,
            email: email,
            phno: phno,
            msg: msg,
          }
        );
        console.log("contactus", response.data);
        alert("Message sent successfully");
        setName("");
        setEmail("");
        setPhno("");
        setMsg("");
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="container bg-body-secondary mt-5 pb-2 rounded">
          <div className="row">
            <div className="col align-self-center">
              <h1 className="text-center">Send us a message</h1>

              <div className="form-group p-2">
                <label htmlFor="name" className="fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="form-group p-2">
                <label htmlFor="email" className="fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group p-2">
                <label htmlFor="phno" className="fw-bold">
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phno"
                  className={`form-control ${
                    errors.phno ? "is-invalid" : ""
                  }`}
                  id="phno"
                  placeholder="Enter the Mobile number"
                  value={phno}
                  onChange={(e) => setPhno(e.target.value)}
                  required
                />
                {errors.phno && (
                  <div className="invalid-feedback">{errors.phno}</div>
                )}
              </div>

              <div className="form-group p-2">
                <label htmlFor="msg" className="fw-bold">
                  Message
                </label>
                <textarea
                  className={`form-control ${
                    errors.msg ? "is-invalid" : ""
                  }`}
                  id="msg"
                  rows="5"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                ></textarea>
                {errors.msg && (
                  <div className="invalid-feedback">{errors.msg}</div>
                )}
              </div>

              <div className="mx-auto text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary ps-4 pe-4 mt-2 text-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contactus;
