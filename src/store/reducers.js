import {combineReducers} from 'redux';
import questionsReducer from "./reducers/questions";

const rootReducers= combineReducers({
    questionsReducer
})

export default rootReducers;
