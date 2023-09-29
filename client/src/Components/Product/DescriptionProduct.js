import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { getOneProduct } from "../../redux/Actions/ProductAction"
import { Link } from "react-router-dom"
import {Button, ButtonGroup} from 'react-bootstrap'
import ConfirmeDelProduct from "./ConfirmeDelProduct"
import { current } from "../../redux/Actions/AuthActions"
import ListComments from "../Comments/ListComments"
import AddComment from "../Comments/AddComment"
import { addCommande } from "../../redux/Actions/CommandeActions"
import Card from 'react-bootstrap/Card';

const DescriptionProduct=()=>{

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneProduct(id))
        dispatch(current())
    },[])

    const [count,setCount] = useState(0)
    const [prixTotal,setPrixTotal] = useState(0)

    const user = useSelector( state => state.AuthReducer.user )
    const oneProduct = useSelector(state => state.ProductReducer.oneProduct)

    useEffect(()=>{
        setPrixTotal(count * oneProduct.price)
    },[count])
    const navigate = useNavigate()
    const handleAddCommande=()=>{
        dispatch(addCommande({
            prixTotal ,
            qte : count,
            product :oneProduct._id,
            ownerProduct : oneProduct.owner
        },navigate))
    }
    return(
        <div>
        {
            oneProduct &&
    
            <div className="cardProfilLayout">
        <Card style={{ width: '80%' }}>
<Card.Body>
    <Card.Title>{oneProduct.name} Market</Card.Title>
    <div className="centerProfil">
    <div className="profilInfo">
    <img src={`../../.${oneProduct?.image?.replace('\\','/')}`}alt="Not Found" className="imgProP" />

    <div className="profilInfoInfo">
    <Card.Text>Product Name : {oneProduct.name} </Card.Text>
    <Card.Text>Description : {oneProduct.description} </Card.Text>
    <Card.Text>Price : {oneProduct.price}</Card.Text>
    <Card.Text>Market : {oneProduct?.market?.marketName} </Card.Text>
    <div className="count">
            <ButtonGroup className="bu" >
            <Button  onClick={()=> count>0&&setCount(count-1)} variant="secondary">-</Button>
            <Button variant="secondary">{count}</Button>
            <Button onClick={()=>setCount(count+1)} variant="secondary">+</Button>
            </ButtonGroup>
            <Button className="bu" onClick={handleAddCommande}>Order</Button>
            <br />
            <Card.Text style={{fontSize:"20px"}}>Total Price: {prixTotal}</Card.Text>
            </div>
    </div>
    </div>
    </div>


    { user?._id == oneProduct?.owner?._id &&
<div className="cardProfilLayout"> 
        <div className="cardProfilButt">
        
        <Button className="buttCardUser" as={Link} to={`/EditProduct/${oneProduct._id}`} variant="outline-info">Edit</Button>
        <ConfirmeDelProduct  oneProduct={oneProduct} />
        
        </div>
    </div>}
</Card.Body>
</Card>

</div>
        }
  {/* <ListMarketUser id ={oneMarket._id}/> */}
       
           
             <ListComments id={id}/>
             <AddComment id={id}/>
    </div>
    )
}


export default DescriptionProduct