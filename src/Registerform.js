// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {

//   const [entityName, setEntityName] = useState("");
//   const [log, setLogo] = useState("");
//   const [Address, setAddress] = useState("");
//   const [Mandel, setMandel] = useState("");
//   const [District , setDistrict] = useState("");
//   const [City , setCity] = useState("");
//   const [Village , setVillage] = useState("");
//   const [Pincode , setPincode] = useState("");
//   const [State , setState] = useState("");
//   const [Country , setCountry] = useState("");
//   const [Mobile , setMobile] = useState("");
//   const [email , setemail] = useState("");
//   const [password , setpassword] = useState("");
//   const [Website ,setWebsite] = useState("");
//   const [Youtube ,setYoutube] = useState("");
//   const [Instagram ,setInstagram] = useState("");
//   const [FB ,setFB] = useState("");
//   const [Twitter ,setTwitter] = useState("");
//   const [AboutChruch ,setAboutChruch] = useState("");
 
//   const submit = async () => {
//     const data = {
//       entityName,
//       log,
//       Address,
//       Mandel,
//       District,
//       City,
//       Village,
//       Pincode,
//       State,
//       Country,
//       Mobile,
//       email,
//       password,
//       Website,
//       Youtube,
//       Instagram,
//       FB,
//       Twitter,
//       AboutChruch
//     };
//     console.log(data);
//     try {
//       await axios.post("http://localhost:9090/prava/save", data);
//       console.log("Entered into post method");

//       setEntityName("");
//       setLogo("");
//       setAddress("");
//       setMandel("");
//       setDistrict("");
//       setCity("");
//       setVillage("");
//       setPincode("");
//       setState("");
//       setCountry("");
//       setMobile("");
//       setemail("");
//       setpassword("");
//       setWebsite("");
//       setYoutube("");
//       setInstagram("");
//       setFB("");
//       setTwitter("");
//       setAboutChruch("");

//      // Set registration success state to true
//      setRegistrationSuccess(true);

//      // Show success message using alert
//      alert("Registration Success" +firstName);
 
//    } catch (error) {
//      setError(true);
//      setErrorMessage(error.message);
//      console.log(error);
//      // Show error message using alert
//      alert("Some error occurred during registration");
//    }
//   };
 
//   return (
//     <div>
//       <h2>Church Details Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Entity Name:
//           <input type="text" name="entityName" value={entityName} onChange={handleInputChange} required />
//         </label>
//         <br />
//         <label>
//           Logo:
//           <input type="file" name="logo" value={log} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input type="text" name="Address" value={Address} onChange={handleInputChange} required />
//         </label>
//         <br />
//         <label>
//           Village:
//           <input type="text" name="Village" value={Village} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Mandel:
//           <input type="text" name="Mandel" value={Mandel} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           District:
//           <input type="text" name="District" value={District} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           City:
//           <input type="text" name="City" value={City} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Pincode:
//           <input type="number" name="Pincode" value={Pincode} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           State:
//           <input type="text" name="State" value={State} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Country:
//           <input type="text" name="Country" value={Country} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Mobile:
//           <input type="text" name="Mobile" value={Mobile} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={email} onChange={handleInputChange} required />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={password} onChange={handleInputChange} required />
//         </label>
//         <br />
//         <label>
//           Website:
//           <input type="text" name="Website" value={Website} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Youtube:
//           <input type="text" name="Youtube" value={Youtube} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Instagram:
//           <input type="text" name="Instagram" value={Instagram} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Facebook:
//           <input type="text" name="FB" value={FB} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Twitter:
//           <input type="text" name="Twitter" value={Twitter} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           About Church:
//           <textarea name="AboutChruch" value={AboutChruch} onChange={handleInputChange}></textarea>
//         </label>
//         <br />
//         <button type="submit" value={submit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;
// -----
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Registerform.css";
import Navbar from "./Navbar";

