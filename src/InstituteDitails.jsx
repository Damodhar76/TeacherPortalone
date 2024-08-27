import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import * as XLSX from 'xlsx';
import Admin_Dasbod from './Admin_Dasbod';

const InstituteDitails = () => {
  const [entityAData, setEntityAData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseA = await axios.get('http://localhost:9090/api/signup/all');
      
      setEntityAData(responseA.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteEntry = (id) => { 
    const confirmDelete = window.confirm("Are you sure you want to delete this entry?");    
    if (confirmDelete) {    
      const updatedData = entityAData.filter(item => item.id !== id);     
      setEntityAData(updatedData);
    }
  };
  
  



  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(entityAData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'InstituteData');
    XLSX.writeFile(workbook, 'InstituteData.xlsx');
  };

  return (
    <div className='row'>
      <Admin_Dasbod/>
      <center><h1 className='text-success'>Institutes</h1></center><br />
      <center><img src="https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg" alt="" /></center>
      
      <div className='row m-3'>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-info'><b>Institutename</b></div>
        <div className='col-6 col-sm-3 col-lg-3 border border-dark bg-info'><b>Email</b></div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-info'><b>Phone Number</b></div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-info'><b>Address</b></div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-info'><b>State</b></div>
      </div>
      {entityAData.map(item => (
        <div className='row m-3' key={item.id}>
          <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.name}</div>
          <div className='col-6 col-sm-3 col-lg-3 border border-primary overflow-hidden'>{item.email}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.phoneNo}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.address}</div>
          <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.state}</div>
          <div className='col-6 col-sm-1 col-lg-1 border border-primary'>
          <button className="btn btn-danger" onClick={() => deleteEntry(item.id)}>Delete</button>
          </div>
        </div>
      ))}
      <center className='btncenter'> <button className="btn btn-primary" onClick={downloadExcel}>Download Excel <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
    </svg></button></center>
    </div>
  );
};

export default InstituteDitails;
