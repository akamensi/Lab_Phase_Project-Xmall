import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"



const CradProduct=({el})=>{

    const token = localStorage.getItem('token')
    return(

    <div style={{marginLeft:"20px", marginRight :'20px',marginBottom:'20px'}}>
        <Link to={token ?`/DescriptionProduct/${el?._id}` : "/Signup"}>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div style={{display : 'flex' , flexDirection:'column',alignItems:'center',height:'228px'}}>
        <img src={`../../.${el?.image?.replace('\\','/')}`} alt="Not Found" className="imgPro" />
        <Card.Title>{el.name}</Card.Title>
        </div>
        </Card.Body>
    </Card>
        </Link>
        </div>
    )
}

export default CradProduct
