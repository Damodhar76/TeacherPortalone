import React, { useState } from 'react';

import './Longin.css';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Longin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8086/api/login', { email, password });
     
      if (response.data === 'User authenticated successfully') {        
        navigate('/Admin'); // Correct usage for React Router v6
      } else {
        setErrorMessage('Unexpected response from the server.');
      }
    } catch (error) {
      setErrorMessage('Login failed!');
    }
  };

  return (
    <dir className="Damu position-relative">
       <div className="formcl position-absolute top-50 start-50">
    
        
          <div className="Textsa">Admin Login</div>
          <center>

          </center>
          <form action="" className="longform" onSubmit={handleSubmit}>
            <input
              required=""
              className="paswors"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required=""
              className="paswors"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          
            <input className="login-button" type="submit" defaultValue="Sign In" />
            </form>
          {errorMessage && <p>{errorMessage}</p>}
      
      </div>
    </dir>
   
  );
}

export default Longin;
