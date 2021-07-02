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

const Homepage = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);
    const TopUsers=useSelector((state)=>state.topUsersReducer.Users)
    const HotQuestion=useSelector((state)=>state.hotQuestionsReducer.Questions)

    useEffect(()=>{
        dispatch(fetchQuestions());
        dispatch(fetchTopUsers());
        dispatch(fetchHotQuestions());
    },[])


    return(
        <div>
            <Header/>
        <main className="container mt-2">
            <div className="row ">
                <div className="col-md-8">
                    <PostQuestionCard/>
                    {
                        Questions.map((item,i)=>{
                            return(
                                    <QuestionCard data={item}/>
                            )
                        })
                    }
                </div>
                <div className="col-md-4">
                        <Leaderboard data={TopUsers}/>
                         <HotQuestions data={HotQuestion}/>
                </div>
            </div>
        </main>
        </div>
    )
}
export default Homepage
