import {useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { addMarket } from '../redux/Actions/MarketActions'
import { useNavigate } from 'react-router'
import {FormGroup} from "reactstrap"
import axios from "axios"


const AddMarket=()=>{
    const dispatch = useDispatch()
    
    const options = [
      {  text: 'Antiques' , value: 'Antiques'  },
      {  text: 'Artisanal' , value: 'Artisanal'  },
      {  text: 'Art' , value: 'Art'  },
      {  text: 'Baby' , value: 'Baby'  },
      {  text: 'Clothing, Shoes & accessories' , value: 'Clothing, Shoes & accessories'  },
      {  text: 'Computers & Networking' , value: 'Computers & Networking'  },
      {  text: 'Electronics & accessories' , value: 'Electronics & accessories'  },
      {  text: 'Food product' , value: 'Food product'  },
      {  text: 'Health & Beauty' , value: 'Health & Beauty'  },
      {  text: 'Home & Garden' , value: 'Home & Garden'  },
      {  text: 'Jewelry & Watches' , value: 'Jewelry & Watches'  },
      {  text: 'Real estate', value: 'Real estate' },
      {  text: 'Food', value: 'Food' },
      {  text: 'various', value: 'various' }
      
    ]
    const [marketName,setMarketName] = useState('')
    const [categorie,setCategorie] = useState('various')
    const [marketDisc,setMarketDisc] = useState('')
    const [marketAdress,setMarketAdress] = useState('')
    const [uploading, setUploading] = useState(false);
    const [image,setImage]=useState("")
   
    const navigate = useNavigate()
    const HandelAdd=()=>{
        dispatch(addMarket({image,marketName,categorie,marketDisc,marketAdress},navigate))
    }
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

    return(
        <div>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg' /> Add a Market
    </Header>
    <Form size='large'>
        <Segment stacked>
        <Form.Input onChange={(e)=>setMarketName(e.target.value)} fluid icon='shopping cart' iconPosition='left' placeholder='Market Name' />
        <Form.Input onChange={(e)=>setMarketDisc(e.target.value)} fluid icon='discourse' iconPosition='left' placeholder='Market Discreption' />
        <Form.Input onChange={(e)=>setMarketAdress(e.target.value)} fluid icon='map marker alternate' iconPosition='left' placeholder='Market Address' />
        <Form.Select
            onChange={(e)=> setCategorie(e.target.innerText)}
            label= "Category"
            options={options}
            placeholder='Category'
            />
        <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>
        
        <Button onClick={()=>HandelAdd()} color='teal' fluid size='large'>
            Add Market
        </Button>
        </Segment>
    </Form>
    </Grid.Column>
</Grid>
        </div>
    )
}

export default AddMarket