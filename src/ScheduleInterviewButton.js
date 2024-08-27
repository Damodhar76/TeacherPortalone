import React, { useState } from 'react';
import axios from 'axios';


function ScheduleInterviewButton({ appliedJobId }) {
  const [scheduledTime, setScheduledTime] = useState('');
  const [interviewerName, setInterviewerName] = useState('');
  const [interviewLocation, setInterviewLocation] = useState('');
  const [interviewType, setInterviewType] = useState('');
  const [interviewNotes, setInterviewNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post(`http://localhost:9090/interviews/interview/schedule/${appliedJobId}`, {
        scheduledTime,
        interviewerName,
        interviewLocation,
        interviewType,
        interviewNotes
      });
      setSuccessMessage(response.data);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h5>Schedule Interview</h5>
      <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className='col-md-6'>
        <label>Scheduled Time:</label>
        <input type="datetime-local" value={scheduledTime} onChange={(e) => setScheduledTime(e.target.value)}  className="form-control text-primary border-success" required />
       </div>
       <div className='col-md-6'>
        <label>Interviewer Name:</label>
        <input type="text" value={interviewerName} onChange={(e) => setInterviewerName(e.target.value)}  className="form-control text-primary border-success" required />
       </div>
       </div>
       <div className='row'>
       <div className='col-md-6'>

        <label>Interview Location:</label>
        <input type="text" value={interviewLocation} onChange={(e) => setInterviewLocation(e.target.value)}  className="form-control text-primary border-success" required />
     </div>
       <div className='col-md-6'>
        
        <label>Interview Type:</label>
        <input type="text" value={interviewType} onChange={(e) => setInterviewType(e.target.value)}   className="form-control text-primary border-success"required />
       </div>
       </div>
        <label>Interview Notes:</label>
        <textarea value={interviewNotes} onChange={(e) => setInterviewNotes(e.target.value)}  className="form-control text-primary border-success" required />
        <br></br>
         <button className='btn btn-primary' type="submit" disabled={loading}>Schedule Interview</button>
      </form>
      {error && <p>Error: {error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}


//  <div className="row">
{/* <div className="col-md-6">
<label htmlFor="firstName text-secondary ">
  <b>Email: </b>
</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="form-control text-primary border-primary"
  required
/>
</div>
<br></br>
<div className="col-md-6">
<label htmlFor="firstName text-secondary ">
  <b>Phone Number: </b>
</label>
<input
  type="tel"
  id="phoneNumber"
  name="phoneNumber"
  pattern="[0-9]{10}"
  value={formData.phoneNumber}
  onChange={handleChange}
  className="form-control text-primary border-primary"
  required
/>
</div>
</div> */}


export default ScheduleInterviewButton;



