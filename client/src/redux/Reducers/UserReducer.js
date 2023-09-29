import { GETONEUSER, GETUSERS } from "../TypeActions/UserTypes"

const initialState = {
    users : [],
    oneUser : {} 
}

const UserReducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETUSERS : return {...state, users : action.payload}
        
        case GETONEUSER : return {...state, oneUser : action.payload}
        default : return state
            
    }
}

export default UserReducer