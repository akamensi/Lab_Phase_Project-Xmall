import axios from "axios"
import { GETONEUSER, GETUSERS } from "../TypeActions/UserTypes"


export const getUsers=()=>async(dispatch)=>{
    try {
        
        const res = await axios.get('/api/user/getUsers')
        dispatch(
            {
                type : GETUSERS,
                payload : res.data.users
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const getOneuser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/user/GetOneUser/${id}`)

        dispatch(
            {
                type : GETONEUSER,
                payload : res.data.user
            }
        )

    } catch (error) {
        console.log(error)
    }
}


export const updateUser=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/updateUser/${id}`,upUser)
        dispatch(getOneuser(id))

        navigate(`/UserDescription/${id}`)
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/deleteUser/${id}`)
        dispatch(getUsers())
        navigate("/Listusers")

    } catch (error) {
        console.log(error)
    }
}