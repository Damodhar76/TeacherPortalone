import { useState, useEffect } from "react";
import TrainerNav from "./Trainernav";
import { getJobPostedDetails } from "./Authstate";
import { bold } from "fontawesome";

const Appliedjobs = () => {
  const [state, setState] = useState(false);
  const [apply, setApply] = useState(null);
  const jobposteddetails = getJobPostedDetails();

  useEffect(() => {
    fetch(
      `http://localhost:8085/api/institute/applied-jobs/${jobposteddetails.id}`
    )
      .then((response) => response.json())
      .then((profileData) => setApply(profileData));
  }, []);
  return (
    <>
      <TrainerNav />
      <div className="container-fluid">
        {/* <div className="row">
          {apply ? ( // Conditional rendering: Render if appliedJob is truthy (i.e., not null)
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{apply.company}</h5>
                  <p className="card-text">{apply.role}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-12">Loading...</div> // Show loading message if appliedJob is null
          )}
        </div> */}
      </div>
      <div className="container-fluid bg-body">
        <div className="row">
          <div className="col-12 mt-3">
            <p className="fs-3 fw-bold">
              <u>Applied Jobs</u>
            </p>
          </div>
          <div className="col-4">
            <div
              style={{ borderColor: "white" }}
              class="card  shadow-lg bg-white"
            >
              <button className="btn" onClick={() => setState(true)}>
                <div class="card-body">
                  <h5 class="text-start">
                    {" "}
                    <i class="fa-solid fa-building-columns text-primary"></i>{" "}
                    {jobposteddetails.company}
                  </h5>
                  <h5 className="text-start text-warning">
                    {jobposteddetails.desiredSkillSet}
                  </h5>
                  <div className="d-flex justify-content-between p-1 ">
                    <span>
                      <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                      {jobposteddetails.location}
                    </span>

                    <span>
                      <i class="fa-solid fa-clock text-warning"></i>{" "}
                      {jobposteddetails.totalExperience} years
                    </span>
                  </div>
                  <div className="d-flex justify-content-between p-1">
                    <span>
                      <i class="fa-solid fa-indian-rupee-sign text-warning"></i>{" "}
                      Salary
                    </span>
                    <span>
                      <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      {jobposteddetails.postedby}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between p-1 pe-5">
                    <span className="pe-5">
                      <i class="fa-solid fa-suitcase text-warning"></i>{" "}
                      {jobposteddetails.role}
                    </span>
                    <span></span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="col-8">
            {state && (
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title p-1">
                    {" "}
                    <i class="fa-solid fa-building-columns text-primary"></i>{" "}
                    {jobposteddetails.company}
                  </h5>
                  <h5 className="card-title p-1 text-warning">
                    {jobposteddetails.desiredSkillSet}
                  </h5>
                  <div className="d-flex justify-content-evenly p-1">
                    <span>
                      <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                      {jobposteddetails.location}
                    </span>
                    <span>
                      <i class="fa-solid fa-clock text-warning"></i>{" "}
                      {jobposteddetails.totalExperience}
                    </span>
                    <span>
                      <i class="fa-solid fa-indian-rupee-sign text-warning"></i>{" "}
                      Salary
                    </span>
                    <span>
                      <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      {jobposteddetails.desiredSkillSet}
                    </span>
                    <span className="pe-5">
                      <i class="fa-solid fa-suitcase text-warning"></i>{" "}
                      {jobposteddetails.role}
                    </span>
                    <span></span>
                  </div>
                  <h5 className="fw-bold pt-3">
                    <u>Description</u>
                  </h5>
                  <div className="p-3">
                    <p className="text-justify">
                      {jobposteddetails.jobDescription}
                    </p>
                  </div>
                  <div>
                    <h5 className="fw-bold p-2">
                      <u>Responsibilities</u>
                    </h5>
                  </div>
                  <div>{jobposteddetails.responsibilities}</div>
                  <div>
                    <h5 className="fw-bold p-2">
                      <u>Requirements</u>
                    </h5>
                  </div>
                  <div>{jobposteddetails.additionalResponsibilities}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appliedjobs;
