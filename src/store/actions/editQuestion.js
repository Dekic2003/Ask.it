import axios from "axios";
import APIURL from "../../APIURL";
import fetchAnswers from "./answers";
import ACTIONS from "../actions";
import fetchQuestions from "./questions";
import fetchQuestionById from "./questionById";
import fetchMyQuestions from "./myQuestions";

const editQuestion = (token,id,question,userId) => (dispatch) => {
    if(question!=='') {
        axios.put(`${APIURL}`, {id, question}, {headers: {authorization: `Bearer ${token}`}})
            .then((res) => {
                if (res.data.success) {
                    dispatch(fetchQuestions())
                    dispatch(fetchQuestionById(id))
                    dispatch(fetchMyQuestions(userId))
                }
            })
            .catch((err) => console.log(err))
    }
}
export default editQuestion;
