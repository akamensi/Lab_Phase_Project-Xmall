import axios from "axios"
import { GETCOMMENTS, GETONECOMMENT } from "../TypeActions/CommentType"

export const getComments=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/comment/getComments/${id}`)
        dispatch(
            {
                type : GETCOMMENTS,
                payload : res.data.comments
            }
        )
    } catch (error) {
        console.log(error)
    }
}
export const addComment=(newComment)=>async(dispatch)=>{
    try {
    
        await axios.post(`/api/comment/addComment`,newComment,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        dispatch(getComments(newComment.product))
    } catch (error) {
        console.log(error)
    }
}




export const getOneComment=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/comment/getOneComment/${id}`)
        dispatch(
            {
                type : GETONECOMMENT,
                payload : res.data.product
            }
        ) 
    } catch (error) {
        console.log(error)
    }
}


export const updateComment=(payload,id,idProduct)=>async(dispatch)=>{
    try {
        await axios.put(`/api/comment/updateComment/${id}`,payload)
        dispatch(getComments(idProduct))
    } catch (error) {
        console.log(error)
    }
}


export const deleteComment=(id,idProduct)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/comment/deleteComment/${id}`)
        dispatch(getComments(idProduct))
        
    } catch (error) {
        console.log(error)
    }
}