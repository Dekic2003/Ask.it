import axios from "axios";
import APIURL from "../../APIURL";
import fetchAnswers from "./answers";
import ACTIONS from "../actions";

const editAnswer = (token,id,answer,question) => (dispatch) => {
    if(answer!==''){
    axios.put(`${APIURL}answer`,{id,answer},{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>{
            if (res.data.success){
                dispatch(fetchAnswers(question,ACTIONS.FETCH_ANSWERS_START_OPENED));
            }})
        .catch((err)=>console.log(err))}
}
export default editAnswer;


