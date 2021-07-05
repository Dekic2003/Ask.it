import React, {useEffect, useState} from "react";
import NotificationCard from "./notificationCard";
import {Link, useHistory} from 'react-router-dom'
import '../styles/header.scss'
import {useSelector,useDispatch} from "react-redux";
import {signOut} from "../store/actions/authentication";
import {fetchNotification, putNotification} from "../store/actions/notifications";

const Header = () => {
    const [isProfileVisible,setIsProfileVisible]=useState(false)
    const [isNotificationVisible,setIsNotificationVisible]=useState(false)
    const User = useSelector((state)=>state.authReducer.USER)
    const Notification = useSelector((state)=>state.notificationsReducer.Notifications)
    const NotificationR = useSelector((state)=>state.notificationsReducer.read)
    const history=useHistory();

    const dispatch=useDispatch();
    useEffect(()=>{
        if(User){
            dispatch(fetchNotification(User.access_token,User.id))
        }
    },[])
    if(User!==null){
        return(
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            </svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <Link to={'/'}><a href="#" className="nav-link px-2 text-white">Home</a></Link>
                        </ul>
                        <div  onClick={()=>{dispatch(putNotification(User.access_token,User.id))}} className="dropdown text-end mx-3">
                            <div onClick={()=>setIsNotificationVisible(!isNotificationVisible)} className="d-block link-dark text-decoration-noneshow" aria-expanded="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${(NotificationR)?'white':'green'}`}
                                     className="bi bi-bell" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                </svg>
                            </div>
                            <ul className={`notfication-dropdown dropdown-menu text-small ${isNotificationVisible?'show':''}`} aria-labelledby="dropdownUser1"
                                style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(0px, 34px)',width:'50%!important',overflowY:'scroll'}}
                                data-popper-placement="bottom-start">
                                {
                                    (Notification)?(Notification.map((item)=>{
                                        if(item.isRead===false){
                                            return <NotificationCard data={item}/>}
                                    })):(<div/>)
                                }
                            </ul>
                        </div>
                        <div className="dropdown text-end">
                            <div onClick={()=>setIsProfileVisible(!isProfileVisible)} className="d-block link-dark text-decoration-noneshow" aria-expanded="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white"
                                     className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fillRule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </div>
                            <ul className={`dropdown-menu text-small ${isProfileVisible?'show':''}`} aria-labelledby="dropdownUser1"
                                style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(0px, 34px)'}}
                                data-popper-placement="bottom-start">
                                <Link to={'/myquestions'} style={{textDecoration:'none'}}><a className="dropdown-item" href="#">My Questions</a></Link>
                                <Link to={'/profile'} style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Profile</a></li></Link>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a onClick={()=>{dispatch(signOut(history))}} className="dropdown-item" href="">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    else {
        return(
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        </svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to={"/"} className="nav-link px-2 text-white">Home</Link></li>
                    </ul>
                    <div className="text-end">
                        <Link to={'/login'} style={{textDecoration:'none'}}><div className="btn btn-outline-light me-2">Login</div></Link>
                        <Link to={'/register'} style={{textDecoration:'none'}}><div className="btn btn-success">Register</div></Link>
                    </div>
                </div>
            </div>
        </header>
    )
    }
}

export default Header;
