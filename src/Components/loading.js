import React from "react";
import Lottie from 'react-lottie'
import loading from '../assets/lottie/loading.json'

const Loading =()=>{
    return(
        <div className="vh-100 vw-100  d-flex flex-column justify-content-center align-items-center">
            <Lottie options={{loop:true,autoplay:true,animationData:loading}} width={400} height={400}/>
            <h1>Loading...</h1>
        </div>
    )
}
export default Loading
