import axios from "axios";
import APIURL from "../../APIURL";
import fetchAnswers from "./answers";
import ACTIONS from "../actions";
import fetchQuestions from "./questions";
import fetchQuestionById from "./questionById";
import fetchMyQuestions from "./myQuestions";
import fetchHotQuestions from "./hotQuestions";
import fetchTopUsers from "./topUsers";

const deleteQuestion = (token,id,userId) => (dispatch) => {
    axios.delete(`${APIURL}${id}`,{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>{
            if (res.data.success){
                dispatch(fetchQuestions())
                dispatch(fetchMyQuestions(userId))
                dispatch(fetchHotQuestions())
                dispatch(fetchTopUsers())
            }})
        .catch((err)=>console.log(err))
}
export default deleteQuestion;
