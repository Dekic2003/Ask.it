import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";
import fetchQuestions from "./questions";
import fetchHotQuestions from "./hotQuestions";
import fetchTopUsers from "./topUsers";
import fetchAnswers from "./answers";


const answerReaction = (token,author,answer,reaction,question) => (dispatch) => {
    dispatch({type:ACTIONS.POST_REACTION_START});
    axios.post(`${APIURL}answer/reaction`,{author_id:author,answer_id:answer,reaction},{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>{dispatch({type:ACTIONS.POST_REACTION_SUCCESS});
            if(res.data.success){
                dispatch(fetchAnswers(question,ACTIONS.FETCH_ANSWERS_START_OPENED))
            }
        })
        .catch((err)=>dispatch({type:ACTIONS.POST_REACTION_ERROR}))
}
const questionReaction = (token,author,question,reaction) => (dispatch) => {
    dispatch({type:ACTIONS.POST_REACTION_START});
    axios.post(`${APIURL}question/reaction`,{author_id:author,question_id:question,reaction},{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>{dispatch({type:ACTIONS.POST_REACTION_SUCCESS});
            if(res.data.success){
            dispatch(fetchQuestions())
            dispatch(fetchHotQuestions())
            dispatch(fetchTopUsers());}
        })
        .catch((err)=>dispatch({type:ACTIONS.POST_REACTION_ERROR}))
}
export {answerReaction,questionReaction};
