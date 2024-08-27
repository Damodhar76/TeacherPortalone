import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Landingpage.css";
const AboutUS = () => {
  return (
    
    <div className="m-2">
      <Navbar/>
      <div className="col-12 col-sm-12 col-lg-12 bg-primary-subtle">
              <h1 className="m-2">
                  <center>About US</center> 
                </h1>
              </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "1200px", width: "100%", padding: "0 20px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
            Jobs in Education stands as a premier platform for those seeking the{" "}
            <strong>latest teaching jobs</strong> and institutions offering the{" "}
            <strong>latest teaching vacancies</strong> in India. Born from a real need to streamline
            the recruitment process, our platform provides a tailored experience for both job seekers
            and employers in the educational sector.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
            For educators, our portal is a treasure trove of the{" "}
            <strong>latest job</strong> opportunities <strong>for teachers</strong>. Whether you‘re a
            seasoned professional or a fresh graduate, you will find a variety of roles that cater to
            your specialization and career aspirations. Our extensive database ensures that you have
            access to the <strong>latest teaching vacancies</strong>, making your job search efficient
            and targeted.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
            Conversely, educational institutes benefit from our dedicated services by finding qualified
            and passionate educators. With our focus on the <strong>latest job for teacher</strong>{" "}
            recruitment, we offer a streamlined and effective way for institutions to connect with
            ideal candidates. This synergy enhances the educational landscape by matching top talent
            with suitable roles, fostering growth and excellence in the education sector.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>What we are doing</h2>
          </div>
          <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
            A real life need led to the inception of Jobs in Education. The thought of a portal for
            teaching and non-teaching jobs in India came after experiencing challenges of finding
            relevant candidates for all the teaching and non-teaching roles in the education sector.
            All education institutes are always in the process of hiring teachers to meet their ever
            growing needs. With the job seekers in the education sector getting lost in the generic
            job market, we thought of bringing a comprehensive portal for teaching and non-teaching
            jobs in India to them.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
            Envisioned and actualised by Mr Shivam Agarwal, with the support of a highly experienced
            team, the Kolkata based startup was created to simplify the end to end recruitment process
            for the education sector in India. 18 years of industry experience, led us towards a
            simplified solution of recruitment through an integrated recruitment platform that
            collaborates to offer the best teaching jobs and non-teaching jobs.
          </p>
          <center>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img
                alt="All Employers"
                title="All Employers"
                loading="lazy"
                width="47.62"
                height="44"
                decoding="async"
                src="https://www.jobsineducation.net/_next/static/media/School.3d3f8a4d.svg"
                style={{ marginBottom: "5px", width: "47.62px", height: "44px" }}
              />
              <div style={{ fontSize: "16px" }}>
                6000 <br />
                <span style={{ fontSize: "14px" }}>Employers</span>
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
                alt="Job Posts"
                title="Job Posts"
                loading="lazy"
                width="31.24"
                height="44"
                decoding="async"
                src="https://www.jobsineducation.net/_next/static/media/Job-list.5e40a6ca.svg"
                style={{ marginBottom: "5px", width: "31.24px", height: "44px" }}
            />
            <div style={{ fontSize: "16px" }}>
                7500 <br />
                <span style={{ fontSize: "14px" }}>Job Posts</span>
            </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
                alt="Free Signup"
                title="Free Signup"
                loading="lazy"
                width="41.16"
                height="44"
                decoding="async"
                src="https://www.jobsineducation.net/_next/static/media/freesignup.98e533b3.svg"
                style={{ marginBottom: "5px", width: "41.16px", height: "44px" }}
            />
            <div style={{ fontSize: "16px" }}>
                Free <br />
                <span style={{ fontSize: "14px" }}>Signup</span>
            </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
                alt="Relevant Matchmaking"
                title="Relevant Matchmaking"
                loading="lazy"
                width="36.91"
                height="44"
                decoding="async"
                src="https://www.jobsineducation.net/_next/static/media/relevant_match.99708b2c.svg"
                style={{ marginBottom: "5px", width: "36.91px", height: "44px" }}
            />
            <div style={{ fontSize: "16px" }}>
                Relevant <br />
                <span style={{ fontSize: "14px" }}>Matchmaking</span>
            </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
                alt="Resume Builder"
                title="Resume Builder"
                loading="lazy"
                width="31.24"
                height="44"
                decoding="async"
                src="https://www.jobsineducation.net/_next/static/media/resume-builder.2bc38adb.svg"
                style={{ marginBottom: "5px", width: "31.24px", height: "44px" }}
            />
            <div style={{ fontSize: "16px" }}>
                Free <br />
                <span style={{ fontSize: "14px" }}>Resume Builder</span>
            </div>
            </div>
            </div>
          </center>

          </div>
        </div>
        {/* footer */}
        <footer className="footer-bg py-4 border border-success">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 col-md-12 col-lg-12 text-center d-flex position-relative ">
                        <div className="footer-logo ms-2">
                            <img src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg" alt="Logo" className="img-fluid rounded-circle" />
                        </div>
                        <div className="footer-links d-flex me-4 position-absolute bottom-0 end-0 ">
                            <div className="left-links  ">
                                <Link to="/AboutUS" className="link link-underline link-underline-opacity-0">About Us</Link>
                                <Link to="/Contactus" className="link link-underline link-underline-opacity-0">Contact</Link>
                            </div>
                            <div className="right-links  ">
                                <Link to="/PrivacyPolicy" className="link link-underline link-underline-opacity-0">Privacy Policy</Link>
                                <Link to="/TermsConditions" className="link link-underline link-underline-opacity-0">Terms & Conditions</Link>                                
                                <Link to="/Blog1" className="link link-underline link-underline-opacity-0">Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    
  );
};

export default AboutUS;
