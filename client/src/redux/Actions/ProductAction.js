import axios from "axios"
import { GETONEPRODUCT, GETPRODUCTMARKET, GETPRODUCTS } from "../TypeActions/ProductTypes"


export const getProducts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/product/getProducts')
        dispatch(
            {
                type : GETPRODUCTS,
                payload : res.data.products
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const addProduct=(newProduct,navigate)=>async(dispatch)=>{
    try {
    
        await axios.post(`/api/product/addProduct`,newProduct,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        dispatch(getProducts())
        navigate('/ListProduct')
    } catch (error) {
        console.log(error)
    }
}


export const getOneProduct=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/product/getOneProduct/${id}`)
        dispatch(
            {
                type : GETONEPRODUCT,
                payload : res.data.product
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const updateProduct=(payload,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/product/updateProduct/${id}`,payload)
        dispatch(getOneProduct(id))
        navigate(`/DescriptionProduct/${id}`)
    } catch (error) {
        console.log(error)
    }
}


export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/product/deleteProduct/${id}`)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}


export const getProductMarket =(id)=>async(dispatch)=>{
    try {
        console.log(id)
        const res = await axios.get(`/api/product/getProductMarket/${id}`)
        dispatch(
            {
                type : GETPRODUCTMARKET,
                payload : res.data.productMarket
            }
        )
    } catch (error) {
        console.log(error)
    }
}