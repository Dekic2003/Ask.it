import {combineReducers} from 'redux';
import questionsReducer from "./reducers/questions";
import topUsersReducer from "./reducers/topUsers";
import hotQuestionsReducer from "./reducers/hotQuestions";
import answersReducer from "./reducers/answers";
import questionByIdReducer from "./reducers/questionById";
import authReducer from "./reducers/authentication";
import notificationsReducer from "./reducers/notifications";
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducers= combineReducers({
    questionsReducer,
    topUsersReducer,
    hotQuestionsReducer,
    answersReducer,
    questionByIdReducer,
    authReducer,
    notificationsReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer'],
}

const persistedReducer = persistReducer(persistConfig,rootReducers);

export default persistedReducer;
