import { CURRENT, FAIL, LOGIN, LOGOUT, SIGNUP } from "../TypeActions/AuthTypes"
import axios from 'axios'
import { handelError } from "./ErrorActions"


export const signup =(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/Signup',newUser)

        dispatch(
            {
                type : SIGNUP,
                payload : res.data
            }
        )
        
        navigate("/Profil")

    } catch (error) {
    error.response.data.errors.forEach(el=>{
        dispatch(handelError(el.msg))
    })
    }
}


export const login=(logUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/Signin',logUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate("/Profil")

    } catch (error) {
        error.response.data.errors.forEach(el=>{
            dispatch(handelError(el.msg))
        })
    }
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/user/getCurrentUser',config)
        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}


export const updateCurrentUser=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/updateUser/${id}`,upUser)
        dispatch((current))

        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}


export const logout=()=>{
    return(
        {type:LOGOUT}
    )
}


export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try {
        
        await axios.delete(`/api/user/deleteUser/${id}`)
        localStorage.removeItem('token')
        dispatch(logout())
        navigate('/')

    } catch (error) {
        console.log(error)
    }
}

