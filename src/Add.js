import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "./Authstate";

export default function Add() {
  const user = getUserDetails();
  const [inputData, setInputData] = useState({
    email: "",
    mobileNumber: "",
    language1: "",
    language2: "",
    language3: "",
    subject1: "",
    subject2: "",
    subject3: "",
    proficiency: "",
    professional: "",
    currentSalary1: "",
    statement: "",
    description: "",
    certifications: "",
    selectedOption: "",
    selectOption: "",
    specialization: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!user || !user.userId) {
      console.error("User details not available");
      return;
    }

    axios
      .put(`http://localhost:9090/prava/user/${user.userId}`, inputData)
      .then((res) => {
        console.log(res);
        alert("Profile updated successfully");
        navigate("/Profile");
      })
      .catch((err) => {
        console.error(err);
        alert("Error occurred while updating profile. Please try again.");
      });
  }

  return (
    <div className="p-3 mt-3">
      <div className="d-flex container-fluid border bg-light p-2">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">New Email:</label>
            <input
              type="email"
              name="email"
              value={inputData.email}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              required
            />
            <label htmlFor="mobileNumber">New Phone Number:</label>
            <input
              type="number"
              name="mobileNumber"
              value={inputData.mobileNumber}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, mobileNumber: e.target.value })
              }
              required
            />
            <label htmlFor="language1">Language 1:</label>
            <input
              type="text"
              name="language1"
              value={inputData.language1}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, language1: e.target.value })
              }
              required
            />
            {/* Add other input fields similarly */}
          </div>
          <button type="submit" className="btn btn-info mt-3 ms-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
