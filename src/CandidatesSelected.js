import React, { useState, useEffect } from "react";
import axios from "axios";
import Institutenavbar from "./Institutenavbar";
import OfferLetter1 from "./OfferLetter1";
// import { useParams, useNavigate } from "react-router-dom";

const CandidatesSelected = ({ status }) => {
  const [instituteId, setInstituteId] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { userId } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    // Retrieve instituteId from localStorage
    const storedInstituteId = localStorage.getItem("instituteId");
    setInstituteId(storedInstituteId);
  }, []);

  useEffect(() => {
    if (!instituteId) return; // If instituteId is not set, return

    const fetchAppliedJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:9090/api/applied-jobs/institutes/${instituteId}/statuses/SELECTED`
        );
        setAppliedJobs(response.data);
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, [instituteId, status]);

  if (!instituteId) {
    return <p>Institute ID not found in localStorage.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  // const handleClick = (userId) => {
  //   navigate("/OfferLetter1"); // Redirect to the offer letter page with userId as param
  //   sessionStorage.setItem("headname", userId);
  // };

  return (
    <div>
      <Institutenavbar />
      <h2 className="text-center text-success mt-3">Candidates Selected</h2>
      <div>
        {appliedJobs.map((appliedJob) => (
          <div key={appliedJob.id}>
            <div className="p-3 ">
              <div className="card  bg-body-secondary p-4">
                {/* <h4 className="text-center"> Applied Job Details</h4> */}
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
                  </div>
                </div>
                <h4 className="text-center">User Details</h4>

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
                {/* <button
                  onClick={() => handleClick(appliedJob.signUpEntity.userId)} // Pass user ID to handleClick function
                  className="btn btn-warning text-end"
                >
                  {" "}
                  Send Offer{" "}
                </button> */}
                <OfferLetter1 appliedJobId={appliedJob.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesSelected;
