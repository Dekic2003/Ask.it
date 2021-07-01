import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import fetchQuestions from "../store/actions/questions";
import QuestionCard from "../Components/questionCard";

const Homepage = () => {

    const dispatch=useDispatch();
    const Questions=useSelector((state)=>state.questionsReducer.Questions);

    console.log(Questions);
    useEffect(()=>{
        dispatch(fetchQuestions());
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
                    <div className="position-sticky" style={{top:'2rem'}}>
                        <div className="p-2">
                            <h4 className="fst-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default Homepage
