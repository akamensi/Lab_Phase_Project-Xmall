import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getComments } from "../../redux/Actions/CommentAction"
import CardComment from "./CardComment"

const ListComments=({id})=>{

    const dispatch = useDispatch()

        useEffect(()=>{dispatch(getComments(id))},[])
        const comments = useSelector(state => state.CommentReducer.comments)
    
    return(
        <div >
            {
            comments && comments.map(el => <CardComment el={el}/> )
            }
        </div>
    )
}

export default ListComments