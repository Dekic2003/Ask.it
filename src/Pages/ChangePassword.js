import React, {useState} from "react";
import ProfileSideNav from "../Components/profileSideNav";
import Header from "../Components/header";
import {useSelector} from "react-redux";
import '../styles/login.scss'
import {changePass} from "../store/actions/changeInfo";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const ChangePassword = () => {
    const User = useSelector((state)=>state.authReducer.USER)
    const [password,setPassword]=useState(null);
    const [newPassword,setNewPassowrd]=useState(null);
    const [errorMsg,setErrorMsg]=useState('');
    const [showErr,setShowErr]=useState(false);
    const dispatch=useDispatch();
    const history=useHistory();
    const validation = () => {

        if(password===null || password===''){
            setErrorMsg("Password is required")
            setShowErr(true)
            return 0
        }
        else if(password.length<5){
            setErrorMsg("Password has to be 5 characters")
            setShowErr(true)
            return 0
        }
        else if(newPassword===null || newPassword===''){
            setErrorMsg("New Password is required")
            setShowErr(true)
            return 0
        }
        else if(newPassword.length<5){
            setErrorMsg("New Password has to be 5 characters")
            setShowErr(true)
            return 0
        }
        else {
            setShowErr(false);
            dispatch(changePass(User.access_token,User.id,password,newPassword,history))

        }
    }

    return(
        <div className="vw-100 vh-100 overflow-hidden">
            <Header/>
            <div className="row h-100 w-100 p-0 m-0">
                <div className="col-2 p-0 border border-3">
                    <ProfileSideNav/>
                </div>
                <div className="col-10 p-0 container d-flex justify-content-center align-items-center">
                    <div className="row  h-50 w-50 border shadow">
                        <div className="col-md-12  d-flex justify-content-center">
                            <div className="d-flex justify-content-center flex-column ">
                                <div className="d-flex mt-4  justify-content-center w-100">
                                    <h1>Change Password</h1>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <p className={`${(showErr)?'err-msg-active':'err-msg'}`}>{errorMsg}</p>

                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>Old Password: </h3>
                                        <input className="login-input" type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>New password: </h3>
                                        <input className="login-input" type="password" onChange={(event)=>{setNewPassowrd(event.target.value)}}/>
                                    </div>
                                </div>
                                <div onClick={validation} className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-3 justify-content-center w-100'>
                                        <p className="exp-btn">Save</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword;
