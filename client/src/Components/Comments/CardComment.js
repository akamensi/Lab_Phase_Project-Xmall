import { Card} from "react-bootstrap"
import { useSelector } from "react-redux"
import EditComment from "./EditComment"
import ConfirmeDeleteComment from "./ConfirmeDeleteComment"
import {Image} from 'semantic-ui-react'


const CardComment=({el})=>{


    const user = useSelector( state => state.AuthReducer.user )
    return(
        <div>
            
    <Card style={{    marginLeft: "177px",
    marginRight: "177px"}} >
        <Card.Body style={{display:'flex',flexDirection:'column',justifyContent:'space-around' ,alignItems :'center',width:'200px'}}>
            <div style={{display:'flex',justifyContent:'space-around' ,alignItems :'center',width:'200px'}}>
            <Image avatar src={`../../../.${el?.owner?.image?.replace('\\','/')}`}/>
            <Card.Title >{el?.owner?.name} {el?.owner?.lastname}</Card.Title>  
            </div>
        <Card.Text style={{marginLeft:'100px'}}>{el.text}</Card.Text>
        </Card.Body>
        {
            (user._id == el.owner._id || user.role == 'admin') &&
            <div className="buttComm">
                <ConfirmeDeleteComment el={el}/>
                <EditComment el={el}/>
            </div>
        }
        
    </Card>
    
        </div>
    )
}


export default CardComment