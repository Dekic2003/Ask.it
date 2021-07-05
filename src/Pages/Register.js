import React,{useState} from "react";
import register from '../assets/register.jpg'
import '../styles/login.scss'
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../store/actions/authentication";
import {Link, useHistory} from "react-router-dom";
import Loading from "../Components/loading";

const Register = () => {
    const dispatch=useDispatch();
    const [name,setName]=useState(null);
    const [surname,setSurname]=useState(null);
    const [email,setEmail]=useState(null);
    const [pass,setPass]=useState(null)
    const [errorMsg,setErrorMsg]=useState('');
    const [showErr,setShowErr]=useState(false);
    const navigation =useHistory();
    const loading = useSelector((state)=>state.authReducer.loading)

    const validation = () => {
        if(email===null || email===''){
            setErrorMsg("Email is required")
            setShowErr(true)
            return 0
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            setErrorMsg("Email is invalid")
            setShowErr(true)
            return 0
        }
        else if(pass===null || pass===''){
            setErrorMsg("Password is required")
            setShowErr(true)
            return 0
        }
        else if(pass.length<5){
            setErrorMsg("Password has to be 5 characters")
            setShowErr(true)
            return 0
        }
        else {
            setShowErr(false);
            dispatch(signUp(name,surname,email,pass,navigation))
        }
    }
    if(loading){
        return(
            <Loading/>
        )}
    else {
        return(
            <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="row  w-100 border shadow">

                    <div className="col-md-5  d-flex justify-content-center">
                        <div className="d-flex justify-content-center flex-column ">
                            <div className="d-flex mt-4  justify-content-center">
                                <h1>Register</h1>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <p className={`${(showErr)?'err-msg-active':'err-msg'}`}>{errorMsg}</p>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <input placeholder="Name(optional)" className="login-input" type="email" required onChange={(event)=>setName(event.target.value)}/>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <input placeholder="Surname(optional" className="login-input" type="email" required onChange={(event)=>setSurname(event.target.value)}/>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <input placeholder="Email" className="login-input" type="email" required onChange={(event)=>setEmail(event.target.value)}/>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <input placeholder="Password" className="login-input" type="password" minLength="5" required onChange={(event)=>setPass(event.target.value)}/>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <p onClick={()=>{validation()}} className="exp-btn">Register</p>
                            </div>
                            <div className="d-flex mt-4  justify-content-center">
                                <p>Already have an account? <Link to={'/login'}>Login here!</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center p-0">
                        <img src={register} className='img-fluid  w-100' alt="about"/>
                    </div>
                </div>
            </div>
        )
    }

}
export default Register;
