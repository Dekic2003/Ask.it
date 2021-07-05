import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import fetchQuestions from "../store/actions/questions";
import fetchTopUsers from "../store/actions/topUsers";
import fetchHotQuestions from "../store/actions/hotQuestions";
import QuestionCard from "../Components/questionCard";
import Leaderboard from "../Components/Leaderboard";
import HotQuestions from "../Components/hotQuestions";
import Header from "../Components/header";
import PostQuestionCard from "../Components/postQuestionCard";
import '../styles/button.scss'
const Homepage = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);
    const TopUsers=useSelector((state)=>state.topUsersReducer.Users)
    const HotQuestion=useSelector((state)=>state.hotQuestionsReducer.Questions)
    const [visible,setVisible]=useState(20)


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
                        Questions.slice(0,visible).map((item,i)=>{
                            return(
                                    <QuestionCard data={item}/>
                            )
                        })
                    }
                    <div  className={`${(visible>Questions.length)?'d-none':'d-block  '}`} onClick={()=>(setVisible(visible+20))}>
                        <p className="exp-btn">Load more</p>
                    </div>
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
