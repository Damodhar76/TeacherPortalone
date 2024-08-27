import { Link, useNavigate } from "react-router-dom";


const Institutenavbar = () => {
  const navigate = useNavigate();
  const instituteName = localStorage.getItem('instituteName');

  const Logout = () => {
    navigate("/");
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString(); // Convert to local date and time string
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-secondary"
        style={{ fontFamily: "sans-serif" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg"
              className="img-fluid rounded"
              style={{ width: "100px", height: "100px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-lg-0">
              {/* <li className="nav-item">
                <div className="d-flex">
                  <input
                    className="form-control"
                    placeholder="Search for the profiles"
                  />
                  <button className="btn btn-warning ms-1">Search</button>
                </div>
              </li> */}
            </ul>
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item ">
                <Link
                  class="nav-link active fs-5 "
                  aria-current="page"
                  to="/institutehome"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item ps-5">
                <Link class="nav-link active fs-5 " to="/Institutecontact">
                  ContactUs
                </Link>
              </li>
              {/* <li class="nav-item ps-3 mt-1">
          <Link class="nav-link active btn btn-warning text-dark fw-bold" to='/postjob' aria-disabled="true"><i class="fa-solid fa-plus fs-5 fw-bold text-Warning"></i>   Post a New Job</Link>
        </li> */}
              <li class="nav-item dropdown ps-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-user fs-5 fw-bold"></i>{" "}
                 <b> {instituteName}</b>
                </a>

                <p className="date-time">
              {getCurrentDateTime()}
            </p>


                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/instituteprofile">
                      MyProfile
                    </Link>
                  </li>
                  <li>
                    <button class="dropdown-item btn" onClick={Logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Institutenavbar;
