import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TrainerNav = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [trainerdetails, setTrainerdetails] = useState({});
  const navigate = useNavigate();
  const trainername = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:9090/prava/user/${trainername}`)
      .then((response) => response.json())
      .then((value) => setTrainerdetails(value));
  }, []); // Add an empty dependency array

  const handleSearch = () => {
    // Filter data based on searchQuery
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.worktype.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update state with filtered data
    setData(filteredData);
    // Reset searchQuery
    setSearchQuery("");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString(); // Convert to local date and time string
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-secondary rounded">
          <a className="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg"
              className="img-fluid rounded ps-3"
              style={{ width: "100px", height: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className="d-flex justify-content-between">
                <div>
                  <li className="nav-item ps-5">
                    <Link className="nav-link active fs-5" to="/Trainerhome">
                      Home
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="nav-item ps-5">
                    <Link className="nav-link active fs-5" to="/Trainercontact">
                      ContactUs
                    </Link>
                  </li>
                </div>
               
                <li className="nav-item dropdown ps-5">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-circle-user fs-5"></i>{" "}
                    {trainerdetails.firstName || 'First Name'} {trainerdetails.lastName || 'Last Name'}
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/TrainerProfile">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
                <p className="date-time ps-5 ms-5 mt-2">
                    <p>{getCurrentDateTime()}</p>
                  </p>
              </div>
            </ul>
          </div>
          <div></div>
        </nav>
      </div>
    </>
  );
};

export default TrainerNav;
