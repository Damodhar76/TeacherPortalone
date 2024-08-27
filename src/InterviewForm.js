import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function InterviewForm() {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    datetime: "",
    format: "",
    instructions: "",
    comments: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9090/prava/user/${userId}`
      );
      const userData = response.data;
      setFormData({
        ...formData,
        userId: userData.userId,
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phoneNumber: userData.mobileNumber || "",
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/interview/schedule`,
        formData
      );
      console.log(response.data);
      alert("Interview scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling interview:", error);
      alert("An error occurred while scheduling interview.");
    }
  };

  return (
    <div className="container">
      <h2 class="text-center text-danger mt-2">Interview Scheduling</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName text-secondary ">
              <b>First Name: </b>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control text-primary border-primary"
              required
            />
          </div>
          <br></br>
          <div className="col-md-6">
            <label htmlFor="firstName text-secondary ">
              <b>Last Name: </b>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control text-primary border-primary"
              required
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName text-secondary ">
              <b>Email: </b>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control text-primary border-primary"
              required
            />
          </div>
          <br></br>
          <div className="col-md-6">
            <label htmlFor="firstName text-secondary ">
              <b>Phone Number: </b>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{10}"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control text-primary border-primary"
              required
            />
          </div>
        </div>
        <br></br>

        <label htmlFor="firstName text-secondary ">
          <b>Date & Time: </b>
        </label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          className="form-control text-primary border-primary"
          required
        />
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName text-secondary ">
              <b>Location : </b>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-control text-primary border-primary"
              required
            />
          </div>
          <br></br>
          <div className="col-md-6">
            <label htmlFor="firstName text-secondary ">
              <b>Interview Format: </b>
            </label>
            <select
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="form-control text-primary border-primary"
              required
            >
              <option value="">Select Format</option>
              <option value="in-person">In-Person</option>
              <option value="phone">Phone</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>
        <br></br>
        <label htmlFor="firstName text-secondary ">
          <b>Instructions : </b>
        </label>
        <textarea
          id="instructions"
          name="instructions"
          rows="4"
          value={formData.instructions}
          onChange={handleChange}
          className="form-control text-primary border-primary"
        ></textarea>
        <br></br>
        <label htmlFor="firstName text-secondary ">
          <b>Additional Comments: </b>
        </label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
          className="form-control text-primary border-primary"
        ></textarea>

        <button type="submit" className="btn btn-primary text-center mt-3">
          Schedule Interview
        </button>
      </form>
    </div>
  );
}

export default InterviewForm;
