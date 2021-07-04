import React, {useState} from "react";
import ProfileSideNav from "../Components/profileSideNav";
import Header from "../Components/header";
import {useDispatch, useSelector} from "react-redux";
import '../styles/login.scss'
import {useHistory} from "react-router-dom";
import {signIn} from "../store/actions/authentication";
import changeInfo from "../store/actions/changeInfo";

const ChangeInfo = () => {
    const dispatch=useDispatch();
    const User = useSelector((state)=>state.authReducer.USER)
    const [email,setEmail]=useState(User.email);
    const [name,setName]=useState(User.name);
    const [surname,setSurame]=useState(User.surname);
    const [errorMsg,setErrorMsg]=useState('');
    const [showErr,setShowErr]=useState(false);

    const navigation =useHistory();

    const validation = () => {
         if(!/\S+@\S+\.\S+/.test(email)){
            setErrorMsg("Email is invalid")
            setShowErr(true)
            return 0
        }
        else {
            setShowErr(false);
            dispatch(changeInfo(User.access_token,User.id,name,email,surname,navigation))
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
                                    <h1>Change Proflie Info</h1>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <p className={`${(showErr)?'err-msg-active':'err-msg'}`}>{errorMsg}</p>

                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>Name: </h3>
                                        <input className="login-input" placeholder={name} onChange={(event)=>setName((event.target.value)===''?User.name:event.target.value)}/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>Surname: </h3>
                                        <input className="login-input" placeholder={surname} onChange={(event)=>setSurame((event.target.value)===''?User.surname:event.target.value)}/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div className='d-flex flex-row mt-2t justify-content-between w-100'>
                                        <h3>Email: </h3>
                                        <input className="login-input" placeholder={email} onChange={(event)=>setEmail((event.target.value)===''?User.email:event.target.value)}/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4  justify-content-center">
                                    <div onClick={()=>{validation()}} className='d-flex flex-row mt-3 justify-content-center w-100'>
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
export default ChangeInfo;
