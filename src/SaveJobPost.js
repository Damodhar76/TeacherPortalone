// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSave, faCheck } from '@fortawesome/free-solid-svg-icons';
// import './SaveJobPost.css';

// const SaveJobPost = ({ jobPost }) => {
//   const [saved, setSaved] = useState(false);

//   const handleSave = async () => {
//     try {
//       const userId = localStorage.getItem('userId');
//       const response = await axios.post(
//         `http://localhost:9090/prava/${userId}/saved-jobposts`,
//         jobPost
//       );
//       console.log(response.data);
//       setSaved(true); // Update state to indicate job post is saved
//       alert("Job Saved Successfully");
//     } catch (error) {
//       console.error("Error saving job:", error);
//       // Handle error, show error message, etc.
//       alert("Failed to save job post. An error occurred.");
//     }
//   };

//   return (
//     <div>
//       <button className={saved ? "savedButton" : "saveButton"} onClick={handleSave} enabled={saved}>
//         {saved ? "Saved" : "Save Job"}
//       </button>
//     </div>
//   );
// };

// export default SaveJobPost;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCheck } from '@fortawesome/free-solid-svg-icons';
import './SaveJobPost.css'; // Import CSS file for styling

const SaveJobPost = ({ userId, jobPost }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Check if the job post is saved for the current user when the component mounts
    const fetchSavedStatus = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:9090/prava/${userId}/saved-jobposts`);
        const savedJobPosts = response.data;
        const isSaved = savedJobPosts.some(savedPost => savedPost.jobId === jobPost.jobId);
        setSaved(isSaved);
      } catch (error) {
        console.error("Error retrieving saved job posts:", error);
      }
    };

    fetchSavedStatus();
  }, [userId, jobPost.jobId]);

  const handleSave = async () => {
    try {
        const userId = localStorage.getItem('userId');
      // Simulate saving the job post (replace with your actual POST request)
      const response = await axios.post(`http://localhost:9090/prava/${userId}/saved-jobposts`, jobPost);
      
      if (response.status === 200) {
        setSaved(true); // Update local state to indicate job is saved
        alert("Job Saved Successfully");
      } else {
        alert("Failed to save job post. Unexpected response status.");
      }
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save job post. An error occurred.");
    }
  };

  return (
    <div>
      <button className={saved ? "savedButton" : "saveButton"} onClick={handleSave} disabled={saved}>
        <FontAwesomeIcon icon={saved ? faCheck : faSave} />
        {saved ? "Saved" : " Save"}
      </button>
    </div>
  );
};

export default SaveJobPost;
