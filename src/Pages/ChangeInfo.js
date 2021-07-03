import React from "react";
import ProfileSideNav from "../Components/profileSideNav";
import Header from "../Components/header";
import {useSelector} from "react-redux";

const ChangeInfo = () => {
    const User = useSelector((state)=>state.authReducer.USER)
    return(
        <div className="vw-100 vh-100 overflow-hidden">
            <Header/>
            <div className="row h-100 w-100 p-0 m-0">
                <div className="col-2 p-0 border border-3">
                    <ProfileSideNav/>
                </div>
                <div className="col-10 p-0">
                    <div className="d-flex justify-content-center align-items-center w-100 h-100 ">
                        <h1>Change profile info</h1>
                        <div className='d-flex flex-row'>
                            <h2>Name:</h2>
                            <input placeholder={User.name}/>
                        </div>
                        <div className='d-flex flex-row'>
                            <h2>Surname:</h2>
                            <input placeholder={User.surname}/>
                        </div>
                        <div className='d-flex flex-row'>
                            <h2>Email:</h2>
                            <input placeholder={User.email}/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangeInfo;
