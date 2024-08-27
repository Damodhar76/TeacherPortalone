import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Institutenavbar from "./Institutenavbar";

const JobPostList = () => {
  const [jobPosts, setJobPosts] = useState([]);

  const instituteId = localStorage.getItem("instituteId");

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9090/jobs/JobPost/${instituteId}`
        );
        setJobPosts(response.data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };
    fetchJobPosts();
  }, [instituteId]);

  return (
    <div>
      <Institutenavbar/>
      <h4 className="text-center mt-3">Job Posts</h4>
      <div className="row">
        {jobPosts.map((jobPost) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card  ms-3 mt-3  shadow bg-body">
              <div key={jobPost.jobId}>
                <h5 className="p-2 ms-2">  <i class="fa-solid fa-building-columns"></i> {jobPost.postedby}</h5>
                <div class="d-flex justify-content-between p-2 ms-2 me-2">
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b>Company:</b> {jobPost.company}
                  </p>
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                    <b>TotalExp:</b>{jobPost.totalExperience} Yrs
                  </p>

                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                  <b>RelevantExp:</b>  {jobPost.relevantExperience} Yrs
                  </p>
                </div>
                <p className="p-2 ms-2 me-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i>
                 <b>Description:</b> {jobPost.jobDescription}
                </p>
                <div class="d-flex justify-content-between p-2 ms-2 me-2">
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b>Location:</b> {jobPost.location}
                  </p>
                  <p className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Skills:</b>{jobPost.desiredSkillSet}</p>
                </div>
                <p className="p-2 ms-2 me-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i>
                 <b>Responsibilities:</b> {jobPost.responsibilities}
                </p>
                <p className="p-2 ms-2 me-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i>
                 <b>AddResponsibilities:</b> {jobPost.additionalResponsibilities}
                </p>
                <div class="d-flex justify-content-between p-2 ms-2 me-2">
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                  <b>LastDate:</b>  {jobPost.applyLastDate}
                  </p>
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b>PostedDate:</b> {jobPost.datePosted}
                  </p>
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                  <b>Role:</b>  {jobPost.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostList;
