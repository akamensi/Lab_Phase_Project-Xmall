import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/Actions/UserActions"
import Cardusers from "./Cardusers"
import { Button, Form, Header,Image } from "semantic-ui-react"



const Listusers=()=>{

const users = useSelector(state => state.UserReducer.users)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUsers())
    },[])

    const [text,setText] = useState('')
    


    return(
        <div>
        <Header as='h2' color='teal' textAlign='center'>
         List of Users
        </Header>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <Form.Input value={text} onChange={(e)=>setText(e.target.value)}    iconPosition='left' placeholder='Search' />
        <Button onClick={()=>{setText("")}}>Reset</Button>
        </div>
        <br /> <br />
        <div className="centerCard">
            
                {
                    users.length == 0 ? <h3>No Users</h3>
                    :
                    users.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de produits</h3> 
                    : 
                    users.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).map(el=><Cardusers key={el._id} el={el}/>)
                    }
            {/* // users.map(el=> <Cardusers el={el}/> ) */}
            
        </div>
        </div>
    )
}


export default Listusers