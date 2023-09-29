import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../redux/Actions/AuthActions"
import {Card, Button} from 'react-bootstrap'
import { Link} from "react-router-dom"
import ListMarketUser from "./ListMarketUser"
import ListMyCommandes from "./Commandes/ListMyCommandes"
import ListCommandesProduct from "./Commandes/ListCommandesProduct"
import ConfirmDelMyProfil from "./ComfirmDelMyProfil"


const Profil=()=>{
    
    
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(current())},[])
    

    const user = useSelector(state => state.AuthReducer.user)

    return(
        <div>
            {
                user &&
        <>
        <div className="cardProfilLayout">
            <Card style={{ width: '80%' }}>
    <Card.Body>
        <Card.Title>Welcome To Your Profil</Card.Title>
        <div className="centerProfil">
        <div className="profilInfo">
        <img src={user.image} alt="Not Found" className="imgPro" />

        <div className="profilInfoInfo">
        <Card.Text>Name : {user.name} </Card.Text>
        <Card.Text>Lastname : {user.lastname} </Card.Text>
        <Card.Text>Age : {user.age}</Card.Text>
        <Card.Text>Address : {user.adress}</Card.Text>
        <Card.Text>Email address : {user.email} </Card.Text>
        </div>
        </div>
        </div>
        <div className="cardProfilLayout">
            <div className="cardProfilButt">
            <Button as={Link} to={`/Editcurrentuser/${user._id}`} variant="outline-info">Edit My Profil</Button>
            <Button as={Link} to="/AddMarket" variant="outline-success">Add-e-Market</Button>
            <ConfirmDelMyProfil user={user}/>
            </div>
        </div>
        
    </Card.Body>
    </Card>
    </div>
{
    user._id &&
    <>
    <ListMarketUser id = {user._id}/>
    <ListMyCommandes id = {user._id}/>
    <ListCommandesProduct id = {user._id}/>
    </>
}
    
    {/*  */}
    </>
    
            }


    </div>
        
    )
}

export default Profil