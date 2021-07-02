import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchQuestionById = (id) => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_QUESTIONS_ID_START,payload:''});
    axios.get(`${APIURL}question/${id}`)
        .then((res)=>dispatch({type:ACTIONS.FETCH_QUESTIONS_ID_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_QUESTIONS_ID_ERROR,payload:err}))
}
export default fetchQuestionById;
