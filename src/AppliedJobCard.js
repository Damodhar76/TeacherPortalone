import React from "react";

const AppliedJobCard = ({ appliedJob, handleInterviewClick, handleCandidateSelection }) => {
  return (
    <div className="p-3">
      <div className="card bg-body-secondary p-4">
        {/* Render applied job details */}
        <h4 className="text-center">Applied Job Details</h4>
        <div style={{ borderRadius: "30px", borderColor: "green" }} className="card p-4 bg-body mt-4 mb-3 ms-5 me-5">
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Company: {appliedJob.jobPost.company}
            </p>
            <p>
              <i className="fa-solid fa-location-dot text-warning"></i> Location: {appliedJob.jobPost.location}
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Role: {appliedJob.jobPost.role}
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Apply Last Date: {appliedJob.jobPost.applyLastDate}
            </p>
          </div>
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Total Experience: {appliedJob.jobPost.totalExperience} yrs
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Relevant Experience: {appliedJob.jobPost.relevantExperience} yrs
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Date Posted: {appliedJob.jobPost.datePosted}
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Posted By: {appliedJob.jobPost.postedby}
            </p>
          </div>
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Responsibilities: {appliedJob.jobPost.responsibilities}
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Additional Responsibilities: {appliedJob.jobPost.additionalResponsibilities}
            </p>
          </div>
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Job Description: {appliedJob.jobPost.jobDescription}
            </p>
            <p>
              <i className="fa-solid fa-graduation-cap text-warning"></i> Desired SkillSet: {appliedJob.jobPost.desiredSkillSet}
            </p>
          </div>
        </div>
        <h4 className="text-center">User Details</h4>
        <div style={{ borderRadius: "30px", borderColor: "green" }} className="card p-4 bg-body mt-4 mb-3 ms-5 me-5">
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <h6><i className="fa-solid fa-envelope text-warning"></i> First Name: {appliedJob.signUpEntity.firstName}</h6>
            <h6><i className="fa-solid fa-envelope text-warning"></i> Last Name: {appliedJob.signUpEntity.lastName}</h6>
          </div>
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <h6><i className="fa-solid fa-envelope text-warning"></i> Email: {appliedJob.signUpEntity.email}</h6>
            <h6><i className="fa-solid fa-envelope text-warning"></i> State: {appliedJob.signUpEntity.state}</h6>
            <h6><i className="fa-solid fa-envelope text-warning"></i> Country: {appliedJob.signUpEntity.country}</h6>
          </div>
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <h6><i className="fa-solid fa-graduation-cap text-warning"></i> Address: {appliedJob.signUpEntity.address}</h6>
            <h6><i className="fa-solid fa-graduation-cap text-warning"></i> Date Of Birth: {appliedJob.signUpEntity.dateofbirth}</h6>
            <h6><i className="fa-solid fa-graduation-cap text-warning"></i> Professional: {appliedJob.signUpEntity.professional}</h6>
          </div>
          <div className="d-flex justify-content-between p-2 ms-5 me-5">
            <h6><i className="fa-solid fa-graduation-cap text-warning"></i> Current Salary: {appliedJob.signUpEntity.currentSalary1}</h6>
            <h6><i className="fa-solid fa-graduation-cap text-warning"></i> Specialization: {appliedJob.signUpEntity.specialization}</h6>
            <button onClick={() => handleInterviewClick(appliedJob.id)} className="btn btn-warning text-end">
              Schedule Interview
            </button>
            <button onClick={() => handleCandidateSelection(appliedJob.id)} className="btn btn-primary text-end">
              Select Candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
