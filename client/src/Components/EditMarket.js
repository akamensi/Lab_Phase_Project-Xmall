import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { getOneMarket, updateMarket } from "../redux/Actions/MarketActions"
import { Link } from 'react-router-dom'
import FormMoh from 'react-bootstrap/Form';
import axios from 'axios'

const EditMarket=()=>{

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(getOneMarket(id))},[])

    const oneMarket = useSelector(state => state.MarketReducer.oneMarket)
    
    
    const [marketName,setMarketName] = useState(oneMarket.marketName)
    const [categorie,setCategorie] = useState(oneMarket.categorie)
    const [marketDisc,setMarketDisc] = useState(oneMarket.marketDisc)
    const [marketAdress,setMarketAdress] = useState(oneMarket.marketAdress)
    const [image,setImage]=useState(oneMarket.image)
    const [uploading, setUploading] = useState(false);
    useEffect(()=>{
        
        setMarketName(oneMarket.marketName) 
        setCategorie(oneMarket.categorie)
        setMarketDisc(oneMarket.marketDisc)
        setMarketAdress(oneMarket.marketAdress)
        setImage(oneMarket.image)
    },[oneMarket])
    
    const navigate = useNavigate()
    const uploadProfileImage = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append("image", file);
        setUploading(true);
        axios
          .post("/api/uploads", bodyFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            setImage(response.data);
            setUploading(false);
          })
          .catch((err) => {
            console.log(err); 
            setUploading(false);
          });
      };
    const HandelUpdat=()=>{dispatch(updateMarket({marketName,categorie,marketDisc,marketAdress,image},id,navigate))}
    return(
        <div>
    
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg' /> Edit Market
    </Header>
    <Form size='large'>
        <Segment stacked>
        
        <Form.Input value={marketName} onChange={(e)=>setMarketName(e.target.value)} fluid icon='shopping cart' iconPosition='left' placeholder='Market Name' />
        <Form.Input value={categorie} onChange={(e)=>setCategorie(e.target.value)} fluid icon='target' iconPosition='left' placeholder='categorie' />
        <Form.Input value={marketDisc} onChange={(e)=>setMarketDisc(e.target.value)} fluid icon='discourse' iconPosition='left' placeholder='Market Discreption' />
        <Form.Input value={marketAdress} onChange={(e)=>setMarketAdress(e.target.value)} fluid icon='map marker alternate' iconPosition='left' placeholder='Market Address' />
        <>
                  {image ? (
                    <img
                      src={`../../.${oneMarket?.image?.replace('\\','/')}`}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Profil" : "Loading ..."}
                    </div>
                  )}
                </>
                <FormMoh.Group controlId="formFile" className="mb-3">      
        <FormMoh.Control type="file" accept="image/*"onChange={uploadProfileImage} />
      </FormMoh.Group>
        <Button.Group>
            <Button as={Link} to="/ListMarket" >Cancel</Button>
            <Button.Or />
            <Button onClick={()=>HandelUpdat()} positive>Save</Button>
        </Button.Group>
        </Segment>
    </Form>
    </Grid.Column>
</Grid>
        
        </div>
    )
}


export default EditMarket