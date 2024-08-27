import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EducationInstitues.css";
import Institutenavbar from "./Institutenavbar";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParam, useNavigate } from "react-router-dom";

const EducationInstitutes = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [originalData,setOriginalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    //fetch
    fetch("http://localhost:9090/prava/all")
      .then((response) => response.json())
      .then((value) => {
        setOriginalData(value);
        setData(value);
      });
  }, []);

  const handleSearch = () => {
    const filteredData = originalData.filter((item) => {
      const lowercaseSearchQuery = searchQuery.toLowerCase();
      return (
        item.firstName?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.currentSalary1?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.address?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.selectedOption?.toLowerCase().includes(lowercaseSearchQuery)
      );
    });
    setData(filteredData);
  };


  const handleClick = (userId) => {
    navigate("/OfferLetter1");
  };

  return (
    <div>
      <Institutenavbar />
      <div
        className="container-fluid justify-content-center mt-3"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="row">
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2"
            style={{ fontFamily: "sans-serif" }}
          >
            <div
              className="bg-body-secondary rounded"
              style={{ paddingBottom: "100px", paddingTop: "50px" }}
            >
              <div className="mx-auto text-center">
                <Link
                  to="/instituteprofile"
                  className="btn btn-body-secondary text-dark text-center fs-4 p-3"
                >
                  Profile
                </Link>
              </div>
              <div className="mx-auto text-center">
                <Link
                  to="/PostedJobs"
                  className="btn text-dark text-center p-3 fs-4 mt-4"
                >
                  PostedJobs
                </Link>
              </div>
              <div className="mx-auto text-center">
                <Link
                  to="/JobPost"
                  className="btn text-dark text-center p-3 fs-4 mt-4"
                >
                  Post A Job
                </Link>
              </div>
              <div className="mx-auto text-center">
                <Link
                  to="/CandidatesShortlisted"
                  className="btn text-dark text-center p-3 fs-4 mt-4"
                >
                  Shortlisted
                </Link>
              </div>
           
              <div className="mx-auto text-center">
                <Link
                  to="/CandidatesSelected"
                  className="btn text-dark text-center p-3 fs-4 mt-4"
                >
                  Candidates Selected
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-10 col-xl-10 col-xxl-10 mt-2">
            <div className="d-flex">
              <input
                className="form-control"
                style={{ width: "800px", height: "40px" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for the profiles"
              />
              <button className="btn btn-warning"
              onClick={handleSearch}
               
               > Search
              </button>
            </div>
            <div className="d-flex justify-content-between mt-3 p-3">
              <div>
                <figure className="figure m-2 col p-2 ">
                  <Link
                    to="/CandidatesApplied"
                    className="text-dark text-center"
                  >
                    <center>
                      <img
                        className="imgfr"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEX/////swD/oAD/ngD/s1b/wlb/sAD/th7/tAD/sQD/mwD/rgD/nQD/ogD/qgD/rAD/pgD/+u//y2j///r/36P/pRD/8tj/rS3/xVL/z3X/9N7/+On//fb/5MH/4bj/x3z/sR7/vCr/15H/7cn/zIb/2pn/2KT/5bT/v2r/uFL/wnL/04P/3a//z5D/6s//z3D/wkT/tUn/tU3/rz7/vV7/4av/4Lj/sTO/6uXPAAAEIklEQVR4nO3di3aiMBQFUIQpDSC1Lb6qth1r3+9pdeb//2ywlZJWiCTITcw65wPC7CGGe3B16TgIgiAIgiAIgiAIgiAIYnrOzge93/uNZzq8mOngHV2GYdvzolbQfPyIXU2ogddu6KZJhSQJInZDC7wNPZdSuDSeUALvPm4gqbDVio7pgPcZkFTYih6ogI85kFTYiojO1MTzVr74wKcEtgJGI3zKbmGHMVJgehO7JMJedoxS+9KbOKUAPn/eQu+AHpgS+wTC1SaNNfjSbbogEM49fbewFbwQCH955A9CTrgHIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIoX1C2m/wdQjtv4cQQgihfiHOUgghhLB5of0njf1C+3ep/UL7dymEEEIIIYQQQgghhBBCCCGEFYQuhDsvtH+XQgih+UKcNBCaL8QuhdB8IXYphBBCCCGEEEIIIYQQQghhFaH97QnC3RficwghhBBCWF+IsxRCCCGEsL4QZymEEEIIIYQNCuv97ekOCON6v4thvDCIa/7yh+nCFGi3MAXW/fUWo4XM/5hn7RWyyLVbuALaK2SRZ7eQdVZA1zsMbBSygwzYHoxe68x7hgpzYDiYOMmwxuBmppAdfgH/JMsVjtWJRgo54Hy1xIky0UhhDrz/WuNBlWiiMAeec4tcKBLNEy5H0RXw6dsqXTWiccJSoOMsfJUHo2FC9gX0wuu1dc5UiGYJP8vEJ/CsYKFZIE80SpjN2svfRT4tXKnPpIkmCTmg+1yy1GhflmiQkHVy4Kh0rbEs0RxhXiba8ZFgsclUbg43RsiXCREwJQ6liKYIuTLxLgY6TrIn8+w3RMjN2m/J5gVlqoYZwoIyIY5E1TBDWFQmxKleNYwQxoVlQpyrzg4Jc+ClxKKLqNqDkVJY/C8Sztqi3FQbUnUL+TLxKLlstTlcs5AFeZkonrVF6VdpU3o/h3yZKJu1RRlVqBpa7yEHjFWAKXG6kahTyJWJuLxMiDPeSNQo5MpEb6y89mTTK399QplZW5RkQ9XQdtJwwLdJrdU3VA1dQv6bidrrC6uGpl0qXSbEEc3hmoTyZUIcwSt/PUK1WVuUbmnV0CIsf3GvntKqoeGkUS4T4pRVDXIhXyb+bvUqJVWDepfy30zIlwlx+oVEYmGVF/fqKXzlTyvkgL1+AxcqmsNJhVyZqDFri3K0/sqfVMiViTqztijrVYNSmA8y7xXea6vmZ9WgFG5x1hblxxxOIpy3XS7hXcOXe/lG9B8avtwypyEPvG38et+qRjRr/Hpp3vObuLVZWxSuavhDguulh7jbzgaZ7c3aonSzOdzfr/cCoXLGg7DteV7Yln2vrZoZi4Ig8DvDph5L6zmd93r/ron+Q9Mki+H09YTkM4ggCIIgCIIgCIIgCIIgivkP8YKLx8DSOWoAAAAASUVORK5CYII="
                        style={{ width: "50px", height: "50px" }}
                        alt=""
                      />
                    </center>
                    <p>Candidates Applied</p>
                  </Link>
                </figure>
              </div>

              <div>
                <figure className="figure m-2 col p-2">
                  <Link
                    to="/CandidatesShortlisted"
                    className="text-dark text-center"
                  >
                    <center>
                      <img
                        src="https://static-00.iconduck.com/assets.00/text-wiki-icon-194x256-ndpedkr6.png"
                        style={{ width: "50px", height: "50px" }}
                        alt=""
                      />
                    </center>

                    <p>Candidates Shortlisted</p>
                  </Link>
                </figure>
              </div>
              <div>
                <figure className="figure m-2 col p-2">
                  <Link
                    to="/CandidatesSelected"
                    className="text-dark text-center "
                  >
                    <center>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaWDEEnHBbevPrIAHCfSpa3EwgUFV_J3ULUuY0yrQbec9Z6m6scmlQpx_1zPisG0zhE4&usqp=CAU"
                        style={{ width: "50px", height: "50px" }}
                        alt=""
                      />
                    </center>
                    <p> Candidates Selected</p>
                  </Link>
                </figure>
              </div>
            </div>
            <div>
              <h3 className="text-center p-2 mt-3">
                Top Trainers Profiles list
              </h3>
              <div
                style={{ overflowY: "auto", maxHeight: "400px" }}
                className="rounded"
              >
                <div className="row">
                  {data.map((list) => {
                    return (
                      <>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div class="card mt-3 bg-body-secondary shadow-lg">
                            <div class="card-body ">
                              <div className="d-flex justify-content-around">
                                <p class="card-title p-2 fs-5">
                                  <i class="fa-solid fa-user text-warning fw-bold fs-5"></i>{" "}
                                  {list.firstName} {list.lastName}
                                </p>
                              </div>
                              <div className="d-flex justify-content-around">
                                <p className="">
                                  <i class="fa-solid fa-indian-rupee-sign text-warning fs-5 fw-bold"></i>{" "}
                                  {list.currentSalary1}
                                </p>
                                <p className="">
                                  <i class="fa-solid fa-clock text-warning fs-5 fw-bold"></i>{" "}
                                  {list.years} Years
                                </p>
                              </div>
                              <div className="d-flex justify-content-around">
                                <p className="">
                                  <i class="fa-solid fa-location-dot text-warning fs-5 fw-bold"></i>{" "}
                                  {list.address}
                                </p>
                                <p className=" ">
                                  <i class="fa-solid fa-suitcase text-warning fs-5 fw-bold"></i>{" "}
                                  {list.selectedOption}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  {/* </Slider> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="row mt-3">
            <div className="col-12">
                <div className="d-flex justify-content-between p-2">
                    <div>
                        <img
                            src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg"
                            className="img-fluid rounded"
                            style={{ width: "80px", height: "80px" }}
                        />
                    </div>
                    <div>
                        <div className="d-flex justify-content-around mt-3">
                            <div className="m-1">
                             
                                <a href="https://www.linkedin.com/dashboard" target="_blank">
                                    <i class="fa-brands fa-linkedin-in fs-4 p-2 rounded text-white bg-primary"></i>
                                </a>
                            </div>
                            <div className="m-1">
                               
                                <a href="https://www.facebook.com/dashboard" target="_blank">
                                    <i class="fa-brands fa-facebook fs-4 p-2 text-white bg-primary rounded"></i>
                                </a>
                            </div>
                            <div className="m-1">
                           
                                <a href="https://www.instagram.com/dashboard" target="_blank">
                                    <i class="fa-brands fa-instagram fs-4 p-2 text-white bg-danger rounded"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default EducationInstitutes;
