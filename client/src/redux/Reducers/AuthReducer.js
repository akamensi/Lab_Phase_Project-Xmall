import { CURRENT, FAIL, LOGIN, LOGOUT, SIGNUP } from "../TypeActions/AuthTypes"

const initiaState={
    user : {},
    errors : []
}

const AuthReducer=(state=initiaState,action)=>{
    switch (action.type) {
        case SIGNUP : 
        localStorage.setItem('token',action.payload.token)
        return{...state ,user: action.payload.newUser, errors : null}

        case LOGIN :
            localStorage.setItem('token', action.payload.token)
            return{...state,user : action.payload.found , errors : null}

        case CURRENT : return{...state, user : action.payload }

        case LOGOUT :
            localStorage.removeItem('token')
            return {...state, user : null, errors : null}

        case FAIL : return{...state,errors : action.payload, user : null}
        
        default: return state
        
    }
}

export default AuthReducer