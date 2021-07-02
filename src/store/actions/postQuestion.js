import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";
import fetchQuestions from "./questions";

const postQuestion = (token,question,author_id) => (dispatch) => {
        dispatch({type: ACTIONS.POST_QUESTION_START, payload: null});
        axios
            .post(`${APIURL}`, {question, author_id},{headers:{authorization:`Bearer ${token}`}})
            .then((res) => {
                if(res.data.success){
                dispatch(fetchQuestions());}
            })
            .catch((err) => {
                dispatch({type: ACTIONS.POST_QUESTION_ERROR, payload: err});
            });
}
export default postQuestion;
