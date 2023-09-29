import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useLocation, useParams } from "react-router"
import { getOneuser } from "../redux/Actions/UserActions"
import { Link } from "react-router-dom"
import ListMarketUser from "./ListMarketUser"
import { current } from "../redux/Actions/AuthActions"
import {Card, Button} from 'react-bootstrap'
import ConfirmDelProfil from "./ConfirmDelProfil"
const UserDescription=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneuser(id))
        dispatch(current())
    },[])

    const oneUser = useSelector(state=>state.UserReducer.oneUser)
    const user = useSelector( state => state.AuthReducer.user )
    useEffect(()=>{
        dispatch(getOneuser(id))
    },[id])
    return(
        <div>
            {
                oneUser &&
                <div className="cardProfilLayout">
            <Card style={{ width: '80%' }}>
    <Card.Body>
        <Card.Title>{oneUser.name}'s Profil</Card.Title>
        <div className="centerProfil">
        <div className="profilInfo">
        <img  src={`../../.${oneUser?.image?.replace('\\','/')}`} alt="Not Found" className="imgPro" />
        <div className="profilInfoInfo">
        <Card.Text>Name : {oneUser.name} </Card.Text>
        <Card.Text>Lastname : {oneUser.lastname} </Card.Text>
        <Card.Text>Age : {oneUser.age}</Card.Text>
        <Card.Text>Address : {oneUser.adress}</Card.Text>
        <Card.Text>Email address : {oneUser.email} </Card.Text>
        </div>
        </div>
        </div>
        
    { (user._id == oneUser._id || user.role == 'admin') &&
    <div className="cardProfilLayout">
            <div className="cardProfilButt">
            <Button as={Link} to={`/Edituser/${oneUser._id}`} variant="outline-info">Edit Profil</Button>
            <ConfirmDelProfil oneUser={oneUser}/>
            </div>
        </div>}
        
    </Card.Body>
    </Card>
    
    </div>
            }
      <ListMarketUser id ={oneUser._id}/>
        </div>
    )
}

export default UserDescription