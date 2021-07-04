import React from "react";
import ProfileSideNav from "../Components/profileSideNav";
import Header from "../Components/header";
import {useSelector} from "react-redux";
import '../styles/login.scss'


const ChangePassword = () => {
    const User = useSelector((state)=>state.authReducer.USER)

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
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>Old Password: </h3>
                                        <input className="login-input" type="password"/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>New password: </h3>
                                        <input className="login-input" type="password"/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
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
