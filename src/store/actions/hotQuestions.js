import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchHotQuestions = () => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_HOT_QUESTIONS_START,payload:''});
    axios.get(`${APIURL}hot`)
        .then((res)=>dispatch({type:ACTIONS.FETCH_HOT_QUESTIONS_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_HOT_QUESTIONS_ERROR,payload:err}))
}
export default fetchHotQuestions;
