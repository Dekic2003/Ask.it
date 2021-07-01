import {combineReducers} from 'redux';
import questionsReducer from "./reducers/questions";
import topUsersReducer from "./reducers/topUsers";
import hotQuestionsReducer from "./reducers/hotQuestions";

const rootReducers= combineReducers({
    questionsReducer,
    topUsersReducer,
    hotQuestionsReducer
})

export default rootReducers;
