import { HANDELERROR, REMOVEERROR } from "../TypeActions/ErrorTypes"

const initialState = []

const ErrorReducer=(state = initialState,action)=>{
switch (action.type) {
    case HANDELERROR : return [...state, action.payload]
    case REMOVEERROR : return state.filter(el => el.id != action.payload)

    default: return state
    
}
}

export default ErrorReducer