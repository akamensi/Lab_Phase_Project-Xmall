import { Card,Button } from "react-bootstrap"
import {Image} from 'semantic-ui-react'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteMarket } from "../redux/Actions/MarketActions"
import AddProduct from "./Product/AddProduct"



const CradMarket=({el})=>{

    const dispatch = useDispatch()
    
    return(
    <div style={{marginLeft:"20px", marginRight :'20px',marginBottom:'20px'}}>
        <Link  to={`/MarketDescription/${el._id}`}>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div style={{display : 'flex' , flexDirection:'column',alignItems:'center', justifyContent:"space-around",height:'148px'}}>
        <img src={`../../.${el?.image?.replace('\\','/')}`} alt="" className="imgProo" />
        <Card.Title>{el.marketName}</Card.Title>
        <Card.Text>{el.categorie}</Card.Text>
        </div>
        </Card.Body>
    </Card>
    </Link>
        </div>
    )
}


export default CradMarket