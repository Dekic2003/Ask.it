import ACTIONS from "../actions";

let initialState = {
    Answers:[],
    loading:false,
    error:null
}

const answersReducer = (state=initialState,action)=>{
    switch (action.type){
        case ACTIONS.FETCH_ANSWERS_START:
            return{
                ...initialState,
                loading:true,
            }
        case ACTIONS.FETCH_ANSWERS_SUCCESS:
            return {
                ...initialState,
                Answers: action.payload
            }
        case ACTIONS.FETCH_ANSWERS_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        default:
            return state
    }
}
export default answersReducer;
