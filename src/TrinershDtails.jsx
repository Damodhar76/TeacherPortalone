import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrinershDtails.css';
import * as XLSX from 'xlsx';
import Admin_Dasbod from './Admin_Dasbod';

const TrinershDtails = () => {
  
  const [entityBData, setEntityBData] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseB = await axios.get('http://localhost:9090/prava/all');
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TrinershDtails');
    XLSX.writeFile(workbook, 'TrinershDtails.xlsx');
  };

  return (
    <div className='row body '>
      <Admin_Dasbod/>
      <center className='fs-3 text-secondary'><h1>Trainers Details</h1></center><br />
      <center><img src="https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg" alt="" width={300} /></center>
       <div className='row m-3'>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>FirstName</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>LastName</div>
        <div className='col-6 col-sm-3 col-lg-3 border border-dark bg-success'>Email</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>Mobile Number</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>Address</div>
      </div>     
     
    {entityBData.map(item => (
    <div className='row m-3' key={item.id}>
      <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.firstName}</div>
      <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.lastName}</div>
      <div className='col-6 col-sm-3 col-lg-3 border border-primary overflow-hidden'>{item.email}</div>
      <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.mobileNumber}</div>
      <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.address}</div>
      {/* <div className='col-6 col-sm-1 col-lg-1 border border-primary'>
        <button className="btn btn-danger" onClick={() => deleteEntry(item.id)}>Delete</button>
      </div> */}
    </div> 
    ))}
    <center className="btnc"><button type="button" class="btn btn-primary btnstr" onClick={downloadExcel}>Download Excel <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
    </svg></button></center>
    
    </div>
  );
};

export default TrinershDtails;
