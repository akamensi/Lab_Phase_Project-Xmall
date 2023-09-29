import { GETONEPRODUCT, GETPRODUCTMARKET, GETPRODUCTS } from "../TypeActions/ProductTypes"

const initialState = {
    products : [],
    oneProduct : {},
    productMarket : []
}


const ProductReducer=(state = initialState, action)=>{
        switch (action.type) {
            case GETPRODUCTS : return {...state, products : action.payload}
            case GETONEPRODUCT : return {...state, oneProduct : action.payload}
            case GETPRODUCTMARKET : return{...state, productMarket : action.payload}
        
            default:return state

        }
}

export default ProductReducer