import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux/Actions/ProductAction"
import { Button, Form, Header } from "semantic-ui-react"
import CradProduct from "./CardProduct"



const ListProduct=()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const [text,setText] = useState('')

    const products = useSelector(state => state.ProductReducer.products)

    return(
        <div> 
        <Header as='h2' color='teal' textAlign='center'> 
        List of Products
        </Header>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <Form.Input value={text} onChange={(e)=>setText(e.target.value)}    iconPosition='left' placeholder='Search' />
        <Button onClick={()=>{setText("")}}>Reset</Button>
        </div>
        <br /> <br /> 
        <div className="centerCard" >
            {
            products.length == 0 ? <h3>No Products</h3>
            :
            products.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de produits</h3> 
            : 
            products.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).map(el=><CradProduct key={el._id} el={el}/>)
            }
        </div>
        </div>
        
    )
}

export default ListProduct