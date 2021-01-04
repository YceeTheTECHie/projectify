const initialState = {
    authError : null
}

// handling auth actions based on types
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN ERROR' :
           return {
                ...state,
                authError: 'login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGN_OUT_SUCCESS':
            return state
        
        case 'SIGNUP_SUCCESS':
            return {
            ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        default :
        return state
        }
}
export default authReducer
