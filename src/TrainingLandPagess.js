import React, { useState, useEffect } from "react";

import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import TrainerNav from "./Trainernav";
import { getUserDetails, setJobpost } from "./Authstate";

// import "./TrinningLandpage.css";
import axios from "axios";

import JobCard from "./JobCard";

function TrinningLandpage() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);
  const user = getUserDetails();
  const userId = localStorage.getItem("userId");
  const [originalData, setOriginalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    //fetch
    fetch("http://localhost:9090/api/signup/all")
      .then((response) => response.json())
      .then((value) => {
        setOriginalData(value);
        setData(value);
      });
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  const handleSearch = () => {
    const filteredData = originalData.filter((item) => {
      const lowercaseSearchQuery = searchQuery.toLowerCase();
      return (
        item.name?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.worktype?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.address?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.role?.toLowerCase().includes(lowercaseSearchQuery)
      );
    });
    setData(filteredData);
  };
  
  
  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/jobs/jobPosts`);
        setJobPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job posts");
        setLoading(false);
      }
    };

    fetchJobPosts();
  }, []);

  //Search filter

  return (
    <div>
      <TrainerNav />
      <div className="row p-3">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control"
              style={{ width: "800px", height: "40px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for the Jobs.."
            />
            <button
              className="btn btn-warning fw-bold ms-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className="prefile-job  row fixed mt-4"
        style={{ fontFamily: "sans-serif" }}
      >
        <div
          className="  m-3  col-sm-12 col-md-6 col-lg-0 mt-3"
          style={{ fontFamily: "sans-serif" }}
        >
          <figure className="bg-body-secondary rounded d-flex justify-content-around">
            <div className="mt-5">
              <img
                class="nav-img1 nav-link disabled m-2"
                aria-disabled="true"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GVSLuEkgO8aHxzF5Zwg8SzhKBYRu0iP1CF_oPzbZR9RCalfJFpPb0xfe2tHLXZkdPbQ&usqp=CAU"
                width={80}
                alt=""
              />
            </div>
            <div className="p-2">
              <p>
                <strong>
                  Please complete your profile to get the best job for yourself!
                </strong>{" "}
              </p>
              <div className="d-flex col m-2">
                <div className="job-pre col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Job Preference
                </div>
                <div className="job-pre col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Education
                </div>
                <div className="job-pre1 col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Information
                </div>
              </div>
              <div className="d-flex col m-2">
                <div className="job-pre2 col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Work Experience
                </div>
                <div className="job-pre3 col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Professional Qualifications
                </div>
              </div>
              <div className="d-flex col m-2">
                <div className="job-pre2 col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Personal Achievement & Certifications
                </div>
                <div className="job-pre3 col-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Skills
                </div>
              </div>
              <div className="ml-10">
                <center>
                  <Link
                    to="/TrainerProfile"
                    class="btn btn-warning fw-bold m-2"
                  >
                    complete your profile
                  </Link>
                </center>
              </div>
            </div>
          </figure>
        </div>
        <div className="btns-fore  col-sm-11 col-md-5 col-lg-0 d-flex justify-content-center mt-3">
          <div>
            <div className="col m-3">
              <Link to="/SavedJobs" className="btn bg-body-secondary fs-5 p-2">
                <i class="fa-regular fa-bookmark fw-bold text-warning fs-3"></i>{" "}
                Saved Jobs
              </Link>
            </div>
            <div className="col m-3 mt-4">
              <Link
                className="btn bg-body-secondary fs-5 p-2"
                to="/Appliedjobs"
              >
                <i class="fa-regular fa-clipboard-list fw-bold fs-3 text-warning"></i>{" "}
                Applied Jobs
              </Link>
            </div>
          </div>

          <div>
            <div className="col m-3">
              <Link
                className="btn bg-body-secondary fs-5 p-2"
                to="/notification"
              >
                <i class="fa-solid fa-envelope-open fw-bold text-warning fs-3"></i>{" "}
                Notifications
              </Link>
            </div>
            <div className="col m-3 mt-4">
              <Link
                className="btn bg-body-secondary fs-5 p-2"
                to="/UnderProcess"
              >
                <i class="fa-solid fa-spinner fw-bold fs-3 text-warning"></i>{" "}
                Under Process
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* notifications and Nder */}

      <div className="container-fluid ">
        <h3 className="text-center">Featured Institutes</h3>
        <div
          // style={{ overflowY: "auto", maxHeight: "400px" }}
          className="rounded"
        >
          <div className="row mt-4">
            {data.map((list) => {
              return (
                <>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div
                      style={{
                        borderColor: "white",
                        borderRadius: "30px",
                        boxShadow: "10px",
                      }}
                      class="card bg-body-secondary  mt-3"
                    >
                      <div class="card-body">
                        <div className="d-flex justify-content-between p-2">
                          <div>
                            <p
                              style={{ color: "darkblue" }}
                              class="card-title fs-5  "
                            >
                              <i class="fa-solid fa-building-columns"></i>{" "}
                              {list.name}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 mt-2">
                          <span className="ms-2">
                            <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                            {list.address}
                          </span>
                          <span className="">
                            <i class="fa-solid fa-phone text-warning"></i>{" "}
                            {list.phoneNo}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between p-2">
                          <span className="ms-2">
                            <i class="fa-solid fa-envelope text-warning"></i>{" "}
                            {list.email}
                          </span>
                          <span className="">
                            <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                            {list.boardeducation}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span className="ms-2 ps-2 mt-2">
                            <i class="fa-solid fa-suitcase text-warning"></i>{" "}
                            {list.worktype}
                          </span>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center mt-4">Featured Jobs</h3>
        <div className="card-container">
          {jobPosts.map((jobPost) => (
            <JobCard key={jobPost.id} jobPost={jobPost} />
          ))}
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="row mt-3">
            <div className="col-12">
                <div className="d-flex justify-content-between p-2">
                    <div>
                        <img
                            src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg"
                            className="img-fluid rounded"
                            style={{ width: "80px", height: "80px" }}
                        />
                    </div>
                    <div>
                        <div className="d-flex justify-content-around mt-3">
                            <div className="m-1">
                             
                                <a href="https://www.linkedin.com/dashboard" target="_blank">
                                    <i class="fa-brands fa-linkedin-in fs-4 p-2 rounded text-white bg-primary"></i>
                                </a>
                            </div>
                            <div className="m-1">
                               
                                <a href="https://www.facebook.com/dashboard" target="_blank">
                                    <i class="fa-brands fa-facebook fs-4 p-2 text-white bg-primary rounded"></i>
                                </a>
                            </div>
                            <div className="m-1">
                           
                                <a href="https://www.instagram.com/dashboard" target="_blank">
                                    <i class="fa-brands fa-instagram fs-4 p-2 text-white bg-danger rounded"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default TrinningLandpage;
