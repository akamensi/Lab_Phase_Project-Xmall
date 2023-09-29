import { useEffect } from 'react'
import {Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOneuser } from '../redux/Actions/UserActions'
import {Image} from 'semantic-ui-react'

const ProfilUser=()=>{

    
const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{dispatch(getOneuser(id))},[])

const user = useSelector(state => state.UserReducer.oneUser)

return(
        <div className="proList">
    <Card className="proCard"> 
    <Card.Body className="proContent">
        <Card.Title>Profil User</Card.Title>
        <Image className="imgPro" src='../1.jpg' /> <br />
        <Card.Subtitle >{user.email}</Card.Subtitle>
        <Card.Text>{user.name} {user.lastname}</Card.Text>
        <Card.Text>{user.age}</Card.Text>
        <Card.Text>{user.adress}</Card.Text>
        <Button as={Link} to={`/ListMarketUser/${user._id}`} Button variant="outline-dark">Market</Button>
        <Button as={Link} to={`/Edituser/${user._id}`} variant="outline-info">Edit</Button>
        <Button as={Link} to="/AddMarket" variant="outline-success">Add-e-Store</Button>
    </Card.Body>
    </Card>
    </div>
        
    )
}


export default ProfilUser