import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import fetchQuestions from "../store/actions/questions";
import fetchTopUsers from "../store/actions/topUsers";
import fetchHotQuestions from "../store/actions/hotQuestions";
import QuestionCard from "../Components/questionCard";
import Leaderboard from "../Components/Leaderboard";
import HotQuestions from "../Components/hotQuestions";
import Header from "../Components/header";
import PostQuestionCard from "../Components/postQuestionCard";
import {fetchNotification} from "../store/actions/notifications";

const MyQuestions = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);
    const User = useSelector((state)=>state.authReducer.USER)


    useEffect(()=>{
        dispatch(fetchQuestions(User.id));
    },[])


    return(
        <div>
            <Header/>
            <main className="container mt-2">
                <div className="row ">
                    <div className="col-md-8">
                        {
                            Questions.map((item,i)=>{
                                return(
                                    <QuestionCard data={item}/>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}
export default MyQuestions
