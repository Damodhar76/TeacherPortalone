import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from 'react-apexcharts';
import './Admin.css'
import { Link } from 'react-router-dom';
import Admin_Dasbod from "./Admin_Dasbod";

const Admin = () => {
  const [entityAData, setEntityAData] = useState([]);
  const [entityBData, setEntityBData] = useState([]);
  const [entityCData, setEntityCData] = useState([]);
  const [isNewBadgeVisible, setIsNewBadgeVisible] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseA = await axios.get('http://localhost:9090/api/signup/all');
      const responseB = await axios.get('http://localhost:9090/prava/all');
      const responseC = await axios.get('http://localhost:9090/jobs/jobPosts');
      setEntityAData(responseA.data);
      setEntityBData(responseB.data);
      setEntityCData(responseC.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const entityDDataLength = entityCData.length + entityBData.length;
  const entityCDataLength = entityCData.length;
  const entityBDataLength = entityBData.length;
  const entityADataLength = entityAData.length;

  const handleBadgeClick = () => {
    setIsNewBadgeVisible(false);
  };

  useEffect(() => {
    const filteredAUsers = entityBData.filter(item => item.selectedOption === 'Religious Trainers');
    const filteredBUsers = entityBData.filter(item => item.selectedOption === 'Skilled Trainers');
    const filteredCUsers = entityBData.filter(item => item.selectedOption === 'Teachers');

    const Teachers = filteredCUsers.length;
    const Skilled = filteredBUsers.length;
    const Religious = filteredAUsers.length;

    setData({
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Religious Trainers', 'Skilled Trainers', 'Teachers']
        }
      },
      series: [
        {
          name: "Count",
          data: [Religious, Skilled, Teachers]
        }
      ]
    });
  }, [entityBData]);

  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Religious Trainers', 'Skilled Trainers', 'Teachers']
      },
      colors: ['#008FFB', '#00E396', '#FEB019'], 
      plotOptions: {
        bar: {
          horizontal: false, 
          columnWidth: '35%', 
          endingShape: 'rounded' 
        }
      },
      dataLabels: {
        enabled: true 
      },
      grid: {
        borderColor: '#f1f1f1' 
      },
      tooltip: {
        enabled: true, 
        shared: false 
      }
    },
    series: [
      {
        name: "Count",
        data: [0, 0, 0]
      }
    ]
  });

  return (
    <div className='madimi-one-regular'>
      <Admin_Dasbod />
      <div className='row ms-5 cordsdamu'>
        <div className='col-6 col-sm-2 col-md-2 col-lg-2 eifig position-relative'>
          {isNewBadgeVisible && <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle" onClick={handleBadgeClick}>New</span>}
          <p className='fs-5'>Institutes </p>
          <h6><Link className='link-underline link-underline-opacity-0' to="/InstituteDitails">View Users Details</Link></h6>
        </div>

        <div className='col-6 col-sm-2 col-md-2 col-lg-2 eifig position-relative'>
          <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle">New</span>

          <p className='fs-5'>Trainers</p>
          <h6><Link className='link-underline link-underline-opacity-0' to="/TrinershDtails">View User Details</Link></h6>
        </div>
        <div className='col-6 col-sm-2 col-md-2 col-lg-2 eifig'>
          <p className='fs-5'>Institute Jobs</p>
          <h6><Link className='link-underline link-underline-opacity-0' to="/InstituteJobsDtails">Post Jobs</Link></h6>
        </div>
        <div className='col-6 col-sm-2 col-md-2 col-lg-2 eifig'>
          <p className='fs-5'>TecherPortal</p>
          <h6><Link className='link-underline link-underline-opacity-0' to="/Profiles">View All Details</Link></h6>
        </div>
      </div>

      <div className='row ms-5 mb-3 grapsss'>
        <div className='col-12 col-sm-4 col-lg-5 areygrap'>
          <p className='fs-4 m-2'>TecherPortal Report</p>

          <div className="donut">
            <Chart
              type="donut"
              width={500}
              height={350}
              series={[entityADataLength, entityBDataLength, entityCDataLength, entityDDataLength]}
              options={{
                labels: ['Institute', 'Trainers', 'PostJobs', 'TeacherPortal'],
                title: {
                  text: ""
                },
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                          showAlways: true,
                          fontSize: 30,
                          color: '#f90000'
                        }
                      }
                    }
                  }
                },
                dataLabels: {
                  // enabled:false,
                }
              }}
            />
          </div>
        </div>

        <div className="mixed-chart col-12 col-sm-4 col-lg-6  areygrap1">
          <p className='fs-4 m-2'>Trainers Report</p>

          <Chart
            options={data.options}
            series={data.series}
            type="bar" 
            width="550"
          />
        </div>

      </div>

    </div>

  );
}
export default Admin;
