import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const fetchNotification = (token,id) => (dispatch) => {
    dispatch({type:ACTIONS.FETCH_NOTIFICATIONS_START,payload:''});
    axios.get(`${APIURL}user/notification`,{headers:{authorization:`Bearer ${token}`,id:id}})
        .then((res)=>dispatch({type:ACTIONS.FETCH_NOTIFICATIONS_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.FETCH_NOTIFICATIONS_ERROR,payload:err}))
}
export default fetchNotification;
