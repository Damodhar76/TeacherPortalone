// import React, { useEffect, useState } from 'react';

// function ApplyJob() {
//   const [applyJobs, setApplyJobs] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:9090/api/applied-jobs/get')
//       .then((response) => response.json())
//       .then((data) => setApplyJobs(data))
//       .catch((error) => console.error('Error fetching data: ', error));
//   }, []);

//   return (
//     <div>
//       <h2>Apply Jobs List</h2>
//       <ul>
//         {applyJobs.map((applyJob) => (
//           // <li key={applyJob.id}>Job ID: {applyJob.job.id}, Applicant ID: {applyJob.applicant.id},
//           <li key={applyJob.id}>Job ID: {applyJob.job.id}, Applicant ID: {applyJob.applicant.id},
//             Name:{applyJob.firstName},
//             lastName:{applyJob.lastName},
//             email:{applyJob.email},
//             mobileNumber:{applyJob.mobileNumber},
          
        
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ApplyJob;
