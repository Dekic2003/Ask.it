import ACTIONS from "../actions";

let initialState = {
    Question:{},
    loading:false,
    error:null
}

const questionByIdReducer = (state=initialState,action)=>{
    switch (action.type){
        case ACTIONS.FETCH_QUESTIONS_ID_START:
            return{
                ...state,
                loading:true,
            }
        case ACTIONS.FETCH_QUESTIONS_ID_SUCCESS:
            return {
                ...initialState,
                Question: action.payload
            }
        case ACTIONS.FETCH_QUESTIONS_ID_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        default:
            return state
    }
}
export default questionByIdReducer;
