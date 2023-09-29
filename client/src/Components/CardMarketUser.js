import { Card,Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { deleteMarket } from "../redux/Actions/MarketActions"
import AddProduct from "./Product/AddProduct"
import ConfirmeDeleteMarket from "./CofirmeDeleteMarket"



const CardMarketsUser=({el})=>{

    const dispatch = useDispatch()
    const location = useLocation()
    return(
        <div style={{marginLeft:"20px", marginRight :'20px'}}>
            
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        
        <div style={{display : 'flex' , flexDirection:'column',alignItems:'center', justifyContent:"space-around",height:'148px'}}>
        <img src={`../../.${el?.image?.replace('\\','/')}`} alt="Not Found" className="imgPro"/>
        <Link to={`/MarketDescription/${el._id}`} style={{color :'black'}}> 
        <Card.Title>{el.marketName}</Card.Title>
        <Card.Text>{el.categorie}</Card.Text>
        </Link>
        </div>
        {
            location.pathname.includes('/Profil')&& 
            <div style={{display : 'flex' , flexDirection:'column',alignItems:'center'}}>
        <Button className="buttCardUser" as={Link} to={`/EditMarket/${el._id}`} variant="outline-info">Edit</Button>
        <ConfirmeDeleteMarket />
       <AddProduct id={el._id}/>
        </div>
        }
        
        </Card.Body>
    </Card>
 
        </div>
    )
}


export default CardMarketsUser