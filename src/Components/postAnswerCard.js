import React from 'react'
import '../styles/postQuestionCard.scss'
import {useSelector} from "react-redux";

const PostAnswerCard = () => {
    const User = useSelector((state) => state.authReducer.USER)

    if(User){
        return(
            <div className="border  shadow-sm rounded w-100 mb-3">
                <div className='row p-3'>
                    <div className="col-11 d-flex justify-content-center align-items-center">
                        <input placeholder="Type your answer here" type="text" className="questionText"/>
                    </div>
                    <div className="col-1 btn btn-success d-flex justify-content-center align-items-center" >
                        <p style={{padding:0,margin:0}}>Answer</p>
                    </div>
                </div>
            </div>
        )}
    else{
        return(
            <div className="border  shadow-sm rounded w-100 mb-3">
                <div className='row p-3'>
                    <div className="col-11 d-flex justify-content-center align-items-center">
                        <input placeholder="Type your answer here" type="text" className="questionText"/>
                    </div>
                    <div className="col-1 btn btn-success d-flex justify-content-center align-items-center tooltip-wrap" style={{opacity:0.6}}>
                        <p style={{padding:0,margin:0}}>Answer</p>
                        <div className="tooltip-content">
                            <p style={{padding:0,margin:0,color:'white'}}>You need to be signed in</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostAnswerCard;
