import axios from "axios"
import { GETMARKETS, GETMARKETUSER, GETONEMARKET } from "../TypeActions/MarketTypes"




export const getMarkets=()=>async(dispatch)=>{
    try {
       
        const res = await axios.get('/api/market/getMarkets')
        
        dispatch(
            {
                type : GETMARKETS,
                payload : res.data.markets

            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addMarket=(payload,navigate)=>async(dispatch)=>{
    try {
    
        await axios.post('/api/market/addMarket',payload,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        dispatch(getMarkets())
        navigate('/ListMarket')
    } catch (error) {
        console.log(error)
    }
}


export const getOneMarket=(id)=>async(dispatch)=>{
        try {
            const res = await axios.get(`/api/market/getOneMarket/${id}`)
            dispatch(
                {
                    type : GETONEMARKET,
                    payload:res.data.market
                }
            )
        } catch (error) {
            console.log(error)
        }
}


export const updateMarket=(payload,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/market/updateMarket/${id}`,payload)
        dispatch(getMarkets())
        navigate(`/MarketDescription/${id}`)

    } catch (error) {
        console.log(error)
    }
}


export const deleteMarket=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/market/deleteMarket/${id}`)
        dispatch(getMarkets())
        navigate(`/ListMarket`)
    } catch (error) {
        console.log(error)
    }
}


export const getMaketUser =(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/market/getMarketUser/${id}`)
        dispatch(
            {
                type : GETMARKETUSER,
                payload : res.data.marketUser
            }
        )
    } catch (error) {
        console.log(error)
    }
}