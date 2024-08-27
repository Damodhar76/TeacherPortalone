import React, { useState, useEffect } from "react";
import axios from "axios";
// import SelectCandidate from "./SelectCandidate";
// import ShortlistButton from "./ShortlistButton";
// import ScheduleInterviewButton from "./ScheduleInterviewButton";
import Institutenavbar from "./Institutenavbar";
import ShortlistCandidate from "./ShortlistCandidate";

function CandidatesApplied({ appliedJobId }) {
  const [instituteId, setInstituteId] = useState(
    () => localStorage.getItem("instituteId") || ""
  );
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [selectedCandidate, setSelectedCandidate] = useState(null);
  // const [scheduledTime, setScheduledTime] = useState("");

  useEffect(() => {
    if (!instituteId) {
      console.error("Institute ID not provided");
      // Optionally, you can return here or perform some other action
      return;
    }

    fetchAppliedJobsForInstitute(instituteId);
  }, [instituteId]);

  const fetchAppliedJobsForInstitute = async (instituteId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9090/api/applied-jobs/${instituteId}/applied-jobs`
      );
      console.log("Fetched applied jobs for institute:", response.data);
      setAppliedJobs(response.data);
    } catch (error) {
      console.error("Error fetching applied jobs for institute:", error);
    } finally {
      setLoading(false);
    }
  };

  // const selectCandidate = async (jobId) => {
  //   // Accept the job ID as a parameter
  //   try {
  //     await axios.post(
  //       `http://localhost:9090/api/applied-jobs/${jobId}/select`
  //     );
  //     console.log("Candidate selected successfully");
  //     alert("Candidate Selected Successfully");
  //     setSelectedCandidate(jobId);
  //   } catch (error) {
  //     console.error("Failed to select candidate:", error);
  //   }
  // };

  const handleInputChange = (event) => {
    setInstituteId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("instituteId", instituteId);
  };

  if (!instituteId) {
    return (
      <div>
        <p>Please provide the Institute ID to view applied jobs:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={instituteId} onChange={handleInputChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }

  // const scheduleInterviewForJob = async (appliedJobId, scheduledTime) => {
  //   try {
  //     await axios.post(
  //       `http://localhost:9090/interviews/schedule/${appliedJobId}`,
  //       { scheduledTime }
  //     );
  //     console.log("Interview scheduled successfully");
  //     // You can add any success handling here if needed
  //   } catch (error) {
  //     console.error("Error scheduling interview:", error);
  //     // You can handle errors here if needed
  //   }
  // };

  return (
    
    
    <div>
      <Institutenavbar/>
      <h2 className="text-center text-success mt-3">
       Applied Candidates 
        
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {appliedJobs.map((appliedJob) => (
            <div key={appliedJob.id}>
             
             <div
                  style={{ borderRadius: "30px", borderColor: "green" }}
                  className="card p-4 bg-body mt-4 mb-3 ms-5 me-5"
                >
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <h6>
                      <i class="fa-solid fa-envelope text-warning"></i> First
                      Name: {appliedJob.signUpEntity.firstName}
                    </h6>
                    <h6>
                      <i class="fa-solid fa-envelope text-warning"></i> Last
                      Name: {appliedJob.signUpEntity.lastName}
                    </h6>
                  </div>
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <h6>
                      <i class="fa-solid fa-envelope text-warning"></i> Email:{" "}
                      {appliedJob.signUpEntity.email}
                    </h6>
                    <h6>
                      <i class="fa-solid fa-envelope text-warning"></i> State:{" "}
                      {appliedJob.signUpEntity.state}
                    </h6>
                    <h6>
                      <i class="fa-solid fa-envelope text-warning"></i> Country:{" "}
                      {appliedJob.signUpEntity.country}
                    </h6>
                  </div>
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <h6>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Address: {appliedJob.signUpEntity.address}
                    </h6>
                    <h6>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Date Of Birth: {appliedJob.signUpEntity.dateofbirth}
                    </h6>
                    <h6>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Professional: {appliedJob.signUpEntity.professional}
                    </h6>
                  </div>
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <h6>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Current Salary: {appliedJob.signUpEntity.currentSalary1}
                    </h6>
                    <h6>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Specialization: {appliedJob.signUpEntity.specialization}
                    </h6>
                  </div>
                </div>
                <h4 class="text-center">Job Details</h4>
                <div
                  style={{ borderRadius: "30px", borderColor: "green" }}
                  className="card p-4 bg-body mt-4 mb-3 ms-5 me-5"
                >
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Company: {appliedJob.jobPost.company}
                    </p>
                    <p>
                      {" "}
                      <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                      Location: {appliedJob.jobPost.location}
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Role: {appliedJob.jobPost.role}
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>
                      Apply Last Date: {appliedJob.jobPost.applyLastDate}
                    </p>
                  </div>

                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Total Experience: {appliedJob.jobPost.totalExperience}yrs
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Relevant Experience:{" "}
                      {appliedJob.jobPost.relevantExperience}yrs
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Date Posted: {appliedJob.jobPost.datePosted}
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Posted By: {appliedJob.jobPost.postedby}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Responsibilities: {appliedJob.jobPost.responsibilities}
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Additional Responsibilities:{" "}
                      {appliedJob.jobPost.additionalResponsibilities}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between p-2 ms-5 me-5">
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      Job Description: {appliedJob.jobPost.jobDescription}
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-graduation-cap text-warning"></i>
                      Desired SkillSet: {appliedJob.jobPost.desiredSkillSet}
                    </p>
                    <ShortlistCandidate appliedJobId={appliedJob.id} />
                  </div>
                </div>
                <center>
                <div className="p-2">
                  <div className="row">
                  {/* <div className="col-4">
                {selectedCandidate === appliedJob.id ? (
                  <p></p>
                ) : (
                  <button className="btn btn-primary"
                    onClick={() => selectCandidate(appliedJob.id)}
                    type="button"
                  >
                    Select
                  </button>
                )}
                </div> */}
                {/* <div className="col-2 ">
                <ShortlistButton  appliedJobId={appliedJob.id} />
                </div> */}
                </div>
                <br></br>
                {/* <button type="submit">Invite</button> */}
                {/* <ScheduleInterviewButton
                  appliedJobId={appliedJob.id}
                  scheduleInterviewForJob={scheduleInterviewForJob}
                /> */}
                </div>
                </center>
                <br></br>
              </div>

              
              
            
          ))}
        </div>
        
      )}
      
    </div>
    
  );
}

export default CandidatesApplied;
