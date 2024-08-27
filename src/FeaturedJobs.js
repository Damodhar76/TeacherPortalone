// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FeaturedJobs = () => {
//   const [jobPosts, setJobPosts] = useState([]);
//   const [loading, setLoading] = useState();
//   const [error, setError] = useState();
//   const [savedJobPostIds, setSavedJobPostIds] = useState([]);
//   const userId = localStorage.getItem("userId");

//   // Fetch job posts when the component mounts
//   useEffect(() => {
//     const fetchJobPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:9090/jobs/jobPosts`);
//         setJobPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching job posts");
//         setLoading(false);
//       }
//     };

//     fetchJobPosts();
//   }, []);

//   const handleCreate = async (jobPost) => {
//     console.log(jobPost);
//     try {
//       const response = await axios.post(
//         `http://localhost:9090/jobs/${jobPost.jobId}/apply/${userId}`,
//         {}
//       );
//       console.log(response.data);
//       alert("Job Applied Successfully");

//       // Optionally, you can navigate to another page or show a success message
//     } catch (error) {
//       console.error("Error creating applied job:", error);
//       // Handle error, show error message, etc.
//     }
//   };

//   const saveJobPost = (jobId) => {
//     // Fetch the job post details by ID from the jobPosts array
//     const jobPostToSave = jobPosts.find((jobPost) => jobPost.jobId === jobId);
//     if (jobPostToSave) {
//       // Get the saved job posts from localStorage or initialize an empty array
//       const savedPosts =
//         JSON.parse(localStorage.getItem("savedJobPosts")) || [];
//       // Add the job post to the saved posts array
//       const updatedSavedPosts = [...savedPosts, jobPostToSave];
//       // Save the updated array back to localStorage
//       localStorage.setItem("savedJobPosts", JSON.stringify(updatedSavedPosts));
//       // Optionally, display a success message or perform other actions
//       console.log("Job post saved successfully:", jobPostToSave);
//     }
//   };

//   return (
//     <div>
//       <h2>Job Posts</h2>
//       <ul>
//         {jobPosts.map((jobPost) => (
//           <li key={jobPost.id}>
//             <h3>{jobPost.role}</h3>
//             <p>{jobPost.company}</p>
//             <p>{jobPost.description}</p>
//             <button onClick={() => handleCreate(jobPost)}>Apply</button>
//             <button onClick={() => saveJobPost(jobPost.jobId)}>Save</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FeaturedJobs;
