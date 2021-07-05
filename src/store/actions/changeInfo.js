import axios from "axios";
import APIURL from "../../APIURL";
import getUserById from "./getUserById";

const changeInfo = (token,id,name,email,surname,navigation) => (dispatch) => {
    axios.put(`${APIURL}user/resetinfo`,{id,email,name,surname},{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>{
         if(res.data.success){
             dispatch(getUserById(id));
             navigation.push('/');
         }
        }).catch((err)=>console.log(err))
}
const changePass = (token,id,password,newPassword,navigation) => (dispatch) => {
    axios.put(`${APIURL}user/resetpass`,{id,password,newPassword},{headers:{authorization:`Bearer ${token}`}})
        .then((res)=>{
            if(res.data.success){
                navigation.push('/');
            }
        }).catch((err)=>console.log(err))
}
export {changePass,changeInfo};
