import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import fetchAnswers from "../store/actions/answers";
import fetchQuestionById from "../store/actions/questionById";
import QuestionCardById from "../Components/questionCardById";
import Header from "../Components/header";
import AnswerCard from "../Components/answerCard";

const Answers = () => {

    const dispatch=useDispatch();
    const {id}=useParams();
    const Question=useSelector((state)=>state.questionByIdReducer.Question)
    const Answers=useSelector((state)=>state.answersReducer.Answers)
    console.log(Question)
    console.log(Answers)

    useEffect(()=>{
        dispatch(fetchAnswers(id));
        dispatch(fetchQuestionById(id))
    },[])
    if(Answers===null){
        return(
            <div>
                <Header bool={false}/>
                <main className="container mt-2">
                    <div className="row ">
                        <div className="col-md-12">
                            <QuestionCardById data={Question}/>
                            <div className="d-flex justify-content-center">
                                <h4>No answers yet.</h4>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
    else{
    return(
        <div>
            <Header bool={false}/>
            <main className="container mt-2">
                <div className="row ">
                    <div className="col-md-12">
                        <QuestionCardById data={Question}/>
                        {
                            Answers.map((item,i)=>{
                                return(
                                    <AnswerCard data={item}/>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )}

}
export default Answers;