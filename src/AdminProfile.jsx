import React,{useState} from "react";
import Admin_Dasbod from "./Admin_Dasbod";
import './AdminProfile.css';
import axios from 'axios';

const AdminProfile = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8086/api/post', { email, password });
            console.log('User created:', response.data);
           
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const defaultData={
        username : "Anarghya",
        email : "mailto:anarghya123@gmail.com",
        password : "Anarghya@123",
        title : "Administator",
        language : "English",
    }
    return(
        <div className="row">
            <Admin_Dasbod/>
            <div className="row col-11 col-sm-10 col-lg-10 cordtyp">
                <div className="imgdiv col-5 col-sm-4 col-lg-4">
                    <img className="img1" src="https://i.pinimg.com/474x/2a/63/7a/2a637ad55088ffa297ed62989b2061ff.jpg" width={100} alt="" />
                    <br />
                    <h2>Account</h2><br />
                </div>
                <div className=" textemail col-6 col-sm-5 col-lg-5">
                    <center>
                        <h2>Anarghya</h2>
                        <h4><samp classname="text-primary">anarghy23@gmail.com</samp>  - Administrator</h4>
                    </center>

                </div>
                <div className="inputspo">
                    <label>Username :</label><p className=" border border-success inputbox col-6 col-sm-7 col-lg-7" type="text" style={{marginTop: "-2%", marginLeft: "8%"}}><span className="m-2">{defaultData.username}</span> </p> 
                    <label>Email :</label>
                    <p className=" border border-success inputbox1 col-6 col-sm-7 col-lg-7" type="email" style={{marginTop: "-2%", marginLeft: "8%"}}><span className="m-2">{defaultData.email}</span> </p>
                    <label>Password :</label>
                    <p className=" border border-success inputbox1 col-6 col-sm-7 col-lg-7" type="email" style={{marginTop: "-2%", marginLeft: "8%"}}><span className="m-2">{defaultData.password}</span> </p>
                    <label>Title :</label>
                    <p className=" border border-success inputbox1 col-6 col-sm-7 col-lg-7" type="email" style={{marginTop: "-2%", marginLeft: "8%"}}><span className="m-2">{defaultData.title}</span> </p>
                    <label>Language :</label>
                    <p className=" border border-success inputbox1 col-6 col-sm-7 col-lg-7" type="email" style={{marginTop: "-2%", marginLeft: "8%"}}><span className="m-2">{defaultData.language}</span> </p>
                    <br /><br />
                    <h2>Change new password</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="col-11 col-sm-7 col-lg-7 inputbox1 border border-info"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /> <br /><br />
                        <input
                        className="col-11 col-sm-7 col-lg-7 inputbox1 border border-info"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        /><br/>
                        <button className="btn btn-warning m-2" type="submit">Submit</button>
                    </form>



                </div>

            </div>
            <br />

            <p className="fs-4 m-4">The profile page in the admin enables you to view and update your individual profile settings. This is where your avatar, email address, name, language, and more are set. For administrators, this is also where you can adjust the groups and permission levels for individual users.</p>
            <p className="fs-4 m-4">
                Accessing the profile page is simple. Once you are logged in to the admin, you can access your profile by selecting the area of the sidebar with your avatar image and name. This will take you directly to your own profile.

                Additionally, ad
            </p>

        </div>
    );
}
export default AdminProfile;
