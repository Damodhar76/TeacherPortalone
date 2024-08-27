import React, { useState } from "react";
import TrainerNav from "./Trainernav";
import axios from "axios";

function Contactus() {
   const userfirstName = localStorage.getItem('userfirstName');
   const userEmail = localStorage.getItem('userEmail');
   const usermobileNumber = localStorage.getItem('usermobileNumber');
  const [name, setName] = useState(userfirstName);
  const [email, setEmail] = useState(userEmail);
  const [phno, setPhno] = useState(usermobileNumber);
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!/^[A-Za-z].*$/.test(msg)) {
      errors.msg = "Message should start with alphabets only";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:9090/contactTrainer/post", // Updated endpoint
          {
            name: name,
            email: email,
            phno: phno,
            msg: msg,
          }
        );
        // Handle successful response, e.g., display success message
        console.log("contactus", response.data);
        alert("Message sent successfully");
        // Reset form fields after successful submission
        // setName("");
        // setEmail("");
        // setPhno("");
        setMsg("");
      } catch (error) {
        console.error("Error", error);
        // Handle error, e.g., display error message to user
      }
    };

    }
    

  return (
    <>
      <TrainerNav />
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
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  // onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

          
              <div className="form-group p-2">
                <label htmlFor="email" className="fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

           
              <div className="form-group p-2">
                <label htmlFor="phno" className="fw-bold">
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phno"
                  className="form-control"
                  id="phno"
                  placeholder="Enter the Mobile number"
                  value={phno}
                  // onChange={(e) => setPhno(e.target.value)}
                  required
                />
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
