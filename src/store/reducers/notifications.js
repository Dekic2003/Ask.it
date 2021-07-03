import ACTIONS from "../actions";

let initialState = {
    Notifications:[],
    read:false,
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
            if(action.payload){
                return {
                    ...initialState,
                    Notifications: action.payload
                }
            }
            else {
                return {
                    ...initialState,
                    Notifications: action.payload,
                    read: true
                }
            }
        case ACTIONS.FETCH_NOTIFICATIONS_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        case ACTIONS.PUT_NOTIFICATIONS_READ_START:
            return{
                ...state,
            }
        case ACTIONS.PUT_NOTIFICATIONS_READ_SUCCESS:
            return {
                ...state,
                read: true
            }
        case ACTIONS.PUT_NOTIFICATIONS_READ_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default notificationsReducer;
