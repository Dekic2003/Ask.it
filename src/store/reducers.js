import {combineReducers} from 'redux';
import questionsReducer from "./reducers/questions";
import topUsersReducer from "./reducers/topUsers";

const rootReducers= combineReducers({
    questionsReducer,
    topUsersReducer
})

export default rootReducers;
