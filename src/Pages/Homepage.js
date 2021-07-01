import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import fetchQuestions from "../store/actions/questions";
import fetchTopUsers from "../store/actions/topUsers";
import QuestionCard from "../Components/questionCard";
import Leaderboard from "../Components/Leaderboard";

const Homepage = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);
    const TopUsers=useSelector((state)=>state.topUsersReducer.Users)

    useEffect(()=>{
        dispatch(fetchQuestions());
        dispatch(fetchTopUsers());
    },[])


    return(
        <main className="container">
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
                <div className="col-md-4">
                    <div>
                        <Leaderboard data={TopUsers}/>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default Homepage
