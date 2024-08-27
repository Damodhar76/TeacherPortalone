import React, { useState } from "react";
import axios from "axios";
import "./Interview.css"; // Import CSS file for styling

const InterviewFormPopup = ({ appliedJobId, onClose }) => {
  const [scheduledTime, setScheduledTime] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [interviewLocation, setInterviewLocation] = useState("");
  const [interviewType, setInterviewType] = useState("online");
  const [interviewNotes, setInterviewNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scheduledDate = new Date(scheduledTime);
    const currentDate = new Date();

    if (scheduledDate <= currentDate) {
      setErrorMessage("Scheduled time must be later than the current time.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:9090/interviews/interview/schedule/${appliedJobId}`,
        {
          scheduledTime,
          interviewerName,
          interviewLocation,
          interviewType,
          interviewNotes,
        }
      );
      onClose();
      console.log("Interview scheduled successfully:", response.data);
      alert("Interview scheduled successfully.");
    } catch (error) {
      console.error("Error scheduling interview:", error);
      alert("Error scheduling interview. Please try again.");
    }
  };

  // Function to handle change in interview type
  const handleInterviewTypeChange = (e) => {
    const { value } = e.target;
    setInterviewType(value);
    // Disable interview location input if interview type is online
    if (value === "online") {
      setInterviewLocation("");
    }
  };

  return (
    <div className="interview-form-popup">  
      <div className="interview-form">
        <h2>Schedule Interview</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="scheduledTime">Scheduled Time:</label>
            <input
              type="datetime-local"
              id="scheduledTime"
              value={scheduledTime}
              onChange={(e) => {setScheduledTime(e.target.value);
                setErrorMessage("");}}
              required
            />
             {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="interviewerName">Interviewer Name:</label>
            <input
              type="text"
              id="interviewerName"
              value={interviewerName}
              onChange={(e) => setInterviewerName(e.target.value.replace(/[^A-Za-z\s]/gi, ''))}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewLocation">Interview Location:</label>
            <input
              type="text"
              id="interviewLocation"
              value={interviewLocation}
              onChange={(e) => setInterviewLocation(e.target.value.replace(/[^a-zA-Z0-9, ]/gi, ''))}
              required={interviewType === "offline"} // Required only if interview type is offline
              disabled={interviewType === "online"} // Disable if interview type is online
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewType">Interview Type:</label>
            <select
              id="interviewType"
              value={interviewType}
              onChange={handleInterviewTypeChange}
              required
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interviewNotes">Interview Notes:</label>
            <textarea
              id="interviewNotes"
              value={interviewNotes}
              onChange={(e) => setInterviewNotes(e.target.value.replace(/[^a-zA-Z0-9, ]/gi, ''))}
              required
            ></textarea>
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary">Schedule</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewFormPopup;