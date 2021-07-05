import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";
import fetchQuestionById from "./questionById";
import fetchAnswers from "./answers";

const postAnswer = (token,question_id,question_author_id,author_id,answer) => (dispatch) => {
    if(answer!==''){
    dispatch({type: ACTIONS.POST_ANSWER_START, payload: null});
    axios
        .post(`${APIURL}answer`, {question_author_id,question_id,answer, author_id},{headers:{authorization:`Bearer ${token}`}})
        .then((res) => {
            if(res.data.success){
                dispatch(fetchQuestionById(question_id))
                dispatch(fetchAnswers(question_id,ACTIONS.FETCH_ANSWERS_START_OPENED))
            }
        })
        .catch((err) => {
            dispatch({type: ACTIONS.POST_ANSWER_ERROR, payload: err});
        });}
}
export default postAnswer;
