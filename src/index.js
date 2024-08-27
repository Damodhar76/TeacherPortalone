import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Jobspage from "./Jobspage";
import Contactus from "./Contactus";
import Registrationform from "./Registerform";
import AppliedJobs from "./AppliedJobs";
import Landingpage from "./Landingpage";
import Educational from "./Educational";
import EducationLogin from "./EducationLogin";
import Forgotp from "./Forgotp";
import Changepassword from "./Changepassword";
import TrainerLogin from "./TrainerLogin";
import Trainercontact from "./Trainercontact";
import EducationInstitutes from "./EducationInstitutes";
import Institutecontact from "./Institutecontactus";
import Institutecandidsave from "./Institutecandidatessaved";
import InstituteCandApplied from "./InstituteCandApplied";
import Notifications from "./Notifications";
import Instituteprofile from "./Instituteprofile";
import TrainerProfile from "./TrainerProfile";
import Add from "./Add";
import InterviewForm from "./InterviewForm";
import CandidatesApplied from "./CandidatesApplied";
import CandidatesSelected from "./CandidatesSelected";
import CandidatesShortlisted from "./CandidatesShortlisted";
import Institutecandidatessaved from "./Institutecandidatessaved";
import OfferLetter1 from "./OfferLetter1";
import JobPost from "./JobPost";
import JobPostList from "./PostedJobs";
import SavedJobs from "./SavedJobs";
import FeaturedJobs from "./FeaturedJobs";
import TrinningLandpage from "./TrainingLandPagess";
import Process from "./UnderProcess";
// Admin
import Admin from "./Admin";
import Teacher from "./Teacher";
import Profiles from "./Profiles";
import InstituteDitails from "./InstituteDitails";
import TrinershDtails from "./TrinershDtails";
import InstituteJobsDtails from "./InstituteJobsDtails";
import Longin from "./Longin";
import Reliogious from "./Reliogious";
import SkilledTrainers from "./SkilledTrainers";
import InstituteJobsCounti from "./InstituteJobsCounti";
import AdminProfile from "./AdminProfile";
import AboutUS from "./AboutUS";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";
import Blog1 from "./Blog1";
import Queries from "./Queries";
// import UploadForm from "./UploadForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<UploadForm/>} />  */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<TrainerLogin />} />
        <Route path="/Registration" element={<Registrationform />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/AppliedJobs" element={<AppliedJobs />} />
        <Route path="/Trainerhome" element={<TrinningLandpage />} />
        <Route path="/institutelogin" element={<EducationLogin />} />
        <Route path="/Registrationform" element={<Educational />} />
        <Route path="/institutehome" element={<EducationInstitutes />} />
        <Route path="/forgotpassword" element={<Forgotp />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/Trainercontact" element={<Trainercontact />} />
        <Route path="/Institutecontact" element={<Institutecontact />} />
        <Route
          path="/institutecandidatessaved"
          element={<Institutecandidatessaved />}
        />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/instituteprofile" element={<Instituteprofile />} />
        <Route path="/TrainerProfile" element={<TrainerProfile />} />
        <Route path="/JobPost" element={<JobPost />} />
        <Route path="/create" element={<Add />} />
        <Route path="/InterviewForm/:userId" element={<InterviewForm />} />
        <Route path="/Candi" element={<InstituteCandApplied />} />
        <Route path="/CandidatesApplied" element={<CandidatesApplied />} />
        <Route path="/CandidatesSelected" element={<CandidatesSelected />} />
        <Route
          path="/CandidatesShortlisted"
          element={<CandidatesShortlisted />}
        />
        <Route path="/UnderProcess" element={<Process />} />
        <Route path="/OfferLetter1" element={<OfferLetter1 />} />
        <Route path="/PostedJobs" element={<JobPostList />} />
        <Route path="/SavedJobs" element={<SavedJobs />} />
        <Route path="/FeaturedJobs" element={<FeaturedJobs />} />
        // Admin 
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/InstituteDitails" element={<InstituteDitails />} />
        <Route path="/TrinershDtails" element={<TrinershDtails />} />
        <Route path="/InstituteJobsDtails" element={<InstituteJobsDtails />} />
        <Route path="/Longin" element={<Longin />} />
        <Route path="/Reliogious" element={<Reliogious />} />
        <Route path="/SkilledTrainers" element={<SkilledTrainers />} />
        <Route path="/OfferLetter1" element={<OfferLetter1 />} />
        <Route path="/InstituteJobsCounti" element={<InstituteJobsCounti />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Queries" element={<Queries />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
