import ACTIONS from "../actions";

let initialState = {
    Questions:[],
    loading:false,
    error:null
}

const myQuestionsReducer = (state=initialState,action)=>{
    switch (action.type){
        case ACTIONS.FETCH_MY_QUESTIONS_START:
            return{
                ...state,
                loading:true,
            }
        case ACTIONS.FETCH_MY_QUESTIONS_SUCCESS:
            return {
                ...initialState,
                Questions: action.payload
            }
        case ACTIONS.FETCH_MY_QUESTIONS_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        default:
            return state
    }
}
export default myQuestionsReducer;
