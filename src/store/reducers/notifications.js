import ACTIONS from "../actions";

let initialState = {
    Notifications:[],
    loading:false,
    error:null
}

const notificationsReducer = (state=initialState,action)=>{
    switch (action.type){
        case ACTIONS.FETCH_NOTIFICATIONS_START:
            return{
                ...initialState,
                loading:true,
            }
        case ACTIONS.FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...initialState,
                Notifications: action.payload
            }
        case ACTIONS.FETCH_NOTIFICATIONS_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        default:
            return state
    }
}
export default notificationsReducer;
