import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import Navbar from "./Navbar";

const Landingpage = () => {
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState([]);
  const [edudropdown, setEdudropdown] = useState(false);
  const Edudata = () => {
    setEdudropdown(!edudropdown);
  };
  const toggleData = () => {
    setDropdown(!dropdown);
  };

  //   useEffect(()=>{
  //     fetch('http://localhost:8085/api/signup/allUsers')
  //     .then(response=>response.json())
  //     .then(value=>setData(value))
  //   },[])

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card mt-3">
              <h3 className="card-title text-center p-3">Teachers</h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Photograph_of_Sarvepalli_Radhakrishnan_presented_to_First_Lady_Jacqueline_Kennedy_in_1962.jpg"
                alt="sraveypalli radhakrishna"
                style={{ width: "130px", height: "120px" }}
                className="img-fluid p-1 mx-auto rounded"
              />
              <ul
                style={{ listStyleType: "none" }}
                className="p-2 text-justify"
              >
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning fw-bold"></i> “A
                  teacher affects eternity; he can never tell where his
                  influence stops.”- Henry Brooks Adams
                </li>
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning fw-bold"></i> “One
                  child, one teacher, one book, one pen can change the world.” –
                  Malala Yousafzai
                </li>
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning fw-bold"></i> “If you
                  can read this, thank a teacher.”- American Proverb
                </li>
                <li className="p-1">
                  <i class="fa-solid fa-check text-warning fw-bold"></i> “When
                  educating the minds of our youth, we must not forget to
                  educate their hearts.”- Dalai Lama
                </li>
              </ul>
              <h3 className="text-center">Top10 Best Profiles</h3>
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner p-3">
                  <div class="carousel-item active ">
                    <div className="d-flex">
                      <div className="card p-1 m-2">
                        <img
                          src="https://img.freepik.com/free-photo/congratulations-you-did-test-very-well_637285-8618.jpg"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card p-1 m-2">
                        <img
                          src="https://img.freepik.com/premium-photo/teacher-front-blackboard-teaching-students-school_160360-1659.jpg"
                          className="img-fluid"
                        />
                      </div>
                      {/* <div className="card p-1 m-2">
                            <img src="https://c8.alamy.com/comp/D2EP46/confident-male-teacher-giving-lessons-in-classroom-D2EP46.jpg" className="img-fluid"/>
                            </div> */}
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex">
                      <div className="card p-1 m-2">
                        <img
                          src="https://img.freepik.com/free-photo/teacher-explaining-blackboard_1098-2784.jpg?size=626&ext=jpg&ga=GA1.1.1489331616.1701862585&semt=ais"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="card p-1 m-2">
                        <img
                          src="https://img.freepik.com/free-photo/smiling-young-female-teacher-sits-table-with-school-supplies-writing-something-grabbed-chin-classroom_141793-119790.jpg?size=626&ext=jpg&ga=GA1.1.1489331616.1701862585&semt=ais"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      {/* <div className="card p-1 m-2">
                        <img src="https://www.shutterstock.com/image-photo/young-asian-teacher-man-teaching-260nw-1928551622.jpg" class="d-block w-100" alt="..."/>
                            </div> */}
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex">
                      <div className="card p-1 m-2">
                        <img
                          src="https://img.freepik.com/free-photo/school-teacher-background-sitting-desk-students_23-2147885338.jpg?size=626&ext=jpg&ga=GA1.1.1489331616.1701862585&semt=ais"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="card p-1 m-2">
                        <img
                          src="https://img.freepik.com/free-photo/excited-young-blonde-female-teacher-wearing-glasses-classroom-standing-front-chalkboard-holding-pointer-stick-looking-sitting-teenage-student-boy-showing-empty-hand_141793-120187.jpg?size=626&ext=jpg&ga=GA1.1.1489331616.1701862585&semt=ais"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      {/* <div className="card p-1 m-2">
                        <img src="https://www.shutterstock.com/image-photo/young-asian-teacher-man-teaching-260nw-1928551622.jpg" class="d-block w-100" alt="..."/>
                            </div> */}
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon bg-warning rounded"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon bg-warning rounded"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <button
                className="btn btn-warning fw-bold mb-2"
                style={{ width: "200px", margin: "auto" }}
                onClick={toggleData}
              >
                Read More <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div>
                {dropdown && (
                  <>
                    <h2 className="ps-2 mt-3">What Trainers will get?</h2>
                    <p className="text-justify fs-5 pt-2 ps-2">
                      <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                      Free resume builder.
                    </p>
                    <p className="text-justify fs-5 pt-2 ps-2">
                      <i class="fa-regular fa-circle-check text-warning fs-5"></i>{" "}
                      Set free job alerts and get notified when matching jobs
                      are posted.
                    </p>
                    <p className="text-justify fs-5 pt-2 ps-2">
                      <i class="fa-regular fa-circle-check text-warning fs-5"></i>{" "}
                      Create multiple job preferences and get relevant job
                      suggestions as per the preferences created.
                    </p>
                    {/* <p className="text-justify fs-5 pt-2 ps-2"><i class="fa-regular fa-circle-check text-warning fs-5"></i>    Search for relevant jobs from thousands of posted jobs on JIE.</p> */}
                    <p className="text-justify fs-5 pt-2 ps-2">
                      {" "}
                      <i class="fa-regular fa-circle-check text-warning fs-5"></i>{" "}
                      Keep track of all scheduled interviews, demonstrations and
                      assessments.
                    </p>
                    <p className="text-justify fs-5 pt-2 ps-2">
                      <i class="fa-regular fa-circle-check text-warning fs-5"></i>{" "}
                      Receive offer letters directly on the JIE portal from the
                      employers.
                    </p>
                    <p className="text-justify fs-5 pt-2 ps-2">
                      <i class="fa-regular fa-circle-check text-warning fs-5"></i>{" "}
                      Teaching and Non Teaching Jobs from Delhi, Kolkata,
                      Coimbatore, Mumbai, Bengaluru, Lucknow, Chennai,
                      Hyderabad, Jaipur, Pune locations and many more.
                    </p>
                    <div className="p-3 mx-auto">
                      <Link
                        to="/login"
                        className="btn btn-warning fw-bold mx-auto"
                      >
                        Login as Trainer
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Educational Institutions  */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card mt-3">
              <h3 className="card-title text-center p-3">
                Educational Institutions
              </h3>
              <img
                src="https://assets-global.website-files.com/5f803b9261f6483ca515d44f/60e87b687a9a38042d4e1f62_Future-of-Education_banner.jpeg"
                style={{ width: "300px", height: "120px" }}
                className="img-fluid mx-auto rounded"
              />
              <ul
                style={{ listStyleType: "none" }}
                className="text-justify p-2"
              >
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning"></i>{" "}
                  <span>
                    “Education’s purpose is to replace an empty mind with an
                    open one.“ – Malcolm Forbes
                  </span>
                </li>
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning"></i>{" "}
                  <span>
                    {" "}
                    “Live as if you were to die tomorrow. Learn as if you were
                    to live forever.” ― Mahatma Gandhi
                  </span>
                </li>
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning"></i>{" "}
                  <span>
                    {" "}
                    “Education is one thing no one can take away from you.”
                    —Elin Nordegren
                  </span>
                </li>
                <li className="p-2">
                  <i class="fa-solid fa-check text-warning"></i>{" "}
                  <span>
                    {" "}
                    “Education is not preparation for life; education is life
                    itself.” —John Dewey{" "}
                  </span>
                </li>
              </ul>
              <h3 className="text-center mt-2">
                Top10 Best Educational Institutions
              </h3>
              <div id="carouselExample1" class="carousel slide">
                <div class="carousel-inner p-3">
                  <div class="carousel-item active">
                    <div className="d-flex">
                      <div className="card p-1 m-2">
                        <img
                          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                          class="d-block w-100 img-fluid"
                          alt="..."
                        />
                      </div>
                      <div className="card p-1 m-2">
                        <img
                          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                          class="d-block w-100 img-fluid"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex">
                      <div className="card p-1 m-2">
                        <img
                          src="https://images.unsplash.com/photo-1562585195-97aff4b3848c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
                          class="d-block w-100 img-fluid"
                          alt="..."
                        />
                      </div>
                      <div className="card p-1 m-2">
                        <img
                          src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
                          class="d-block w-100 img-fluid"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex">
                      <div className="card p-1 m-2">
                        <img
                          src="https://images.unsplash.com/20/cambridge.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                          class="d-block w-100 img-fluid"
                          alt="..."
                        />
                      </div>
                      <div className="card p-1 m-2">
                        <img
                          src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
                          class="d-block w-100 img-fluid"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample1"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon bg-warning rounded me-4"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden text-light fw-bold">
                    Previous
                  </span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample1"
                  data-bs-slide="next"
                >
                  <span className=" visually-hidden text-light fw-bold ms-4">
                    Next
                  </span>
                  <span
                    class="carousel-control-next-icon bg-warning rounded ms-4"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
              <button
                className="btn btn-warning fw-bold mb-2"
                style={{ width: "200px", margin: "auto" }}
                onClick={Edudata}
              >
                Read More <i class="fa-solid fa-chevron-down"></i>
              </button>
              {edudropdown && (
                <>
                  <h2 className="ps-2 mt-3">What employers will get?</h2>
                  <p className="text-justify fs-5 pt-2 ps-2">
                    <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                    One account for multiple institutes under the same group.
                  </p>
                  <p className="text-justify fs-5 pt-2 ps-2">
                    <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                    End-to-end hiring solution. Search, save, invite, shortlist,
                    schedule interview rounds, select, and send offers to
                    candidates.
                  </p>
                  <p className="text-justify fs-5 pt-2 ps-2">
                    <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                    Find relevant candidates that match your requirement. The
                    mapping is done using all the parameters that are provided
                    in the job posts hence the candidates listed will always be
                    a suitable match for the job requirement.
                  </p>
                  <p className="text-justify fs-5 pt-2 ps-2">
                    <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                    Post jobs and receive applications directly from the
                    candidates.
                  </p>
                  <p className="text-justify fs-5 pt-2 ps-2">
                    <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                    No yearly subscription, pay as per the usage.
                  </p>
                  <p className="text-justify fs-5 pt-2 ps-2">
                    <i class="fa-regular fa-circle-check text-warning fs-5 "></i>{" "}
                    Free Coins on sign-up.
                  </p>

                  <div className="p-3 mx-auto">
                    <Link
                      to="/institutelogin"
                      className="btn btn-warning fw-bold mt-4"
                    >
                      Login as Edutech
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bg py-4 border border-success">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 col-md-12 col-lg-12 text-center d-flex position-relative ">
                        <div className="footer-logo ms-2">
                            <img src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg" alt="Logo" className="img-fluid rounded-circle" />
                        </div>
                        <div className="footer-links d-flex me-4 position-absolute bottom-0 end-0 ">
                            <div className="left-links  ">
                                <Link to="/AboutUS" className="link link-underline link-underline-opacity-0">About Us</Link>
                                <Link to="/Contact" className="link link-underline link-underline-opacity-0">Contact</Link>
                            </div>
                            <div className="right-links  ">
                                <Link to="/PrivacyPolicy" className="link link-underline link-underline-opacity-0">Privacy Policy</Link>
                                <Link to="/TermsConditions" className="link link-underline link-underline-opacity-0">Terms & Conditions</Link>                                
                                <Link to="/Blog1" className="link link-underline link-underline-opacity-0">Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};
export default Landingpage;
