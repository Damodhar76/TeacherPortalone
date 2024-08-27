import React from 'react';
import { Link } from 'react-router-dom';


const Sidbar = () => (
  <div className="sidebar">
    <Link to="/Admin">Admin</Link>
    <Link to="/Accountes">/Accountes</Link>
    <Link to="/Teacher">Teacher</Link>
    <Link to="/Establish">Establish</Link>
    <Link to="/AddFeatures">AddFeatures</Link>
    <Link to="/Profiles">Profiles</Link>
    <Link to="/Forms">Forms</Link>
    <Link to="/Reports">Reports</Link>
  </div>
);

export default Sidbar;
