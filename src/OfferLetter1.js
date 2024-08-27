import React, { useState } from "react";
import axios from "axios";
import "./Offer.css"; // Import CSS for styling

const OfferLetter1 = ({ appliedJobId }) => {
  const initialOfferLetterState = {
    email: "",
    dateOfJoining: "",
    deadline: "",
    salary: "",
  };

  const [offerLetter, setOfferLetter] = useState({
    ...initialOfferLetterState,
  });
  const [showForm, setShowForm] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidDateOfJoining, setIsValidDateOfJoining] = useState(true);
  const [isValidDeadline, setIsValidDeadline] = useState(true);
  const [isValidSalary, setIsValidSalary] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfferLetter({ ...offerLetter, [name]: value });

    // Perform validation based on input name
    switch (name) {
      case "email":
        setIsValidEmail(validateEmail(value));
        break;
      case "dateOfJoining":
        setIsValidDateOfJoining(validateDateOfJoining(value));
        setIsValidDeadline(validateDeadline(value, offerLetter.deadline));
        break;
      case "deadline":
        setIsValidDeadline(validateDeadline(offerLetter.dateOfJoining, value));
        break;
      case "salary":
        setIsValidSalary(validateSalary(value));
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[A-Za-z]{2,}$/;
    const isValid = regex.test(email);
    return isValid;
  };

  const validateDateOfJoining = (dateOfJoining) => {
    const currentDate = new Date();
    const selectedDate = new Date(dateOfJoining);
    const isValid = selectedDate > currentDate;
    return isValid;
  };

  const validateDeadline = (dateOfJoining, deadline) => {
    const selectedDateOfJoining = new Date(dateOfJoining);
    const selectedDeadline = new Date(deadline);
    const isValid = selectedDeadline > selectedDateOfJoining;
    return isValid;
  };

  const validateSalary = (salary) => {
    const numericSalary = parseFloat(salary.replace(/,/g, ""));
    const isValid = numericSalary >= 200000 && numericSalary <= 1000000;
    return isValid;
  };

  const sendOfferLetter = async () => {
    // Perform validation before sending the offer letter
    if (
      !offerLetter.email ||
      !offerLetter.dateOfJoining ||
      !offerLetter.deadline ||
      !offerLetter.salary
    ) {
      alert("Please fill in all fields before sending the offer letter.");
      return;
    }

    // Validate email format
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate date format
    if (!isValidDateOfJoining) {
      alert("Please enter a valid date for Date of Joining.");
      return;
    }

    // Validate salary format
    if (!isValidSalary) {
      alert("Please enter a valid salary (between $200,000 and $1,000,000).");
      return;
    }

    // Validate deadline
    if (!isValidDeadline) {
      alert("Please enter a deadline that is after the Date of Joining.");
      return;
    }

    // If all validations pass, send the offer letter
    try {
      const response = await axios.post(
        `http://localhost:9090/api/sendOfferLetter/${appliedJobId}`,
        offerLetter
      );

      console.log("Offer letter sent successfully");
      alert("Offer letter sent successfully");

      setOfferLetter({ ...initialOfferLetterState }); // Reset form fields
      setShowForm(false); // Close the form after sending the offer letter
    } catch (error) {
      console.error("Error sending offer letter:", error);
      alert("Error sending offer letter");
    }
  };

  return (
    <div>
      <h2>Send Offer Letter</h2>
      <button onClick={() => setShowForm(true)}>Send Offer Letter</button>
      {showForm && (
        <div className="overlay">
          <div className="popup">
            <span className="close" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <form>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={offerLetter.email}
                    onChange={handleChange}
                    style={{
                      borderColor: isValidEmail ? "initial" : "red",
                      marginLeft: "10px",
                      fontSize: "1rem",
                    }}
                  />
                </label>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>
                  Date of Joining
                  <input
                    type="date"
                    name="dateOfJoining"
                    value={offerLetter.dateOfJoining}
                    onChange={handleChange}
                    style={{
                      borderColor: isValidDateOfJoining ? "initial" : "red",
                      marginLeft: "10px",
                      fontSize: "1rem",
                    }}
                  />
                </label>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>
                  Deadline
                  <input
                    type="date"
                    name="deadline"
                    value={offerLetter.deadline}
                    onChange={handleChange}
                    style={{
                      borderColor: isValidDeadline ? "initial" : "red",
                      marginLeft: "10px",
                      fontSize: "1rem",
                    }}
                  />
                </label>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>
                  {" "}
                  Salary
                  <input
                    type="text"
                    name="salary"
                    value={offerLetter.salary}
                    onChange={handleChange}
                    style={{
                      borderColor: isValidSalary ? "initial" : "red",
                      marginLeft: "10px",
                      fontSize: "1rem",
                    }}
                  />
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={sendOfferLetter}
              >
                Send Offer Letter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferLetter1;
