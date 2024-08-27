import Institutenavbar from "./Institutenavbar";

const Institutecandidatessaved = () => {
  return (
    <>
      <Institutenavbar />
      <div className="container-fluid" style={{ fontFamily: "sans-serif" }}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8 mt-5">
            <div className="d-flex justify-content-between">
              <h3>Jobs Posted</h3>
            </div>
            <div>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title p-2">JobPost title</h5>
                  <p className="text-dark fs-5 pt-2">
                    <i class="fa-solid fa-building-columns"></i> InstituteName
                  </p>
                  <div className="d-flex justify-content-around">
                    <p className="fs-5">
                      <i class="fa-solid fa-indian-rupee-sign text-warning fs-5 fw-bold"></i>{" "}
                      Salary
                    </p>
                    <p className="fs-5">
                      <i class="fa-solid fa-clock text-warning fs-5 fw-bold"></i>{" "}
                      Experience
                    </p>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p className="fs-5">
                      <i class="fa-solid fa-location-dot text-warning fs-5 fw-bold"></i>{" "}
                      Location
                    </p>
                    <p className="fs-5 pe-4">
                      <i class="fa-solid fa-suitcase text-warning fs-5 fw-bold"></i>{" "}
                      FullTime
                    </p>
                  </div>
                  <div>
                    <p className="fs-5">JobPosted Date:</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institutecandidatessaved;
