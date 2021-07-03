import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchMyQuestions = (id) => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_MY_QUESTIONS_START,payload:''});
    axios.get(`${APIURL}author/${id}`)
        .then((res)=>dispatch({type:ACTIONS.FETCH_MY_QUESTIONS_SUCCESS,payload:res.data.data.reverse()}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_MY_QUESTIONS_ERROR,payload:err}))
}
export default fetchMyQuestions;
