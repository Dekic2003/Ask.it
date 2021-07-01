import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchQuestions = () => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_QUESTIONS_START,payload:''});
    axios.get(`${APIURL}`)
        .then((res)=>dispatch({type:ACTIONS.FETCH_QUESTIONS_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_QUESTIONS_ERROR,payload:err}))
}
export default fetchQuestions;
