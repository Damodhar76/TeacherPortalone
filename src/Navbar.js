import { Link } from "react-router-dom";

const Navbar=()=>{

return(

<>
<nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
      <div>
    <a className="navbar-brand" href="#"><img src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg" className="img-fluid rounded" style={{width:"100px",height:"100px"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <div>
        <li className="nav-item ps-5">
          <Link className="nav-link active fs-5" style={{fontFamily:"verdana"}} aria-current="page" to='/'>Home</Link>
        </li>
        </div>
        <div>
        <li className="nav-item ps-3">
          <Link className="nav-link active fs-5" style={{fontFamily:"verdana"}} to='/contact'>Contact</Link>
        </li>
        </div>
        <div>
        <li className="nav-item ps-3">
          <Link to='/jobs' className='nav-link active fs-5' style={{fontFamily:"verdana"}}>Jobs</Link>
        </li>
        </div>
      </ul>
      <div className="d-flex justify-content-around">
        <Link to='/login' className="btn btn-warning ms-3" style={{fontFamily:"verdana"}}>Login as Trainer</Link>
        <Link to='/institutelogin' className="btn btn-warning ms-3" style={{fontFamily:"verdana"}}>Login as Institute</Link>
        <Link to='/Longin' className="btn btn-warning ms-3" style={{fontFamily:"verdana"}}>Admin</Link>

        </div>
    </div>
    </div>
</nav>
</>)

}

export default Navbar;