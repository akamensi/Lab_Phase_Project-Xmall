import { useDispatch, useSelector } from "react-redux"
import { getProductMarket } from "../../redux/Actions/ProductAction"
import { useEffect } from "react"
import CardProduct from './CardProduct'

const ListProductMarket=({id})=>{

    const dispatch = useDispatch()
    useEffect(()=>{dispatch(getProductMarket(id))},[id])
    const productMarket = useSelector(state => state.ProductReducer.productMarket)
    return(
        <div className="centerCard" style={{marginTop:"20px", marginLeft:"30px", marginRight:"30px"}}>
            {
                productMarket.map(el => <CardProduct el={el}/>)
            }
        </div>
    )
}

export default ListProductMarket