import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchTopUsers = () => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_TOP_USERS_START,payload:''});
    axios.get(`${APIURL}user/leaderboard`)
        .then((res)=>dispatch({type:ACTIONS.FETCH_TOP_USERS_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_QUESTIONS_ERROR,payload:err}))
}
export default fetchTopUsers;
