import React,{useState} from "react";
import login from '../assets/login.jpg'
import '../styles/login.scss'
import {useDispatch} from "react-redux";
import {signIn} from "../store/actions/authentication";

const Login = () => {
    const dispatch=useDispatch();
    const [email,setEmail]=useState(null);
    const [pass,setPass]=useState(null)
    return(
        <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="row  w-100 border shadow">
            <div className="col-md-7 d-flex justify-content-center align-items-center p-0">
                <img src={login} className='img-fluid  w-100' alt="about"/>
            </div>
            <div className="col-md-5  d-flex justify-content-center">
                <div className="d-flex justify-content-center flex-column ">
                    <div className="d-flex mt-4  justify-content-center">
                    <h1>Login</h1>
                    </div>
                    <div className="d-flex mt-4  justify-content-center">
                    <input placeholder="Email" className="login-input" type="email" required onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className="d-flex mt-4  justify-content-center">
                    <input placeholder="Password" className="login-input" type="password" minLength="5" required onChange={(event)=>setPass(event.target.value)}/>
                    </div>
                    <div className="d-flex mt-4  justify-content-center">
                        <p onClick={()=>{dispatch(signIn(email,pass))}} className="exp-btn">Login</p>
                    </div>
                    <div className="d-flex mt-4  justify-content-center">
                        <p>Dont have an account? Register here!</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
)
}
export default Login;
