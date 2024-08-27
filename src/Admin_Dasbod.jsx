import React from 'react';

import './Admin_Dasbod.css';

import { Link,useNavigate } from "react-router-dom";


const Admin_Dasbod = () =>{

    const navigate = useNavigate();
    const Logout = () => {
        navigate("/");
    }
    const getCurrentDateTime = () => {
        const currentDateTime = new Date();
        return currentDateTime.toLocaleString(); 
      };
    
    
  
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-secondary">
                <div class="container-fluid">
                <div>
                <a class="navbar-brand" href="#"><img src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg" className="img-fluid rounded" style={{width:"100px",height:"100px"}}/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <div className="row">
                    <div className='col-4'>
                    <li class="nav-item ps-5">
                    <Link class="nav-link active fs-5" style={{fontFamily:"verdana"}} aria-current="page" to='/Admin'>Home</Link>
                   
                    </li>
                    </div>
                    <div className='col-6'>
                    <li class="nav-item ps-5">
                    <Link class="nav-link active fs-5" style={{fontFamily:"verdana"}} aria-current="page" to='/Queries'>Queries</Link>
                   
                    </li>
                    </div>
                    <div className="col-2">
                    <li>
                    <button type="button" class="btn btn-danger" onClick={Logout}>Logout</button>
                    </li>
                   

                    </div>
                    </div>
                  
                </ul>
                <p className="date-time">
              <b>{getCurrentDateTime()}</b>
            </p>

                                
                </div>
                </div>
            </nav>
          
            <button class="sidbtn btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
            </svg></button>

            <div class="sidbgcolaaa bg-secondary offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-light" id="offcanvasWithBothOptionsLabel"> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-person-circle m-3" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>Damodhar</h5> 
                    <button type="button " class=" btn-close closecss" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="sidtextss offcanvas-body">
                    <center><span className='sidtexthover fs-3 m-2'><Link className='link-underline link-underline-opacity-0' to="/"></Link> </span></center><hr />              
                    <center><span className='sidtexthover fs-3'> <Link className='link-underline link-underline-opacity-0' to="/Teacher">Teachers</Link></span></center><hr />                   
                    <center><span className='sidtexthover1 fs-3'> <Link className='link-underline link-underline-opacity-0' to="/Reliogious">Religious</Link> </span></center><hr />                  
                    <center><span className='sidtexthover fs-3'> <Link className='link-underline link-underline-opacity-0' to="/SkilledTrainers">SkilledTrainers</Link></span></center><hr />
                    <center><span className='sidtexthover fs-2'> <Link className='link-underline link-underline-opacity-0' to="/Profiles">Reports</Link></span></center><hr />
                    <center><span className='sidtexthover fs-2'> <Link className='link-underline link-underline-opacity-0' to="/InstituteJobsCounti">countJobs</Link></span></center><hr />
                    <center><span className='sidtexthover fs-2'> <Link className='link-underline link-underline-opacity-0' to="/AdminProfile">Profile</Link></span></center><hr />
                    
                    
                </div>
            </div>
                                         
         
        </div>
    
    );
} 
export default Admin_Dasbod;