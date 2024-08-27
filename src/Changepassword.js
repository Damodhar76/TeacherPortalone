import axios from "axios";
import { useState ,useEffect} from "react";
import { getCustomerDetails } from "./Authstate";
import { Link } from "react-router-dom";
import { getUserDetails } from "./Authstate";
import Navbar from "./Navbar";

const Changepassword=()=>{
    const[password,setPassword]=useState('');
    const[repassword,setRepassword]=useState('');
    const[otp,setOtp]=useState('');
    const[otpdata,setData]=useState([]);


    const submit=async()=>{
        if(otp===''){
            document.getElementById('otpmessage').innerHTML='Otp is a Mandatory field';
            document.getElementById('otpmessage').style.color='red';
            document.getElementById('OTP').style.borderColor='red';
        }else if(password===''){
            document.getElementById('message').innerHTML='enter the new password';
            document.getElementById('message').style.color='red';
            document.getElementById('pass').style.borderColor='red';
        }else if(repassword===''){
            document.getElementById('remessage').innerHTML='enter the re-password';
            document.getElementById('remessage').style.color='red';
            document.getElementById('repass').style.borderColor='red';
        }
        else if(password===repassword && !otp==''){
        const data={
            password,
        }
        const userDetails=getUserDetails();
        try{
            const response=axios.put(`http://localhost:9090/prava/user/${userDetails.userId}`,data)

            setPassword('');
            document.getElementById('sucessmessage').innerHTML='your password has been changed successfully';
            document.getElementById('redirect').innerHTML='Go to Login page';
            console.log(response);
        }catch{
            console.log("some error occured");
            console.log(userDetails);
        }
    }
    }
    return(
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="container mx-auto d-block">
                <div className="row">
                    <div className="col-12">
                        <div className="card bg-body-secondary mx-auto d-block p-3 mt-5" style={{width:"30rem"}}>
                        <label className="text-dark-emphasis p-2 fw-bold">OTP </label>
                        <input type="text" placeholder="Enter the Otp Here" id="OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control"/>
                        <span id="otpmessage" className="fw-bold text-center p-2"></span>
                        <br/>
                            <label className="text-dark-emphasis p-2 fw-bold">New Password</label>
                        <input type="text" placeholder="Enter the New Password" id="pass" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                        <span id="message" className="fw-bold text-center p-2"></span>
                        <br/>
                        <label className="text-dark-emphasis p-2 fw-bold">Re-Enter Password</label>
                        <input type="text" placeholder="Re-Enter the password" id="repass" value={repassword} onChange={(e)=>setRepassword(e.target.value)} className="form-control"/>
                        <span id="remessage" className="fw-bold text-center p-2"></span>
                        <div>
                            <button className="btn btn-success mt-4 fw-bold" onClick={submit}>Change the password</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                    <span id="sucessmessage" className="text-success fw-bold text-center"></span>
                    <div className="mt-3">
                    <Link to='/Login' className="text-info fw-bold" id="redirect"></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Changepassword;