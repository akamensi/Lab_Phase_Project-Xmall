import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { deleteMarket, getOneMarket } from "../redux/Actions/MarketActions"
import AddProduct from "./Product/AddProduct"
import { current } from "../redux/Actions/AuthActions"
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import ListProductMarket from "./Product/ListProductMarket"
import ConfirmeDeleteMarket from "./CofirmeDeleteMarket"

const MarketDescription=()=>{

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(getOneMarket(id))
    dispatch(current())},[])
    const user = useSelector( state => state.AuthReducer.user )
    const oneMarket = useSelector(state => state.MarketReducer.oneMarket)
    return(
    

        <div>
            {
                oneMarket &&
         
                <div className="cardProfilLayout">
            <Card style={{ width: '80%' }}>
    <Card.Body>
        <Card.Title>{oneMarket.name} Market</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle> */}
       <div className="centerProfil">
        <div className="profilInfo">
        <img src={`../../.${oneMarket?.image?.replace('\\','/')}`}alt="Not Found" className="imgPro" />

        <div className="profilInfoInfo">
        <Card.Text>Market Name : {oneMarket.marketName} </Card.Text>
        <Card.Text>Description : {oneMarket.marketDisc} </Card.Text>
        <Card.Text>Categorie : {oneMarket.categorie}</Card.Text>
        <Card.Text>Address : {oneMarket.marketAdress}</Card.Text>
        <Card.Text>Market Owner : {oneMarket?.owner?.name} </Card.Text>
        </div>
        </div>
        </div>
       
    
        { user._id == oneMarket?.owner?._id && 
       <div className="cardProfilLayout"> 
            <div className="cardProfilButt">
            
            <Button className="buttCardUser" as={Link} to={`/EditMarket/${oneMarket._id}`} variant="outline-info">Edit</Button>
            <ConfirmeDeleteMarket oneMarket={oneMarket}/>
            <AddProduct className="buttCardUser" id={oneMarket._id}/>
            </div>
        </div>}
    </Card.Body>
    </Card>
  
    </div>
            }
      {/* <ListMarketUser id ={oneMarket._id}/> */}
      <ListProductMarket id={id} />
        </div>
    )
}


export default MarketDescription