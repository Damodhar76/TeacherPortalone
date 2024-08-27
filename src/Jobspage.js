import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Jobspage = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:9090/api/signup/all')
      .then(response => response.json())
      .then(value => {
        setOriginalData(value);
        setData(value);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9090/prava/all')
      .then(response => response.json())
      
  }, []);

  const handleSearch = () => {
    const filteredData = originalData.filter((item) => {
      const lowercaseSearchQuery = searchQuery.toLowerCase();
      return (
        item.name?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.worktype?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.address?.toLowerCase().includes(lowercaseSearchQuery) ||
        item.role?.toLowerCase().includes(lowercaseSearchQuery)
      );
    });
    setData(filteredData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-body-tertiary" style={{ fontFamily: "sans-serif" }}>
        <div className="container-fluid">
          <div className="row p-3">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <input type="text" className="form-control bg-body-secondary" style={{ width: "800px", height: "40px" }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for the Jobs.." />
                <button className="btn btn-warning fw-bold ms-2" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </div>
          <div className="row mt-4 pb-3">
            <div className="col-12 text-center fs-3">
              <p>Top Best Institute Profiles</p>
            </div>
            {data.map((list) => {
              return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={list.id}>
                  <div className="card  shadow bg-body mt-3">
                    <div className="card-body">
                      <p className="card-title fs-5"><i className="fa-solid fa-building-columns"></i>  {list.name}</p>
                      <div className="d-flex justify-content-start mt-2">
                        <span className="p-2"><i className="fa-solid fa-envelope text-warning"></i>  {list.email}</span>
                        <span className="p-2"><i className="fa-solid fa-phone text-warning"></i>  {list.phoneNo}</span>
                      </div>
                      <div className="d-flex justify-content-start">
                        <span className="p-2"><i className="fa-solid fa-suitcase text-warning"></i>  {list.worktype}</span>
                        <span className="p-2"><i className="fa-solid fa-graduation-cap text-warning"></i>       {list.boardeducation}</span>
                      </div>
                      <div className="d-flex justify-content-start">
                        <span className="p-2"><i className="fa-solid fa-location-dot text-warning"></i>  {list.address}</span>
                      </div>
                      <div className="text-end mt-2">
                        <Link to='/login' className="btn btn-warning fw-bold"><i className="fa-solid fa-circle-check"></i> More Info</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Jobspage;
