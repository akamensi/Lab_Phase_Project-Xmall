import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import UserReducer from './UserReducer'
import MarketReducer from './MarketReducer'
import ProductReducer from './ProductReducer'
import CommentReducer from './CommentReducer'
import CommandeReducer from './CommandeReducer'

const rootReducer = combineReducers({AuthReducer, ErrorReducer, UserReducer, MarketReducer, ProductReducer, CommentReducer,CommandeReducer})


export default rootReducer