import React, {useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import fetchQuestions from "../store/actions/questions";
import QuestionCard from "../Components/questionCard";
import Header from "../Components/header";

const MyQuestions = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);
    const User = useSelector((state)=>state.authReducer.USER)
    const [visible,setVisible]=useState(20)


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
                </div>
            </main>
        </div>
    )
}
export default MyQuestions
