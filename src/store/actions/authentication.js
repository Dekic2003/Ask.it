import ACTIONS from '../actions';
import axios from 'axios';
import APIURL from "../../APIURL";

const signIn = (email, password) => (dispatch) => {
    dispatch({type: ACTIONS.SIGN_IN_START, payload: null});
    axios
        .post(`${APIURL}login`, {email: email, password: password})
        .then((res) => {
            console.log(res.data.data)
            dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: res.data.data});
        })
        .catch((err) => {
            dispatch({type: ACTIONS.SIGN_IN_ERROR, payload: err});
        });
};

const signUp = (name,surname, email, password) => (dispatch) => {
    dispatch({type: ACTIONS.SIGN_UP_START, payload: null});
    axios
        .post(`${APIURL}register`, {
            name: name,
            surname:surname,
            email: email,
            password: password,
        })
        .then((res) => {
            dispatch({type: ACTIONS.SIGN_UP_SUCCESS, payload: res.data.data});
        })
        .catch((err) => {
            dispatch({type: ACTIONS.SIGN_UP_ERROR, payload: err});
        });
};

export {signUp, signIn};
