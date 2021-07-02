import {combineReducers} from 'redux';
import questionsReducer from "./reducers/questions";
import topUsersReducer from "./reducers/topUsers";
import hotQuestionsReducer from "./reducers/hotQuestions";
import answersReducer from "./reducers/answers";
import questionByIdReducer from "./reducers/questionById";
import authReducer from "./reducers/authentication";

const rootReducers= combineReducers({
    questionsReducer,
    topUsersReducer,
    hotQuestionsReducer,
    answersReducer,
    questionByIdReducer,
    authReducer
})

export default rootReducers;
