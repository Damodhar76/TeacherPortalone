import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faLocationArrow, faBriefcase, faCheckCircle, faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import SaveJobPost from './SaveJobPost';
import axios from 'axios';
import './JobCard.css';
import './ApplyJobPost.css';

const JobCard = ({jobPost }) => {
  const [expanded, setExpanded] = useState(false);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const checkAppliedStatus = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:9090/api/applied-jobs/${jobPost.jobId}/applied/${userId}`);
        setApplied(response.data); // Assuming the response contains the applied status
      } catch (error) {
        console.error('Error checking applied status:', error);
      }
    };

    checkAppliedStatus();
  }, [jobPost.jobId, userId]);

  const handleApply = async () => {
    try {
        const userId = localStorage.getItem('userId');
      // Make a request to apply for the job
      const response = await axios.post(`http://localhost:9090/jobs/${jobPost.jobId}/apply/${userId}`);
      if (response.status === 200) {
        setApplied(true); // Update the applied status in the frontend state
        // Optionally, display a success message
      } else {
        // Handle unexpected response status
      }
    } catch (error) {
      console.error('Error applying for the job:', error);
      // Handle error, display error message, etc.
    }
  };

//   const handleApply = async () => {
//     try {
//       // Simulate applying to the job post (replace with your actual POST request)
//       const userId = localStorage.getItem('userId');
//       const response = await axios.post(`http://localhost:9090/jobs/${jobPost.jobId}/apply/${userId}`, {});
      
//       if (response.status === 200) {
//         setApplied(true); // Update local state to indicate job is applied
//         alert("Applied to Job Successfully");
//       } else {
//         alert("Failed to apply to job post. Unexpected response status.");
//       }
//     } catch (error) {
//       console.error("Error applying to job post:", error);
//       alert("Failed to apply to job post. An error occurred.");
//     }
//   };


  return (
    <div className="job-post-card">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">
            <b><FontAwesomeIcon icon={faBuilding} /> {jobPost.postedby}</b>
          </h5>
          <div className="job-details">
            <p><FontAwesomeIcon icon={faBriefcase} /> <b>Role:</b> {jobPost.role}</p>
            <p><FontAwesomeIcon icon={faCalendarAlt} /><b> Experience:</b> {jobPost.totalExperience} Yrs</p>
            <p><FontAwesomeIcon icon={faLocationArrow} /><b> Location:</b> {jobPost.location}</p>
            {expanded && (
              <>
                <p><FontAwesomeIcon icon={faCalendarAlt} /><b> Experience: </b>{jobPost.relevantExperience} Yrs</p>
                <p><FontAwesomeIcon icon={faBuilding} /><b> Company:</b> {jobPost.company}</p>
                <p><FontAwesomeIcon icon={faBuilding} /><b> Description: </b>{jobPost.jobDescription}</p>
                <p><FontAwesomeIcon icon={faLocationArrow} /><b> Responsibilities:</b> {jobPost.responsibilities}</p>
                <p><FontAwesomeIcon icon={faBuilding} /> <b>Additional Responsibilities: </b>{jobPost.additionalResponsibilities}</p>
                <p><FontAwesomeIcon icon={faCalendarAlt} /> <b>Skills: </b>{jobPost.desiredSkillSet}</p>
              </>
            )}
          </div>
          <div className="buttons-container">
            {!expanded && (
              <button className="btn btn-primary" onClick={() => setExpanded(true)}>
                View Details
              </button>
            )}
            {expanded && (
              <button className="btn btn-primary" onClick={() => setExpanded(false)}>
                <FontAwesomeIcon icon={faTimesCircle} /> Hide Details
              </button>
            )}
             <button onClick={handleApply} disabled={applied}>
      {applied ? 'Applied' : 'Apply'}
    </button>
            <SaveJobPost jobPost={jobPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
