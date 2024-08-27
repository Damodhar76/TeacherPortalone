import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import './InstituteJobsDtails.css';
import Admin_Dasbod from './Admin_Dasbod';

const InstituteJobsCounti = () => {
  const [entityBData, setEntityBData] = useState([]);
  const [aggregatedData, setAggregatedData] = useState([]);
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'company-job-counts'
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: 'Job Posts',
        data: []
      }
    ]
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setAggregatedData(aggregateCompanyLocation(entityBData));
  }, [entityBData]);

  useEffect(() => {
    const categories = aggregatedData.map((item) => item.company);
    const data = aggregatedData.map((item) => item.count);
    setChartData((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        xaxis: { categories }
      },
      series: [{ ...prevState.series[0], data }]
    }));
  }, [aggregatedData]);

  const fetchData = async () => {
    try {
      const responseB = await axios.get('http://localhost:9090/jobs/jobPosts');
      setEntityBData(responseB.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const aggregateCompanyLocation = (data) => {
    if (!Array.isArray(data)) {
      console.error('Data is not an array');
      return [];
    }

    const aggregation = data.reduce((acc, { company, location }) => {
      const key = `${company}-${location}`;
      if (!acc[key]) {
        acc[key] = { company, location, count: 1 };
      } else {
        acc[key].count += 1;
      }
      return acc;
    }, {});

    return Object.values(aggregation);
  };

  console.log('aggregatedData:', aggregatedData);
  console.log('chartData:', chartData);

  return (
    <div className='row body'>
      <Admin_Dasbod />
      <center>
        <h1 className='text-primary'>Company Job Posts</h1>
      </center>
      <br />
      <center>
        <img src='https://www.aptemples.ap.gov.in/static/media/head-divider.9b79d0f7.svg' alt='' width={300} />
      </center>

      <div className='row'>
        <div className='chart col-11 col-sm-8 col-lg-8  areygrap1'>
          <Chart options={chartData.options} series={chartData.series} type='area' height={300} />
        </div>
        <div className='col-o col-sm-3 col-lg-3 m-2  '>
          <img className='imgposition' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPtUiEk6PohbPhlku_1lyOx4A5EcI8DsL4Pjea7yKZi74FON9Q' alt='' />
        </div>
      </div>
    </div>
  );
};

export default InstituteJobsCounti;
