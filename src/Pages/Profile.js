import React from "react";
import ProfileSideNav from "../Components/profileSideNav";
import Header from "../Components/header";
import {useSelector} from "react-redux";
import login from "../assets/login.jpg";
import {Link} from "react-router-dom";

const Profile = () => {
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
                                <div className="d-flex mt-4  justify-content-center">
                                    <h1>Profile info</h1>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t'>
                                        <h3>Name:</h3>
                                        <h3>{User.name}</h3>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t'>
                                        <h3>Surname:</h3>
                                        <h3>{User.surname}</h3>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t'>
                                        <h3>Email:</h3>
                                        <h3>{User.email}</h3>
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
export default Profile;
