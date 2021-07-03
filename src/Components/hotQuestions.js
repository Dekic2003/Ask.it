import React from 'react'
import '../styles/hotQuestions.scss'
import HotQuestionCard from "./hotQuestionCard";

const HotQuestions = (data) => {
    if(data.data){
    return(
        <div className="hot-questions-card">
            <div className="border-bottom border-dark rounded-bottom bg-light p-3">
                <h4>Hot Questions</h4>
            </div>
            <div className="hot-questions-card-table d-flex align-items-center flex-column">
                {
                    data.data.slice(0,5).map((item,i)=>{
                        return <HotQuestionCard data={item}/>
                    })
                }
            </div>
        </div>)}
    else {
        return(
            <div className="hot-questions-card">
                <div className="border-bottom border-dark rounded-bottom bg-light p-3">
                    <h4>Hot Questions</h4>
                </div>
                <div className="hot-questions-card-table d-flex align-items-center flex-column">
                    Whuups no questions...
                </div>
            </div>)
    }
}
export default HotQuestions;
