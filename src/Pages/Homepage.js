import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import fetchQuestions from "../store/actions/questions";

const Homepage = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);

    console.log(Questions);
    useEffect(()=>{
        dispatch(fetchQuestions());
    },[])


    return(
        <div>
            <p>Homepage</p>
        </div>
    )
}
export default Homepage
