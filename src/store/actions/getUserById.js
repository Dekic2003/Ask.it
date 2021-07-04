import axios from "axios";
import ACTIONS from "../actions";
import APIURL from "../../APIURL";

const getUserById = (token,id) => (dispatch) => {
    dispatch({type:ACTIONS.UPDATE_USER_START,payload:''});
    axios.get(`${APIURL}user/get/${id}`,{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>dispatch({type:ACTIONS.UPDATE_USER_SUCCESS,payload:res.data.data}))
        .catch((err)=>dispatch({type:ACTIONS.UPDATE_USER_ERROR,payload:err}))
}
export default getUserById;
