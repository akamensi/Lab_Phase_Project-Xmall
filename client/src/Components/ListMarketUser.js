import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMaketUser } from "../redux/Actions/MarketActions"
import CardMarketsUser from "./CardMarketUser"
import { Header, Image } from "semantic-ui-react"
import { useLocation } from "react-router"

const ListMarketUser=({id})=>{

    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location)
        useEffect(()=>{dispatch(getMaketUser(id))},[id])
        const marketUser = useSelector(state => state.MarketReducer.marketUser)
    
    return(
        <div>
        <Header as='h2' color='teal' textAlign='center'>
        {
            location.pathname.includes('/Profil') ? "My markets" :"Markets"
        }
        
        </Header>
        <div className="centerCard"> 
            {
               marketUser.length == 0? <h3>No markets</h3> : marketUser.map(el => <CardMarketsUser el={el}/> )
            }
            </div>
        </div>
    )
}

export default ListMarketUser