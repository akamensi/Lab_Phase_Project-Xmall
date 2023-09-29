import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { updateProduct, getOneProduct } from "../../redux/Actions/ProductAction"
import FormMoh from 'react-bootstrap/Form'
import axios from "axios"

const EditProduct=()=>{

  const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(getOneProduct(id))},[])

    const oneProduct = useSelector(state => state.ProductReducer.oneProduct)

        const[name,setName]=useState('')
        const[description,setDescription]=useState('')
        const[price,setPrice]=useState(0)
        const [image,setImage]=useState(oneProduct.image)
        const [uploading, setUploading] = useState(false);

        useEffect(()=>{
          setName(oneProduct.name)
          setDescription(oneProduct.description)
          setPrice(oneProduct.price)
          setImage(oneProduct.image)
        },[oneProduct])

        const navigate = useNavigate()
        const uploadProfileImage = (e) => {
          const file = e.target.files[0];
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          setUploading(true);
          axios.post("/api/uploads", bodyFormData, {
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
        const HandelUpdate=()=>{
          dispatch(updateProduct({name,description,price,image},id,navigate))
        }

    return(
        <div>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg' /> Edit Product
    </Header>
    <Form size='large'>
        <Segment stacked>
        <Form.Input value={name} onChange={(e)=>setName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Owner Name' />
        <Form.Input value={description} onChange={(e)=>setDescription(e.target.value)} fluid icon='discourse' iconPosition='left' placeholder='Market Discreption' />
        <Form.Input value={price} onChange={(e)=>setPrice(e.target.value)} fluid icon='map marker alternate' iconPosition='left' placeholder='Market Address' />
        <>
                  {image ? (
                    <img
                      src={`../../.${oneProduct?.image?.replace('\\','/')}`}
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
            <Button as={Link} to="/ListProduct" >Cancel</Button>
            <Button.Or />
            <Button onClick={()=>HandelUpdate()}  positive>Save</Button>
        </Button.Group>
        </Segment>
    </Form>
    </Grid.Column>
</Grid>
        </div>
    )
}


export default EditProduct