//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Registrationform() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialization, setSpecialization] = useState("");

  const [qualification, setQualification] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");

  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");
  const [language3, setLanguage3] = useState("");
  const [language4, setLanguage4] = useState("");

  const [currentSalary1, setCurrentSalary1] = useState("");
  const [currentSalary2, setCurrentSalary2] = useState("");

  const [address, setAddress] = useState("");
  const [professional, setProfessional] = useState("");
  const [description, setDescription] = useState("");
  const [statement, setStatement] = useState("");
  const [certifications, setCertifications] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [resume, setResume] = useState("");
  const [photo, setPhoto] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [typeofmode, setTypeofmode] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleYearsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <=50) {
      // If the input is a valid non-negative number
      setYears(value);
    }
    // If the input is not a valid non-negative number, do nothing
  };
  const handleMonthsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <=10) {
      // If the input is a valid non-negative number
      setMonths(value);
    }
    // If the input is not a valid non-negative number, do nothing
  };
  const handleCurrentSalary1Change = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 5000) {
      // If the input is a valid number and greater than or equal to 5000
      setCurrentSalary1(value);
    } else {
      // If the input is invalid, clear the field or show an error message
      setCurrentSalary1(""); // Clear the field
      // You can also show an error message to the user
      // setError(true);
      // setErrorMessage("Salary must be a positive number and at least 5000");
    }
  };
  
  

  const handleDropdownChange = (event) => {
    // Update the selected option when the dropdown changes
    setSelectedOption(event.target.value);
  };
  const handleDropChange = (event) => {
    // Update the selected option when the dropdown changes
    setSelectOption(event.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\d][^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const submit = async () => {
    const data = {
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      confirmPassword,
      state,
      country,
      address,
      months,
      years,
      fatherName,
      specialization,

      subject1,
      subject2,
      subject3,
      subject4,

      language1,
      language2,
      language3,
      language4,

      currentSalary1,
      currentSalary2,

      professional,
      description,
      statement,
      certifications,
      qualification,
      dateofbirth,
      resume,
      photo,
      proficiency,
      typeofmode,
      selectedOption,
      selectOption,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:9090/prava/save", data);
      console.log("Entered into post method");

      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileNumber("");
      setPassword("");
      setConfirmPassword("");
      setState("");
      setCountry("");
      setAddress("");
      setMonths("");
      setYears("");
      setQualification("");
      setSpecialization("");

      setSubject1("");
      setSubject2("");
      setSubject3("");
      setSubject4("");

      setLanguage1("");
      setLanguage2("");
      setLanguage3("");
      setLanguage4("");

      setCurrentSalary1("");
      setCurrentSalary2("");

      setProfessional("");
      setDescription("");
      setStatement("");
      setCertifications("");
      setDateofbirth("");
      setResume("");
      setPhoto("");
      setFatherName("");
      setSelectedOption("");
      setSelectOption("");
      setTypeofmode("");
      setProficiency("");

     // Set registration success state to true
     setRegistrationSuccess(true);

     // Show success message using alert
     alert("Registration Success" +firstName);
 
   } catch (error) {
     setError(true);
     setErrorMessage(error.message);
     console.log(error);
     // Show error message using alert
     alert("Some error occurred during registration");
   }
  };

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              <div className="sideimage card shadow-sm ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgy8G-OOaEM9GxYQHXodLaU4vDxqoA3EoaVQ&usqp=CAU"
                  class="card2"
                  alt="..."
                />
                <div className="card-body mt-10">
                  <h5 className="card-title text-center">
                    <b>On registering,you can</b>
                  </h5>
                  <br></br>
                  <h6 className="card-text text-center ">
                    <img
                      style={{ width: "18px" }}
                      src="https://static-00.iconduck.com/assets.00/check-circle-1-icon-2048x2048-t5gzpu3y.png"
                      alt=".."
                    />
                    Build your profile and let recruiters find you
                  </h6>
                  <h6 className="text-center ">
                    <img
                      style={{ width: "18px" }}
                      src="https://static-00.iconduck.com/assets.00/check-circle-1-icon-2048x2048-t5gzpu3y.png"
                      alt=".."
                    />
                    Get job postings delivered right to your profile
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-8 card-body p-md-5">
              <div className="row justify-content-around">
                <div className="container-fluid bg-white m-3 shadow-sm p-5">
                  <div className="d-flex flex-row">
                    <div className="col-12">
                      <div className="container pt-2">
                        <form className="mx-1 mx-md-4" onSubmit={submit}>
                          <h4 className="style">
                            <i>Registration Form</i>
                          </h4>
                          <br></br>
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                for="name"
                                className="form-label text-dark-emphasis fw-bold"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Name"
                                value={firstName}
                                onChange={(event) => {
                                  const updatedValue =
                                    event.target.value.replace(
                                      /[^A-Za-z\s]/g,
                                      ""
                                    );
                                  setFirstName(updatedValue);
                                }}
                                required
                              />
                            </div>
                            <div className="col-md-6">
                              <label
                                for="names"
                                className="form-label text-dark-emphasis fw-bold"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="names"
                                placeholder="Enter LastName"
                                value={lastName}
                                onChange={(event) => {
                                  const updatedValue =
                                    event.target.value.replace(
                                      /[^A-Za-z\s]/g,
                                      ""
                                    );
                                  setLastName(updatedValue);
                                }}
                                required
                              />
                            </div>
                            <br></br>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                for="mobileNumber"
                                className="form-label text-dark-emphasis fw-bold"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="mobileNumber"
                                placeholder="Enter mobile Number"
                                value={mobileNumber}
                                onChange={(event) =>
                                  setMobileNumber(event.target.value)
                                }
                                title="Enter valid and 10-digit mobile number"
                                pattern="^[6-9]{1}[0-9]{9}"
                                required
                              />
                            </div>
                            <div className="col-md-6">
                              <label
                                for="email"
                                className="form-label text-dark-emphasis fw-bold"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className={`form-control  ${
                                  isValidEmail ? "" : "is-invalid"
                                }`}
                                id="email"
                                placeholder="Enter the Email"
                                value={email}
                                onChange={handleEmailChange}
                                title=" Please enter a valid email ending with @gmail.com or @hotmail.com."
                                required
                              />
                            </div>
                          </div>
                          <br></br>
                          <div className="row">
                            <div className="col-6">
                              <label
                                for="password"
                                className="form-label text-dark-emphasis fw-bold"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter the Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                                title="Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long."
                                required
                              />
                            </div>
                            <div className="col-6">
                              <label
                                for="password"
                                className="form-label text-dark-emphasis fw-bold"
                              >
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="confirmpassword"
                                placeholder="Re-Enter the Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                                title="confirm Password must be same as Password"
                                required
                              />
                            </div>
                          </div>
                          <br />
                          <div className="col-12">
                            <label
                              for="job"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              Job Classification
                            </label>
                            <select
                              value={selectedOption}
                              onChange={handleDropdownChange}
                            >
                              <option></option>
                              <option value="Teachers">Teachers</option>
                              <option value="Skilled Trainers">
                                Skilled Trainers
                              </option>
                              <option value="Religious Trainers">
                                Religious Trainers
                              </option>
                              required
                            </select>
                            <br />
                            <br />
                            <div>
                              {/* Display content based on th
                                    e selected option */}
                              {selectedOption === "Teachers" && (
                                <div>
                                  <div className="col-12">
                                    <label
                                      for="qualification"
                                      className="form-label text-dark-emphasis fw-bold"
                                    >
                                      Qualification
                                    </label>
                                    <select
                                      className="form-select"
                                      value={qualification}
                                      onChange={(e) =>
                                        setQualification(e.target.value)
                                      }
                                    >
                                      <option>select</option>
                                      <option>Graduation</option>
                                      <option>Post Graduation</option>
                                      <option>Ph.d</option>
                                    </select>
                                    <input
                                      type="qualification"
                                      className="form-control"
                                      id="qualification"
                                      placeholder="Enter specialization"
                                      value={specialization}
                                      onChange={(event) => {
                                        const updatedValue =
                                          event.target.value.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                          );
                                        setSpecialization(updatedValue);
                                      }}
                                      required
                                    />
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                    <div className="col-6">
      <label
        htmlFor="yop"
        className="form-label text-dark-emphasis fw-bold"
      >
        Years of Experience
      </label>
      <input
        type="number"
        className="form-control"
        id="yop"
        placeholder="years"
        value={years}
        onChange={handleYearsChange}
        required
      />
      {years < 0 && (
        <div className="text-danger">
          Please enter a non-negative value for years.
        </div>
      )}
    </div>
                                      <div className="col-6">
                                        <label
                                          for="yop"
                                          className="form-label text-dark-emphasis fw-bold"
                                        >
                                          Months of Experience
                                        </label>
                                        <input
                                          type="number"
                                          className="form-control"
                                          id="yop"
                                          placeholder="months"
                                          value={months}
                                          onChange={handleMonthsChange}
                                          
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <label
                                          for="name"
                                          className="form-label text-dark-emphasis fw-bold"
                                        >
                                          Expertise In Subjects
                                        </label>
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject1}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject1(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject2}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject2(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject3}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject3(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject4}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject4(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <label
                                          for="name"
                                          className="form-label text-dark-emphasis fw-bold"
                                        >
                                          Known Languages
                                        </label>
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language1}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage1(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language2}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage2(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language3}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage3(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language4}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage4(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <br></br>
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        for="name"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Proficiency in languages
                                      </label>
                                      <select
                                        className="form-select"
                                        value={proficiency}
                                        onChange={(e) =>
                                          setProficiency(e.target.value)
                                        }
                                      >
                                        <option>select</option>
                                        <option>Beginner</option>
                                        <option>Intermediate </option>
                                        <option>Expert</option>
                                      </select>
                                    </div>

                                    <br></br>

                                    <div className="col-6">
                                      <label
                                        for="name"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Type of Mode
                                      </label>
                                      <select
                                        className="form-select"
                                        value={typeofmode}
                                        onChange={(e) =>
                                          setTypeofmode(e.target.value)
                                        }
                                      >
                                        <option>select</option>
                                        <option>Online</option>
                                        <option>Offline </option>
                                        <option>Hybrid</option>
                                      </select>
                                    </div>
                                  </div>

                                  <br />
                                  <div className="row">
                                    <div className="col-12">
                                      <label
                                        for="name"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Interested In
                                      </label>
                                      <select
                                        value={selectOption}
                                        onChange={handleDropChange}
                                      >
                                        <option>select</option>
                                        <option value="FullTime">
                                          Full Time
                                        </option>
                                        <option value="PartTime">
                                          Part Time
                                        </option>
                                        <option value="Contractual">
                                          Contractual
                                        </option>
                                        required
                                      </select>

                                      <div>
                                        {selectOption === "FullTime" && (
                                          <div className="col-12">
                                            <div className="row">
                                              <div className="col-6">
                                                <label
                                                  for="Amount"
                                                  className="form-label text-dark-emphasis fw-bold"
                                                >
                                                  Current CTC
                                                </label>

                                                <input
                                                  type="number"
                                                  id="Amount"
                                                  placeholder="minimum  salary 5000"
                                                  min="5000"
                                                  className="form-control"
                                                  value={currentSalary1}
                                                  onChange={handleCurrentSalary1Change}
                                                />
                                              </div>
                                              <div className="col-6">
                                                <label
                                                  for="Amount"
                                                  className="form-label text-dark-emphasis fw-bold"
                                                >
                                                  Expected CTC
                                                </label>

                                                <input
                                                  type="number"
                                                  id="Amount"
                                                  placeholder="minimum  salary 5000"
                                                  min="5000"
                                                  className="form-control"
                                                  value={currentSalary2}
                                                  onChange={(e) =>
                                                    setCurrentSalary2(
                                                      e.target.value
                                                    )
                                                  }
                                                  required
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      {selectOption === "PartTime" && (
                                        <div>
                                          <div className="row">
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Current hourly Income
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder=""
                                                min="500"
                                                className="form-control"
                                                value={currentSalary1}
                                                onChange={(e) =>
                                                  setCurrentSalary1(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </div>
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Expected hourly Income
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder=""
                                                min="500"
                                                className="form-control"
                                                value={currentSalary2}
                                                onChange={(e) =>
                                                  setCurrentSalary2(
                                                    e.target.value
                                                  )
                                                }
                                                required
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      {selectOption === "Contractual" && (
                                        <div className="col-12">
                                          <div className="row">
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Current CTC
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder=""
                                                min="5000"
                                                className="form-control"
                                                value={currentSalary1}
                                                onChange={(e) =>
                                                  setCurrentSalary1(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </div>
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Expected CTC
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder=""
                                                min="5000"
                                                className="form-control"
                                                value={currentSalary2}
                                                onChange={(e) =>
                                                  setCurrentSalary2(
                                                    e.target.value
                                                  )
                                                }
                                                required
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      <div className="col-12">
                                        <label className="form-label text-dark-emphasis fw-bold">
                                          Address
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputAddress2"
                                          placeholder="Apartment or floor"
                                          value={address}
                                          onChange={(e) =>
                                            setAddress(e.target.value)
                                          }
                                          required
                                        />
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            Country
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputCountry"
                                            value={country}
                                            onChange={(event) => {
                                              const updatedValue =
                                                event.target.value.replace(
                                                  /[^A-Za-z\s]/g,
                                                  ""
                                                );
                                              setCountry(updatedValue);
                                            }}
                                            required
                                          />
                                        </div>

                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            State
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputState"
                                            value={state}
                                            onChange={(event) => {
                                              const updatedValue =
                                                event.target.value.replace(
                                                  /[^A-Za-z\s]/g,
                                                  ""
                                                );
                                              setState(updatedValue);
                                            }}
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            Upload Resume
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            aria-label="file example"
                                            accept=".pdf,.doc,.docx"
                                            value={resume}
                                            onChange={(e) =>
                                              setResume(e.target.value)
                                            }
                                            required
                                          />
                                        </div>
                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            Photo
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            aria-label="file example"
                                            value={photo}
                                            onChange={(e) =>
                                              setPhoto(e.target.value)
                                            }
                                            required
                                          />
                                        </div>
                                      </div>
                                      <br></br>
                                      <div className="col-12">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                            required
                                          />
                                          <label className="form-check-label text-dark-emphasis fw-bold">
                                            * Declaimer
                                          </label>
                                          <p>
                                            I here by declair that the above
                                            information is correct, if not am
                                            the responsible for everything
                                          </p>
                                        </div>
                                      </div>

                                      <br></br>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedOption === "Skilled Trainers" && (
                                <div>
                                  <div className="col-12">
                                    <label className="form-label text-dark-emphasis fw-bold">
                                      Qualification
                                    </label>
                                    <select
                                      className="form-select"
                                      value={qualification}
                                      onChange={(e) =>
                                        setQualification(e.target.value)
                                      }
                                    >
                                      <option>select</option>
                                      <option>Graduation</option>
                                      <option>Post Graduation</option>
                                      <option>Ph.d</option>
                                    </select>
                                    <input
                                      type="qualification"
                                      className="form-control"
                                      id="qualification"
                                      placeholder="Enter Specialization"
                                      value={specialization}
                                      onChange={(event) => {
                                        const updatedValue =
                                          event.target.value.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                          );
                                        setSpecialization(updatedValue);
                                      }}
                                      required
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        for="yop"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Years of Experience
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="yop"
                                        placeholder="years"
                                        value={years}
                                        onChange={handleYearsChange}
                                        required
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label
                                        for="yop"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Months of Experience
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="yop"
                                        placeholder="months"
                                        value={months}
                                        onChange={handleMonthsChange}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <label className="form-label text-dark-emphasis fw-bold">
                                          Expertise In Subjects
                                        </label>

                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject1}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject1(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject2}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject2(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject3}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject3(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={subject4}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setSubject4(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <label className="form-label text-dark-emphasis fw-bold">
                                          Languages
                                        </label>
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language1}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage1(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language2}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage2(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language3}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage3(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        <label></label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder=" "
                                          value={language4}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setLanguage4(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <br />

                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        for="name"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Proficiency in languages
                                      </label>
                                      <select
                                        className="form-select"
                                        value={proficiency}
                                        onChange={(e) =>
                                          setProficiency(e.target.value)
                                        }
                                      >
                                        <option>select</option>
                                        <option>Beginner</option>
                                        <option>Intermediate </option>
                                        <option>Expert</option>
                                      </select>
                                    </div>

                                    <br></br>

                                    <div className="col-6">
                                      <label
                                        for="name"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Type of Mode
                                      </label>
                                      <select
                                        className="form-select"
                                        value={typeofmode}
                                        onChange={(e) =>
                                          setTypeofmode(e.target.value)
                                        }
                                      >
                                        <option>select</option>
                                        <option>Online</option>
                                        <option>Offline </option>
                                        <option>Hybrid</option>
                                      </select>
                                    </div>
                                  </div>
                                  <br></br>

                                  <div class="mb-3">
                                    <label
                                      class="form-label"
                                      className="form-label text-dark-emphasis"
                                    >
                                      Certifications
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      aria-label="file example"
                                      accept=".pdf,.doc,.docx"
                                      value={certifications}
                                      onChange={(e) =>
                                        setCertifications(e.target.value)
                                      }
                                      required
                                    />
                                  </div>

                                  <div className="col-6">
                                    <label
                                      for="name"
                                      className="form-label text-dark-emphasis fw-bold"
                                    >
                                      Date of Birth
                                    </label>
                                    <label
                                      for="name"
                                      className="form-label text-dark-emphasis fw-bold"
                                    ></label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      id="Date"
                                      placeholder=" "
                                      value={dateofbirth}
                                      onChange={(e) =>
                                        setDateofbirth(e.target.value)
                                      }
                                      required
                                    />
                                  </div>

                                  <div className="col-12">
                                    <label
                                      for="name"
                                      className="form-label text-dark-emphasis fw-bold"
                                    >
                                      Father Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="name"
                                      placeholder=""
                                      value={fatherName}
                                      onChange={(event) => {
                                        const updatedValue =
                                          event.target.value.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                          );
                                        setFatherName(updatedValue);
                                      }}
                                      required
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      for="name"
                                      className="form-label text-dark-emphasis fw-bold"
                                    >
                                      Professional Qualification
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="name"
                                      placeholder=""
                                      value={professional}
                                      onChange={(event) => {
                                        const updatedValue =
                                          event.target.value.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                          );
                                        setProfessional(updatedValue);
                                      }}
                                      required
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      for="name"
                                      className="form-label text-dark-emphasis fw-bold"
                                    >
                                      Job Description
                                    </label>
                                    <input
                                      type="textarea"
                                      className="form-control"
                                      id="name"
                                      placeholder=""
                                      value={description}
                                      onChange={(event) => {
                                        const updatedValue =
                                          event.target.value.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                          );
                                        setDescription(updatedValue);
                                      }}
                                      required
                                    />
                                  </div>

                                  <div className="row">
                                    <div className="col-12">
                                      <label
                                        for="name"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Interested In
                                      </label>
                                      <select
                                        value={selectOption}
                                        onChange={handleDropChange}
                                      >
                                        <option>select</option>
                                        <option value="Fulltime">
                                          Full Time
                                        </option>
                                        <option value="Parttime">
                                          Part Time
                                        </option>
                                        <option value="Contractuals">
                                          Contractual
                                        </option>
                                      </select>
                                      <br></br>
                                      <div>
                                        {selectOption === "Fulltime" && (
                                          <div>
                                            <div className="row">
                                              <div className="col-6">
                                                <label
                                                  for="Amount"
                                                  className="form-label text-dark-emphasis fw-bold"
                                                >
                                                  Current CTC
                                                </label>

                                                <input
                                                  type="number"
                                                  id="Amount"
                                                  placeholder="minimum  salary 5000"
                                                  min="5000"
                                                  className="form-control"
                                                  value={currentSalary1}
                                                  onChange={(e) =>
                                                    setCurrentSalary1(
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              </div>
                                              <div className="col-6">
                                                <label
                                                  for="Amount"
                                                  className="form-label text-dark-emphasis fw-bold"
                                                >
                                                  Expected CTC
                                                </label>

                                                <input
                                                  type="number"
                                                  id="Amount"
                                                  placeholder="minimum  salary 5000"
                                                  min="5000"
                                                  className="form-control"
                                                  value={currentSalary2}
                                                  onChange={(e) =>
                                                    setCurrentSalary2(
                                                      e.target.value
                                                    )
                                                  }
                                                  required
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      {selectOption === "Parttime" && (
                                        <div>
                                          <div className="row">
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Current hourly income
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder="minimum  salary 5000"
                                                min="500"
                                                className="form-control"
                                                value={currentSalary1}
                                                onChange={(e) =>
                                                  setCurrentSalary1(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </div>
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Expected hourly income
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder="minimum  salary 5000"
                                                min="500"
                                                className="form-control"
                                                value={currentSalary2}
                                                onChange={(e) =>
                                                  setCurrentSalary2(
                                                    e.target.value
                                                  )
                                                }
                                                required
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {selectOption === "Contractuals" && (
                                        <div className="col-12">
                                          <div className="row">
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Current CTC
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder=""
                                                min="5000"
                                                className="form-control"
                                                value={currentSalary1}
                                                onChange={(e) =>
                                                  setCurrentSalary1(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </div>
                                            <div className="col-6">
                                              <label
                                                for="Amount"
                                                className="form-label text-dark-emphasis fw-bold"
                                              >
                                                Expected CTC
                                              </label>

                                              <input
                                                type="number"
                                                id="Amount"
                                                placeholder=""
                                                min="5000"
                                                className="form-control"
                                                value={currentSalary2}
                                                onChange={(e) =>
                                                  setCurrentSalary2(
                                                    e.target.value
                                                  )
                                                }
                                                required
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      <div className="col-12">
                                        <label className="form-label text-dark-emphasis fw-bold">
                                          Address
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputAddress2"
                                          placeholder="Apartment or floor"
                                          value={address}
                                          onChange={(e) =>
                                            setAddress(e.target.value)
                                          }
                                          required
                                        />
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            Country
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputCountry"
                                            value={country}
                                            onChange={(event) => {
                                              const updatedValue =
                                                event.target.value.replace(
                                                  /[^A-Za-z\s]/g,
                                                  ""
                                                );
                                              setCountry(updatedValue);
                                            }}
                                            required
                                          />
                                        </div>

                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            State
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputState"
                                            value={state}
                                            onChange={(event) => {
                                              const updatedValue =
                                                event.target.value.replace(
                                                  /[^A-Za-z\s]/g,
                                                  ""
                                                );
                                              setState(updatedValue);
                                            }}
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            Upload Resume
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            aria-label="file example"
                                            accept=".pdf,.doc,.docx"
                                            value={resume}
                                            onChange={(e) =>
                                              setResume(e.target.value)
                                            }
                                            required
                                          />
                                        </div>
                                        <div className="col-6">
                                          <label className="form-label text-dark-emphasis fw-bold">
                                            Photo
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            aria-label="file example"
                                            value={photo}
                                            onChange={(e) =>
                                              setPhoto(e.target.value)
                                            }
                                            required
                                          />
                                        </div>
                                      </div>
                                      <br></br>
                                      <div className="col-12">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                            required
                                          />
                                          <label className="form-check-label text-dark-emphasis fw-bold">
                                            *Declaimer
                                          </label>
                                          <p>
                                            I here by declair that the above
                                            information is correct, if not am
                                            the responsible for everything
                                          </p>
                                        </div>
                                      </div>

                                      <br></br>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {selectedOption === "Religious Trainers" && (
                                <div>
                                  <div>
                                    <div className="col-12">
                                      <label
                                        for="qualification"
                                        className="form-label text-dark-emphasis fw-bold"
                                      >
                                        Qualification
                                      </label>
                                      <select
                                        className="form-select"
                                        value={qualification}
                                        onChange={(e) =>
                                          setQualification(e.target.value)
                                        }
                                      >
                                        <option>select</option>
                                        <option>Graduation</option>
                                        <option>Post Graduation</option>
                                        <option>Ph.d</option>
                                      </select>
                                      <input
                                        type="qualification"
                                        className="form-control"
                                        id="qualification"
                                        placeholder="Enter Specialization"
                                        value={specialization}
                                        onChange={(event) => {
                                          const updatedValue =
                                            event.target.value.replace(
                                              /[^A-Za-z\s]/g,
                                              ""
                                            );
                                          setSpecialization(updatedValue);
                                        }}
                                        required
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <label
                                          for="yop"
                                          className="form-label text-dark-emphasis fw-bold"
                                        >
                                          Years of Experience
                                        </label>
                                        <input
                                          type="number"
                                          className="form-control"
                                          id="yop"
                                          placeholder="years"
                                          value={years}
                                          onChange={handleYearsChange}
                                          required
                                        />
                                      </div>
                                      <div className="col-12">
                                        <div className="row">
                                          <div className="col-md-3">
                                            <label
                                              for="name"
                                              className="form-label text-dark-emphasis fw-bold"
                                            >
                                              Languages
                                            </label>
                                            <label></label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="name"
                                              placeholder=" "
                                              value={language1}
                                              onChange={(event) => {
                                                const updatedValue =
                                                  event.target.value.replace(
                                                    /[^A-Za-z\s]/g,
                                                    ""
                                                  );
                                                setLanguage1(updatedValue);
                                              }}
                                              required
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <label
                                              for="name"
                                              className="form-label text-dark-emphasis fw-bold"
                                            ></label>
                                            <label></label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="name"
                                              placeholder=" "
                                              value={language2}
                                              onChange={(event) => {
                                                const updatedValue =
                                                  event.target.value.replace(
                                                    /[^A-Za-z\s]/g,
                                                    ""
                                                  );
                                                setLanguage2(updatedValue);
                                              }}
                                              required
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <label></label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="name"
                                              placeholder=" "
                                              value={language3}
                                              onChange={(event) => {
                                                const updatedValue =
                                                  event.target.value.replace(
                                                    /[^A-Za-z\s]/g,
                                                    ""
                                                  );
                                                setLanguage3(updatedValue);
                                              }}
                                              required
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <label></label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="name"
                                              placeholder=" "
                                              value={language4}
                                              onChange={(event) => {
                                                const updatedValue =
                                                  event.target.value.replace(
                                                    /[^A-Za-z\s]/g,
                                                    ""
                                                  );
                                                setLanguage4(updatedValue);
                                              }}
                                              required
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <label
                                            for="name"
                                            className="form-label text-dark-emphasis fw-bold"
                                          >
                                            Proficiency in languages
                                          </label>
                                          <select
                                            className="form-select"
                                            value={proficiency}
                                            onChange={(e) =>
                                              setProficiency(e.target.value)
                                            }
                                          >
                                            <option>select</option>
                                            <option>Beginner</option>
                                            <option>Intermediate </option>
                                            <option>Expert</option>
                                          </select>
                                        </div>

                                        <br></br>

                                        <div className="col-6">
                                          <label
                                            for="name"
                                            className="form-label text-dark-emphasis fw-bold"
                                          >
                                            Type of Mode
                                          </label>
                                          <select
                                            className="form-select"
                                            value={typeofmode}
                                            onChange={(e) =>
                                              setTypeofmode(e.target.value)
                                            }
                                          >
                                            <option>select</option>
                                            <option>Online</option>
                                            <option>Offline </option>
                                            <option>Hybrid</option>
                                          </select>
                                        </div>
                                      </div>

                                      <br></br>
                                      <div className="row">
                                        <div className="col-12">
                                          <label
                                            for="name"
                                            className="form-label text-dark-emphasis fw-bold"
                                          >
                                            Interested In
                                          </label>
                                          <select
                                            value={selectOption}
                                            onChange={handleDropChange}
                                          >
                                            <option>select</option>
                                            <option value="Full time">
                                              Full Time
                                            </option>
                                            <option value="Part time">
                                              Part Time
                                            </option>
                                            <option value="Contractua">
                                              Contractual
                                            </option>
                                          </select>

                                          <div>
                                            {selectOption === "Full time" && (
                                              <div>
                                                <div className="row">
                                                  <div className="col-6">
                                                    <label
                                                      for="Amount"
                                                      className="form-label text-dark-emphasis fw-bold"
                                                    >
                                                      Current CTC
                                                    </label>

                                                    <input
                                                      type="number"
                                                      id="Amount"
                                                      placeholder="minimum  salary 5000"
                                                      min="5000"
                                                      className="form-control"
                                                      value={currentSalary1}
                                                      onChange={(e) =>
                                                        setCurrentSalary1(
                                                          e.target.value
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                  <div className="col-6">
                                                    <label
                                                      for="Amount"
                                                      className="form-label text-dark-emphasis fw-bold"
                                                    >
                                                      Expected CTC
                                                    </label>

                                                    <input
                                                      type="number"
                                                      id="Amount"
                                                      placeholder="minimum  salary 5000"
                                                      min="5000"
                                                      className="form-control"
                                                      value={currentSalary2}
                                                      onChange={(e) =>
                                                        setCurrentSalary2(
                                                          e.target.value
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                          {selectOption === "Part time" && (
                                            <div>
                                              <div className="row">
                                                <div className="col-6">
                                                  <label
                                                    for="Amount"
                                                    className="form-label text-dark-emphasis fw-bold"
                                                  >
                                                    Current hourly income
                                                  </label>

                                                  <input
                                                    type="number"
                                                    id="Amount"
                                                    placeholder="minimum  salary 5000"
                                                    min="500"
                                                    className="form-control"
                                                    value={currentSalary1}
                                                    onChange={(e) =>
                                                      setCurrentSalary1(
                                                        e.target.value
                                                      )
                                                    }
                                                  />
                                                </div>
                                                <div className="col-6">
                                                  <label
                                                    for="Amount"
                                                    className="form-label text-dark-emphasis fw-bold"
                                                  >
                                                    Expected hourly Income
                                                  </label>

                                                  <input
                                                    type="number"
                                                    id="Amount"
                                                    placeholder="minimum salary 5000"
                                                    min="500"
                                                    className="form-control"
                                                    value={currentSalary2}
                                                    onChange={(e) =>
                                                      setCurrentSalary2(
                                                        e.target.value
                                                      )
                                                    }
                                                    required
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          )}
                                          {selectOption === "Contractua" && (
                                            <div className="col-12">
                                              <div className="row">
                                                <div className="col-6">
                                                  <label
                                                    for="Amount"
                                                    className="form-label text-dark-emphasis fw-bold"
                                                  >
                                                    Current CTC
                                                  </label>

                                                  <input
                                                    type="number"
                                                    id="Amount"
                                                    placeholder=""
                                                    min="5000"
                                                    className="form-control"
                                                    value={currentSalary1}
                                                    onChange={(e) =>
                                                      setCurrentSalary1(
                                                        e.target.value
                                                      )
                                                    }
                                                  />
                                                </div>
                                                <div className="col-6">
                                                  <label
                                                    for="Amount"
                                                    className="form-label text-dark-emphasis fw-bold"
                                                  >
                                                    Expected CTC
                                                  </label>

                                                  <input
                                                    type="number"
                                                    id="Amount"
                                                    placeholder=""
                                                    min="5000"
                                                    className="form-control"
                                                    value={currentSalary2}
                                                    onChange={(e) =>
                                                      setCurrentSalary2(
                                                        e.target.value
                                                      )
                                                    }
                                                    required
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          )}

                                          <br></br>
                                        </div>
                                      </div>
                                      <div className="mb-3">
                                        <label className="form-label text-dark-emphasis fw-bold">
                                          Certifications
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control"
                                          aria-label="file example"
                                          accept=".pdf,.doc,.docx"
                                          value={certifications}
                                          onChange={(e) =>
                                            setCertifications(e.target.value)
                                          }
                                          required
                                        />
                                      </div>
                                      <br></br>
                                      <div className="col-12">
                                        <label className="form-label text-dark-emphasis fw-bold">
                                          Statement of Faith
                                        </label>
                                        <input
                                          type="textarea"
                                          className="form-control"
                                          id="name"
                                          placeholder=""
                                          value={statement}
                                          onChange={(event) => {
                                            const updatedValue =
                                              event.target.value.replace(
                                                /[^A-Za-z\s]/g,
                                                ""
                                              );
                                            setStatement(updatedValue);
                                          }}
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-12">
                                    <label className="form-label text-dark-emphasis fw-bold">
                                      Address
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputAddress2"
                                      placeholder="Apartment or floor"
                                      value={address}
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <label className="form-label text-dark-emphasis fw-bold">
                                        Country
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputCountry"
                                        value={country}
                                        onChange={(event) => {
                                          const updatedValue =
                                            event.target.value.replace(
                                              /[^A-Za-z\s]/g,
                                              ""
                                            );
                                          setCountry(updatedValue);
                                        }}
                                        required
                                      />
                                    </div>

                                    <div className="col-6">
                                      <label className="form-label text-dark-emphasis fw-bold">
                                        State
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputState"
                                        value={state}
                                        onChange={(event) => {
                                          const updatedValue =
                                            event.target.value.replace(
                                              /[^A-Za-z\s]/g,
                                              ""
                                            );
                                          setState(updatedValue);
                                        }}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <label className="form-label text-dark-emphasis fw-bold">
                                        Upload Resume
                                      </label>
                                      <input
                                        type="file"
                                        className="form-control"
                                        aria-label="file example"
                                        accept=".pdf,.doc,.docx"
                                        value={resume}
                                        onChange={(e) =>
                                          setResume(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label className="form-label text-dark-emphasis fw-bold">
                                        Photo
                                      </label>
                                      <input
                                        type="file"
                                        className="form-control"
                                        aria-label="file example"
                                        accept=".pdf,.doc,.docx"
                                        value={photo}
                                        onChange={(e) =>
                                          setPhoto(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <br></br>
                                  <div className="col-12">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                        required
                                      />
                                      <label className="form-check-label text-dark-emphasis fw-bold">
                                        * Declaimer
                                      </label>
                                      <p>
                                        I here by declair that the above
                                        information is correct, if not am the
                                        responsible for everything
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {error && (
                                <p style={{ color: "red" }}>{errorMessage}</p>
                              )}
                              <br></br>
                              <div className="col-12 text-center">
                                <button
                                  className="btn btn-primary"
                                  disabled={!isValidEmail}
                                >
                                  Sign Up
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>

                        <br></br>
                        <p className="pt-3">Already Have a Account?Login</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registrationform;
