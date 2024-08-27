import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import * as XLSX from 'xlsx';
import Admin_Dasbod from './Admin_Dasbod';

const Profiles = () => {
  const [entityAData, setEntityAData] = useState([]);
  const [entityBData, setEntityBData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEntityAData, setFilteredEntityAData] = useState([]);
  const [filteredEntityBData, setFilteredEntityBData] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchQuery, entityAData, entityBData]);

  const fetchData = async () => {
    try {
      const responseA = await axios.get('http://localhost:9090/api/signup/all');
      const responseB = await axios.get('http://localhost:9090/prava/all');
      setEntityAData(responseA.data);
      setEntityBData(responseB.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = () => {
    const filteredA = entityAData.filter(item =>
      `${item.name} ${item.address}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEntityAData(filteredA);

    const filteredB = entityBData.filter(item =>
      `${item.firstName} ${item.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEntityBData(filteredB);
  };

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const downloadExcel = () => {
    const wb = XLSX.utils.book_new();
   
    const ws1 = XLSX.utils.json_to_sheet(filteredEntityAData);
    const ws2 = XLSX.utils.json_to_sheet(filteredEntityBData);
    XLSX.utils.book_append_sheet(wb, ws1, "Trainers");
    XLSX.utils.book_append_sheet(wb, ws2, "Institute");
    
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (
    <div className='row'>
      <Admin_Dasbod/>
      <div className='row'>

        <div className='search-container inserch'>
          <center>
          <input
          className='inputber col-10 col-sm-9 col-md-8 col-lg-7'
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button  class="bottsymbal btn btn-primary" onClick={filterData}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search searic" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg></button>
         
          </center>
          
        </div>
        <div >
          <center><h1 className='fs-3 text-info'>Trainers</h1></center>
          <center><img src="https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg" alt="" /></center> 
          <div className='row m-3 table-secondary'>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-primary'><b>FirstName</b> </div>
            <div className='col-6 col-sm-3 col-lg-3 border border-dark bg-primary'><b>LastName</b> </div>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-primary'><b>Email</b> </div>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-primary'><b>Mobile Number</b> </div>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-primary'><b>Address</b></div>
          </div>  
          {filteredEntityBData.map(item => (
            <div className='row m-3' key={item.id}>
              <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.firstName}</div>
              <div className='col-6 col-sm-3 col-lg-3 border border-info'>{item.lastName}</div>
              <div className='col-6 col-sm-2 col-lg-2 border border-info overflow-hidden'>{item.email}</div>
              <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.mobileNumber}</div>
              <div className='col-6 col-sm-2 col-lg-2 border border-info'>{item.address}</div>
            </div> 
          ))}
        </div>
        <div>
          <center><h1 className='text-secondary'>Institute</h1></center>
          <center><img src="https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg" alt="" /></center>

          <div className='row m-3'>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-warning'><b>Institutename</b> </div>
            <div className='col-6 col-sm-3 col-lg-3 border border-dark bg-warning'><b>Email</b></div>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-warning'><b>Phone Number</b> </div>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-warning'><b>Address</b></div>
            <div className='col-6 col-sm-2 col-lg-2 border border-dark bg-warning'><b>State</b></div>
          </div>
          {filteredEntityAData.map(item => (
            <div className='row m-3' key={item.id}>
              <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.name}</div>
              <div className='col-6 col-sm-3 col-lg-3 border border-primary overflow-hidden'>{item.email}</div>
              <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.phoneNo}</div>
              <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.address}</div>
              <div className='col-6 col-sm-2 col-lg-2 border border-primary'>{item.state}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='row btnce'>
        <center className='btnce'> <button type='button' onClick={downloadExcel} className='btn btn-primary btbw m-3'>Download Excel <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
      </svg></button>
     </center>
        
        </div>
    </div>
  );
};

export default Profiles;
