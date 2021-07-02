import ACTIONS from '../actions';

let initialState = {
    USER: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SIGN_IN_START:
            return {
                ...initialState,
                loading: true,
            };
        case ACTIONS.SIGN_IN_SUCCESS:
            console.log(action.payload);
            return {
                ...initialState,
                USER: action.payload,
            };
        case ACTIONS.SIGN_IN_ERROR:
            return {
                ...initialState,
                error: action.payload,
            };
        case ACTIONS.SIGN_UP_START:
            return {
                ...initialState,
                loading: true,
            };
        case ACTIONS.SIGN_UP_SUCCESS:
            return {
                ...initialState,
                USER: action.payload,
            };
        case ACTIONS.SIGN_UP_ERROR:
            return {
                ...initialState,
                USER: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
