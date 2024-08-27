import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import Admin_Dasbod from './Admin_Dasbod';

function Queries() {
  const [data, setData] = useState([]);
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9090/contactUs/getAll-feedbacts')
      .then(response => response.json())
      .then(value => {
        setData(value);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:9090/contactTrainer/getAll-feedbacks')
      .then(response => response.json())
      .then(value => {
        setTrainer(value);
      });
  }, []);

  return (

    <div className="mt-5">
       <Admin_Dasbod/>
      <h2 className="text-center mb-4">Institute Feedback</h2>
      <div className="row">
      {data.map((item) => (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <Card className="mb-4 shadow" key={item.id}>
          <Card.Body>
          
              
               
                  <Card.Title className="text-primary fw-bold">Name:</Card.Title>
                  <Card.Text>{item.name}</Card.Text>
               
              
              
                {/* <div className="form-group"> */}
                  <Card.Title className="text-primary fw-bold">Email:</Card.Title>
                  <Card.Text>{item.email}</Card.Text>
                {/* </div> */}
              
             
               
                  <Card.Title className="text-primary fw-bold">Phone:</Card.Title>
                  <Card.Text>{item.phno}</Card.Text>
               
             
             
              
                  <Card.Title className="text-primary fw-bold">Message:</Card.Title>
                  <Card.Text>{item.msg}</Card.Text>
             
          
           </Card.Body>
        
        </Card>
        </div>
       
      ))}
      </div>

{/* Trainer details */}

<h2 className="text-center mb-4">Trainer Feedback</h2>
<div className="row">
      {trainer.map((item) => (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <Card className="mb-4 shadow" key={item.userId}>
          <Card.Body>
          
              
               
                  <Card.Title className="text-primary fw-bold">Name:</Card.Title>
                  <Card.Text>{item.name}</Card.Text>
               
              
              
                {/* <div className="form-group"> */}
                  <Card.Title className="text-primary fw-bold">Email:</Card.Title>
                  <Card.Text>{item.email}</Card.Text>
                {/* </div> */}
              
             
               
                  <Card.Title className="text-primary fw-bold">Phone:</Card.Title>
                  <Card.Text>{item.phno}</Card.Text>
               
             
             
              
                  <Card.Title className="text-primary fw-bold">Message:</Card.Title>
                  <Card.Text>{item.msg}</Card.Text>
             
          
           </Card.Body>
        
        </Card>
        </div>
       
      ))}
</div>
    </div>
     
  );
}

export default Queries;
