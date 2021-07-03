import ACTIONS from '../actions';
import axios from 'axios';
import APIURL from "../../APIURL";
import {fetchNotification} from "./notifications";

const signIn = (email, password,navigation) => (dispatch) => {
    dispatch({type: ACTIONS.SIGN_IN_START, payload: null});
    axios
        .post(`${APIURL}login`, {email: email, password: password})
        .then((res) => {
            if(res.data.success){
                dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: res.data.data});
                navigation.push('/')
                dispatch(fetchNotification(res.data.data.access_token,res.data.data.id))
            }
        })
        .catch((err) => {
            dispatch({type: ACTIONS.SIGN_IN_ERROR, payload: err});
        });
};

const signUp = (name,surname, email, password,navigation) => (dispatch) => {
    dispatch({type: ACTIONS.SIGN_UP_START, payload: null});
    axios
        .post(`${APIURL}register`, {
            name: name,
            surname:surname,
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res.data)
            if(res.data.success){
                dispatch({type: ACTIONS.SIGN_UP_SUCCESS, payload: res.data.data});
                navigation.push('/')
                dispatch(fetchNotification(res.data.data.access_token,res.data.data.id))
            }
        })
        .catch((err) => {
            dispatch({type: ACTIONS.SIGN_UP_ERROR, payload: err});
        });
};
const signOut = () => (dispatch) => {
    dispatch({type: ACTIONS.SIGN_OUT, payload: null});
};

export {signUp, signIn,signOut};
