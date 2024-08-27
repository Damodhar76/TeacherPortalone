import React, { useState, useEffect } from "react";
import TrainerNav from "./Trainernav";

function AppliedJobs() {
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
      <TrainerNav/>
      <h3 className="text-center mt-3">Applied Jobs </h3>
      <div className="row bg-light">
        {appliedJobs.map((appliedJob) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card  ms-3 mt-3 border-secondary shadow bg-body">
              <div key={appliedJob.id}>
                {/* <p>User ID: {appliedJob.id}</p> */}
                
                <div class="d-flex justify-content-between p-2">
                  <span className="">
                    <h5>
                    <i class="fa-solid fa-building-columns"></i>
                     {appliedJob.jobPost.postedby}
                    </h5>
                  </span>
                  <span className="p-2">
                    <p>
                      <i class="fa-solid fa-envelope text-warning"></i><b> Role:</b>
                      {appliedJob.jobPost.role}
                    </p>
                  </span>
                </div>

                
                <div class="d-flex justify-content-between p-2">
                  <p>
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b> Total Experience:</b>{appliedJob.jobPost.totalExperience} yrs
                  </p>
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                    <b>Relevant Experience:</b>
                    {appliedJob.jobPost.relevantExperience} yrs
                  </p>
                </div>
                <div className="d-flex justify-content-between p-2">
                <p className="">
                  <i class="fa-solid fa-graduation-cap text-warning"></i>
                 <b> Company: </b>{appliedJob.jobPost.company}
                </p>
                <p className="p-2">
                  <i className="fa-solid fa-graduation-cap text-warning"></i>
                 <b> Desired SkillSet: </b>{appliedJob.jobPost.desiredSkillSet}
                </p>
</div>
               
                <div className="d-flex justify-content-between p-2">
                  <p>
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b> Apply Last Date:</b> {appliedJob.jobPost.applyLastDate}
                  </p>
                  <p className="p-2">
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b> Date Posted: </b>{appliedJob.jobPost.datePosted}
                  </p>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <p>
                    <i className="fa-solid fa-graduation-cap text-warning"></i>
                   <b> Description :</b> {appliedJob.jobPost.jobDescription}
                  </p>
                  {/* <p class="text-success">
                      
                      <i class="fa-solid fa-graduation-cap text-warning"></i>
                      Status: {appliedJob.status}
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
