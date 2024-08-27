import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InstituteJobsDtails.css';
import * as XLSX from 'xlsx';
import Admin_Dasbod from './Admin_Dasbod';

const InstituteJobsDtails = () => {
  
  const [entityBData, setEntityBData] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseB = await axios.get('http://localhost:9090/jobs/jobPosts');
      setEntityBData(responseB.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteEntry = (id) => {
    const updatedData = entityBData.filter(item => item.id !== id);
    setEntityBData(updatedData);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(entityBData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'entityBData.xlsx');
  };

  return (
    <div className='row body'>
      <Admin_Dasbod/>
      <center><h1 className='text-primary'>Post Jobs</h1></center><br />
      <center><img src="https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg" alt="" /></center>
      
      

      <div className='row m-3'>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-secondary'><b>Company Name</b></div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-secondary'><b>Job Role</b> </div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-secondary'><b>Location</b></div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-secondary'><b>Total Experience</b></div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-secondary'><b>Post By</b></div>
      </div>
      {entityBData.map(item => (
        <div className='row m-3' key={item.id}>
          <div className='col-6 col-sm-2 col-lg-2 border border-success'>{item.company}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-success'>{item.role}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-success'>{item.location}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-success'>{item.totalExperience}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-success'>{item.postedby}</div>
          {/* <div className='col-6 col-sm-1 col-lg-1 border border-primary'>
            <button className="btn btn-danger" onClick={() => deleteEntry(item.id)}>Delete</button>
          </div> */}
        </div>
      ))}
      <center className='btncen'><button type="button" class="btn btn-primary" onClick={downloadExcel}>Download Excel <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
    </svg></button></center>
      
    </div>
  );
};

export default InstituteJobsDtails;
