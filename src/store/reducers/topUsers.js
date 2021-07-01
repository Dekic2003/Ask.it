import ACTIONS from "../actions";

let initialState = {
    Users:[],
    loading:false,
    error:null
}

const topUsersReducer = (state=initialState,action)=>{
    switch (action.type){
        case ACTIONS.FETCH_TOP_USERS_START:
            return{
                ...initialState,
                loading:true,
            }
        case ACTIONS.FETCH_TOP_USERS_SUCCESS:
            return {
                ...initialState,
                Users: action.payload
            }
        case ACTIONS.FETCH_TOP_USERS_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        default:
            return state
    }
}
export default topUsersReducer;
