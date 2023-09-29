import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  Header } from "semantic-ui-react"
import { getCommandes, updateCommande } from "../../redux/Actions/CommandeActions"
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap'


const ListCommandesProduct=({id})=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCommandes(id))
    },[])
    const commandes = useSelector(state => state.CommandeReducer.commandes)
    
    

    


    return(
        <div className="centerproprop">
        <Header as='h2' color='teal' textAlign='center'>
        Orders to process
        </Header>
        <Table striped bordered hover style={{width: "95%"}}>
      <thead>
        <tr>
          <th>Applicant</th> 
          <th>Product</th>
          <th>Total Price</th>
          <th>Quantity</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
            commandes &&  commandes.map(el=> 
            <tr>
                <td>{el?.owner?.name}</td>
                <td>{el?.product?.name}</td>
                <td>{el.prixTotal}</td>
                <td>{el.qte}</td>
                <td style={{width: "121px", color : el.status == "Rejected" ? "red" : el.status == "Accepted" ? "green" : ""}}>{el.status}</td>
                <td className="buttCom">
                  <Button variant="outline-danger" onClick={()=>dispatch(updateCommande({status:'Rejected'},el._id,id))}>Dismiss</Button>
                  <Button variant="outline-success" onClick={()=>dispatch(updateCommande({status:'Accepted'},el._id,id))}>Accept</Button>                  
                </td>
              </tr>)
        }
      </tbody>
    </Table>
        </div>
    )
}


export default ListCommandesProduct