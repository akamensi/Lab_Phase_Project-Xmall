import axios from "axios"
import { GETCOMMANDES, GETMYCOMMANDES } from "../TypeActions/CommandeTypes"

export const getCommandes=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/commande/getCommandesProduct/${id}`)
        dispatch(
            {
                type : GETCOMMANDES,
                payload : res.data.commandes
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const getMyCommandes=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/commande/getMyCommandes/${id}`)
        dispatch(
            {
                type : GETMYCOMMANDES,
                payload : res.data.commandes
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const addCommande=(newCommende,navigate)=>async(dispatch)=>{
    try {
    
        await axios.post(`/api/commande/addCommande`,newCommende,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        navigate("/Profil")
    } catch (error) {
        console.log(error)
    }
}


export const updateCommande=(payload,id,idUser)=>async(dispatch)=>{
    try {
        await axios.put(`/api/commande/updateCommande/${id}`,payload)
        dispatch(getCommandes(idUser))
        dispatch(getMyCommandes(idUser))
    } catch (error) {
        console.log(error)
    }
}


export const deleteCommande=(id,idUser)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/commande/deleteCommande/${id}`)
        dispatch(getMyCommandes(idUser))
        
    } catch (error) {
        console.log(error)
    }
}