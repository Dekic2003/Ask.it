import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchAnswers = (id) => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_ANSWERS_START,payload:''});
    axios.get(`${APIURL}answer/${id}`)
        .then((res)=>dispatch({type:ACTIONS.FETCH_ANSWERS_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_ANSWERS_ERROR,payload:err}))
}
export default fetchAnswers;
