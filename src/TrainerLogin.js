import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { setUserDetails } from "./Authstate";
import Navbar from "./Navbar";

function TrainerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Your conditional fetching logic based on user input
    if (email !== "" && password !== "") {
      fetch("http://localhost:9090/prava/all")
        .then((response) => response.json())
        .then((coursedata) => {
          console.log("Fetched data:", coursedata); // Debug log to check fetched data
          // Your logic to check if login is successful
          const loggedInUser = coursedata.find(
            (user) => user.email === email && user.password === password
          );
          console.log("Logged in user:", loggedInUser); // Debug log to check logged in user
          if (loggedInUser) {
            setUserDetails(loggedInUser);
            console.log(loggedInUser);
            localStorage.setItem("userId", loggedInUser.userId);
            localStorage.setItem("userEmail", loggedInUser.email);
            localStorage.setItem("userfirstName", loggedInUser.firstName);
            localStorage.setItem("usermobileNumber", loggedInUser.mobileNumber);
            alert("Login successful");
            navigate("/Trainerhome");
          } else {
            // Handle unsuccessful login
            alert("Invalid email or password");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle error fetching data
        });
    }
  }, [email, password, navigate]);
  function checkLogin(enteredEmail, enteredPassword) {
    // Your logic to check if the entered email and password match the data from the API
    // Example: (Replace with your actual logic)
    return (user) =>
      user.email === enteredEmail && user.password === enteredPassword;
  }

  function submit() {
    const inputEmail = document.getElementById("exampleInputEmail1").value;
    const inputPassword = document.getElementById(
      "exampleInputPassword1"
    ).value;
    setEmail(inputEmail);
    setPassword(inputPassword);
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-body-tertiary p-5">
        <div className="row">
          <div className="col-12">
            <div className="container pt-4 pb-2 bg-body-secondary rounded">
              <form className="row g-3">
                <div className="col-12">
                  <label
                    for="email"
                    className="form-label text-primary fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter the Mail Id"
                    required
                  />
                </div>
                <div className="col-12">
                  <label
                    for="password"
                    className="form-label text-primary fw-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="exampleInputPassword1"
                    className="form-control"
                    placeholder="Enter the password"
                    required
                  />
                </div>
                <span>
                  Forgot password?<Link to="/forgotpassword">click here</Link>
                </span>
                <p className="pt-3">
                  Don't Have an Account?
                  <Link to="/Registration">Sign Up here</Link>
                </p>
                <div className="col-12">
                  <button
                    type="button"
                    onClick={submit}
                    className="btn btn-primary"
                  >
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

export default TrainerLogin;
