import { GETCOMMENTS, GETONECOMMENT } from "../TypeActions/CommentType"


const initialState = {
    comments : [],
    comment : {}
}


const CommentReducer=(state = initialState, action)=>{
        switch (action.type) {
            case GETCOMMENTS : return{...state, comments : action.payload}
            case GETONECOMMENT : return{...state, comment : action.payload}
            default:return state

        }
}

export default CommentReducer