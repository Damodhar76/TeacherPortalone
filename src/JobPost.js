import React, { useState } from "react";
import axios from "axios";
import Institutenavbar from "./Institutenavbar";

const JobPost = () => {
  const instituteName = localStorage.getItem("instituteName");
  const currentDate = new Date().toISOString().slice(0, 10);
  const [jobPost, setJobPosts] = useState({
    role: "",
    company: "",
    totalExperience: "",
    relevantExperience: "",
    location: "",
    jobDescription: "",
    desiredSkillSet: "",
    responsibilities: "",
    additionalResponsibilities: "",
    applyLastDate: "",
    datePosted: currentDate,
    postedby: instituteName,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setJobPosts((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Regular expression to match date format (YYYY-MM-DD)
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    // Regular expression to match alphabetic characters only
    const alphabeticRegex = /^[a-zA-Z\s]*$/;
    // Regular expression to match numeric characters only
    const alphanumericRegex = /^[a-zA-Z0-9, ]*$/; 

    // Check if the field is datePosted or applyLastDate
    if (["datePosted", "applyLastDate"].includes(name)) {
      // If the value matches the date format regex or is an empty string, update the state
      if (value === "" || dateFormatRegex.test(value)) {
        // If the field is applyLastDate, also check if it's later than datePosted
        if (
          name === "applyLastDate" &&
          new Date(value) <= new Date(jobPost.datePosted)
        ) {
          // If applyLastDate is earlier than or equal to datePosted, don't update state
          alert("Apply last date must be later than date posted.");
          return;
        }
        setJobPosts((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
    if (name === "location") {
      // If the field is location, validate as alphanumeric characters
      if (value === "" || alphanumericRegex.test(value)) {
        setJobPosts((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      } else {
        alert("Location must contain only alphanumeric characters.");
      }
    } else if (
      [
        "role",
        "company",
        "desiredSkillSet",
        "jobDescription",
        "responsibilities",
        "additionalResponsibilities",
      ].includes(name)
    ) {
      // If the field should undergo alphabetic character validation
      // If the value matches the alphabetic character regex or is an empty string, update the state
      if (value === "" || alphabeticRegex.test(value)) {
        setJobPosts((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (["totalExperience"].includes(name)) {
      // If the field is totalExperience, validate as numeric and within the range of 0-10 years
      const intValue = parseInt(value);
      if (!isNaN(intValue) && intValue >= 0 && intValue <= 10) {
        setJobPosts((prevData) => ({
          ...prevData,
          [name]: intValue,
        }));
      } else {
        alert(
          "Total experience must be a numeric value between 0 and 10 years."
        );
      }
    } else if (["relevantExperience"].includes(name)) {
      // If the field is relevantExperience, validate as numeric and within the range of 0-12 months
      const intValue = parseInt(value);
      if (!isNaN(intValue) && intValue >= 0 && intValue <= 12) {
        setJobPosts((prevData) => ({
          ...prevData,
          [name]: intValue,
        }));
      } else {
        alert(
          "Relevant experience must be a numeric value between 0 and 12 months."
        );
      }
    } else {
      // For other fields, directly update the state without validation
      setJobPosts((prevData) => ({
        ...prevData,
        [name]: value,
        datePosted: currentDate,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const instituteId = localStorage.getItem("instituteId");

      // Convert totalExperience and relevantExperience to numbers

      const response = await axios.post(
        `http://localhost:9090/jobs/JobPost/${instituteId}`,
        jobPost
      );
      // Handle successful response, e.g., display success message
      console.log("Job post created:", response.data);
      alert("JobPost Created Successfully");
      setJobPosts({
        role: "",
        company: "",
        totalExperience: "",
        relevantExperience: "",
        location: "",
        jobDescription: "",
        desiredSkillSet: "",
        responsibilities: "",
        additionalResponsibilities: "",
        applyLastDate: "",
        datePosted: currentDate,
        postedby: instituteName, // Preserve posted by value
      });
    } catch (error) {
      console.error("Error creating job post:", error);
      // Handle error, e.g., display error message to user
    }
  };

  return (
    <div>
      <Institutenavbar />

      <div className="bg-light">
        <h2 className="text-center mt-3">Create Job Post</h2>
        <div className="card ms-3 me-3 bg-body-secondary p-2">
          <form className="p-2" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <label
                  for="role"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Role:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Enter role here"
                  value={jobPost.role}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <label
                  for="company"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Company:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  value={jobPost.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label
                  for="total experience"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Total Experience:
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="totalExperience"
                  value={jobPost.totalExperience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <label
                  for="relevent experience"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Relevant Experience:
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="relevantExperience"
                  value={jobPost.relevantExperience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label
                  for="location"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Location:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={jobPost.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <label
                  for="desired skills"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Desired Skillset:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="desiredSkillSet"
                  value={jobPost.desiredSkillSet}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="job description"
                className="form-label text-dark-emphasis fw-bold"
              >
                Job Description:
              </label>
              <input
                type="text"
                className="form-control"
                name="jobDescription"
                value={jobPost.jobDescription}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="col-6">
                <label
                  for="responsibilities"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Responsibilities:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="responsibilities"
                  value={jobPost.responsibilities}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <label
                  for="additional responsibilities"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Additional Responsibilities:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="additionalResponsibilities"
                  value={jobPost.additionalResponsibilities}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label
                  for="apply lastdate"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Apply LastDate:
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="applyLastDate"
                  value={jobPost.applyLastDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-4">
                <label
                  for="date posted"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Date Posted:
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="datePosted"
                  value={jobPost.datePosted}
                  onChange={handleChange}
                  readOnly
                  required
                />
              </div>
              <div className="col-4">
                <label
                  for="posted by"
                  className="form-label text-dark-emphasis fw-bold"
                >
                  Posted By:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="postedby"
                  value={instituteName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <br></br>
            <center>
              <button className="btn btn-primary" type="submit">
                Create Job Post
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
