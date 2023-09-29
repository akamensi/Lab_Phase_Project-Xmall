import { Card} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { current } from "../redux/Actions/AuthActions"
import { useEffect } from "react"
import {Image} from 'semantic-ui-react'

const Cardusers=({el})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
         dispatch(current())
    },[])
    const user = useSelector( state => state.AuthReducer.user )
    return(
    //     <div className="proList">

    //     <Link to={`/UserDescription/${el._id}`}>
    // <Card className="proCard">

    //     <Card.Body className="proContent">
    //     {user._id == el._id && <Card.Title>You</Card.Title> }
    //     <Image className="proImg" src='../1.jpg' />
    //     <Card.Title className="proH6" style={{textDecoration: 'none'}} as={Link} to={`/ProfilUser/${el._id}`}>
    //         {el.name} {el.lastname}</Card.Title>
    //     <Card.Text className="marH">{el.email}</Card.Text>
    //     <Card.Text className="marH">Address: {el.adress}</Card.Text>
    //     </Card.Body>
    

    // </Card>
    // </Link>

    //     </div>

    <div style={{marginLeft:"20px", marginRight :'20px',marginBottom:'20px'}}>
         <Link to={`/UserDescription/${el._id}`}>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div style={{display : 'flex' , flexDirection:'column',alignItems:'center',height:'228px'}}>
        <img src={el.image} alt="Not Found" className="imgPro"  style={{width:'172px',height:'172px'}}/>
        <Card.Title>{el.name} {el.lastname}</Card.Title>
        <Card.Text>{el.email}</Card.Text>
        </div>
        {/* <div style={{display : 'flex' , flexDirection:'column',alignItems:'center'}}>
        <Button as={Link} to={`/ProfilUser/${el.owner._id}`} Button variant="outline-dark">Profil's Owner</Button>
        <Button className="buttCardUser" as={Link} to={`/EditMarket/${el._id}`} variant="outline-info">Edit</Button>
        <Button as={Link} to={`/AddProduct`} inverted color='green'>Add-e-Product</Button>
        <Button className="buttCardUser" onClick={()=>dispatch(deleteMarket(el._id))} variant="outline-danger">Delete</Button>
       <AddProduct/>
        </div> */}
        </Card.Body>
    </Card>
    </Link>
        </div>
    )
}


export default Cardusers