import React, {useState} from 'react'
import '../styles/postQuestionCard.scss'
import {useDispatch, useSelector} from "react-redux";
import postAnswer from "../store/actions/postAnswer";

const PostAnswerCard = () => {
    const User = useSelector((state) => state.authReducer.USER)
    const [answer,setAnswer]=useState('')
    const dispatch=useDispatch();
    const Question=useSelector((state)=>state.questionByIdReducer.Question)
    if(User){
        return(
            <div className="border  shadow-sm rounded w-100 mb-3">
                <div className='row p-3'>
                    <div className="col-11 d-flex justify-content-center align-items-center">
                        <input placeholder="Type your answer here" type="text" className="questionText" value={answer} onChange={(event)=>setAnswer(event.target.value)}/>
                    </div>
                    <div onClick={()=>{dispatch(postAnswer(User.access_token,Question.id,Question.author_id,User.id,answer));setAnswer('')}} className="col-1 btn btn-success d-flex justify-content-center align-items-center" >
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
