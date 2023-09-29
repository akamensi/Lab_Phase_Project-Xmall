import { GETMARKETS, GETMARKETUSER, GETONEMARKET } from "../TypeActions/MarketTypes"

const initialState = {
    markets : [],
    oneMarket : {},
    marketUser : []
}

const MarketReducer=(state = initialState,action)=>{
        switch (action.type) {
    case GETMARKETS : return {...state, markets : action.payload}
    case GETONEMARKET : return {...state, oneMarket : action.payload}
    case GETMARKETUSER : return {...state, marketUser : action.payload}
            default: return state
        }
}

export default MarketReducer