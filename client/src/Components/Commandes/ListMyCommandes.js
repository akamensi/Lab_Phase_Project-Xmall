import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Header} from "semantic-ui-react"
import { getMyCommandes } from "../../redux/Actions/CommandeActions"
import Table from 'react-bootstrap/Table';
import ConfirmDelCommande from "./ConfirmDelCommande";


const ListMyCommandes=({id})=>{
  console.log("user id",id)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMyCommandes(id))
    },[])
    const myCommandes = useSelector(state => state.CommandeReducer.myCommandes)
    
    return(
        <div className="centerproprop"> 
        <Header as='h2' color='teal' textAlign='center'>
        My Commandes
        </Header>
        <Table striped bordered hover style={{ width: "95%"}}>
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
            myCommandes &&  myCommandes.map(el=> 
            <tr>
                <td>{el?.owner?.name}</td>
                <td>{el?.product?.name}</td>
                <td>{el.prixTotal}</td>
                <td>{el.qte}</td>
                <td>{el.status}</td>
                <td className="buttCom">
                  {el.status == 'In progress...' && <ConfirmDelCommande el={el} id={id}/>}
                </td>
              </tr>)
        }
      </tbody>
    </Table>
        </div>
    )
}


export default ListMyCommandes