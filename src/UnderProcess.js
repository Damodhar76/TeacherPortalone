import React, { useState, useEffect } from "react";
import TrainerNav from "./Trainernav";

function Process() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    // Fetch applied jobs data from the API using the userId from localStorage
    fetch(`http://localhost:9090/jobs/users/${userId}/applied`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched applied jobs:", data); // Debug log to check fetched data
        setAppliedJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching applied jobs:", error);
      });
  }, [userId]);

  return (
    <div>
      <TrainerNav />
      <h2 className="text-center mt-3">Under Process </h2>
      <div className="row bg-light">
        {appliedJobs.map((appliedJob) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card  ms-3 mt-3 border-secondary shadow bg-body">
              <div key={appliedJob.id}>
                

               
                
                <div class="d-flex justify-content-between p-2 ms-2 me-2">
                  <h5 className=" mt-2">
                  <i class="fa-solid fa-building-columns"></i> 
                   {appliedJob.jobPost.postedby}
                  </h5>
                  <span className="mt-2">
                    <p>
                      <i className="fa-solid fa-envelope text-warning"></i>{" "}
                    <b>  Role:</b>
                      {appliedJob.jobPost.role}
                    </p>
                  </span>
                </div>

              
                <div className="d-flex justify-content-between p-2 ms-2 me-2">
                  <p>
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b> Total Experience:</b> {appliedJob.jobPost.totalExperience} yrs
                  </p>
                  <p>
                    <i class="fa-solid fa-graduation-cap text-warning"></i>
                 <b>   Relevant Experience:</b>
                    {appliedJob.jobPost.relevantExperience} yrs
                  </p>
                </div>

              
                <div class="d-flex justify-content-between p-2 ms-2 me-2">
                  <p>
                    <i class="fa-solid fa-graduation-cap text-warning"></i>
                  <b>  Apply Last Date:</b> {appliedJob.jobPost.applyLastDate}
                  </p>
                  <p>
                    <i class="fa-solid fa-graduation-cap text-warning"></i>
                 <b>   Date Posted:</b> {appliedJob.jobPost.datePosted}
                  </p>
                </div>
                <div class="d-flex justify-content-between p-2 ms-2 me-2">
                  <p>
                    <i class="fa-solid fa-graduation-cap text-warning"></i>
                  <b>  Skills:</b> {appliedJob.jobPost.desiredSkillSet}
                  </p>
                  
                  <p className="p-2">
                    <i class="fa-solid fa-location-dot text-warning"></i>
                   <b> Location:</b> {appliedJob.jobPost.location}
                  </p>
                

                </div>
                <p className="p-2 ms-2 me-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i><b>Job
                  Description:</b> {appliedJob.jobPost.jobDescription}
                </p>
                <h5 class="text-success  text-center p-2">
                  {/* <i class="fa-solid fa-graduation-cap text-warning"></i> */}
                 Status: <b>{appliedJob.status} </b>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
