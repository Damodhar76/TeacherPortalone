import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import Admin_Dasbod from './Admin_Dasbod';

const SkilledTrainers = () => {
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

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(entityBData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SkilledTrainers');
    XLSX.writeFile(workbook, 'SkilledTrainers.xlsx');
  };

  // Filter entityBData where selectedOption is 'teacher'
  const filteredUsers = entityBData.filter(item => item.selectedOption === 'Skilled Trainers');

  return (
    <div className='row'>
      <Admin_Dasbod/>
      <center className='fs-3 text-secondary'><h1>Skilled Trainers</h1></center>
      <center><img src="https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg" alt=""  /></center>
      <div className='row m-3'>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>FirstName</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>LastName</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>Email</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>Mobile Number</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>Address</div>
        <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-success'>Options</div>
      </div> 
       
      <ul className='row'>
        {filteredUsers.map(item => (
          <div className='row m-3' key={item.id}>
            <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.firstName}</div>
            <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.lastName}</div>
            <div className='col-6 col-sm-2 col-lg-2 border border-info overflow-hidden'>{item.email}</div>
            <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.mobileNumber}</div>
            <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.address}</div>
            <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.selectedOption}</div>
          </div>
        ))}
        <center className='btncenter'> <button className="btn btn-primary" onClick={exportToExcel}>Download Excel <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
    </svg></button></center>
      </ul>

     
    </div>
  );
};

export default SkilledTrainers;
