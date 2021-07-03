import React from "react";
import ProfileSideNav from "../Components/profileSideNav";
import Header from "../Components/header";

const Profile = () => {
    return(
        <div className="vw-100 vh-100 overflow-hidden">
            <Header/>
            <div className="row h-100 w-100 p-0 m-0">
                <div className="col-2 p-0 border border-3">
                    <ProfileSideNav/>
                </div>
                <div className="col-10 p-0">
                    <div className="d-flex justify-content-center align-items-center w-100 h-100 ">
                        <p>a</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
