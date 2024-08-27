import React, { useState, useEffect } from "react";
import TrainerNav from "./Trainernav";
import axios from "axios";

const SavedJobPosts = () => {
  const [savedJobPosts, setSavedJobPosts] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchSavedJobPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/prava/${userId}/saved-jobposts`);
        setSavedJobPosts(response.data);
      } catch (error) {
        console.error('Error fetching saved job posts:', error);
      }
    };

    if (userId) {
      fetchSavedJobPosts();
    }
  }, [userId]);

 

  return (
    <div>
      <TrainerNav/>
    <h3 className="text-center mt-3">Saved Jobs</h3>
    <div className="row">   
    {savedJobPosts.map((jobPost) => (       
         <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
         <div className="card  ms-3 mt-3 border-secondary shadow bg-body">
        <div key={jobPost.jobId}>
        <div class="d-flex justify-content-between p-2">
          <h5 className="p-2"><i class="fa-solid fa-building-columns"></i> {jobPost.postedby}</h5>
          <h6 className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Role: </b>{jobPost.role}</h6>
                  </div>
          <div class="d-flex justify-content-between p-2">
          <h6 className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Company:</b> {jobPost.company}</h6>
                 
                  <h6 className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Apply Last Date:</b> {jobPost.applyLastDate}</h6>
          </div>
         
         
          <div class="d-flex justify-content-between p-2">
          <h6 className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Location:</b> {jobPost.location}</h6>
                  <p className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Posted on:</b> {jobPost.datePosted}</p>
          </div>
          
          
         
          <div class="d-flex justify-content-between p-2">
          <h6 className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Relevant Experience:</b> {jobPost.relevantExperience} yrs</h6>
                  <h6 className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Total Experience:</b> {jobPost.totalExperience}yrs</h6>
        </div>
        <h6 className="p-3">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Desired Skill Set:</b> {jobPost.desiredSkillSet}</h6>
          
        <h6 className="p-3">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Description:</b> {jobPost.jobDescription}</h6>
        </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}

export default SavedJobPosts;
