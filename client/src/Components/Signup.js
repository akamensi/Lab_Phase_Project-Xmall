import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { signup } from '../redux/Actions/AuthActions'
import {useDispatch} from 'react-redux'
import {FormGroup} from "reactstrap"
import axios from "axios"
import FormMoh from 'react-bootstrap/Form';

const Signup = () =>{

    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [age,setAge] = useState(0)
    const [adress,setAdress] = useState('')
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState("");
    const [image,setImage]=useState("")
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignup=()=>{
        dispatch(signup({image,name,lastname,age,adress,email,password},navigate))}
    
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
<>
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg' /> Create your account
    </Header>
    <Form size='large'>
        <Segment stacked>
        <Form.Input onChange={(e)=>setName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Name' />
        <Form.Input onChange={(e)=>setLastname(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Lastname' />
        <Form.Input onChange={(e)=>setAge(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Age' />
        <Form.Input onChange={(e)=>setAdress(e.target.value)} fluid icon='at' iconPosition='left' placeholder='Address' />
        <Form.Input onChange={(e)=>setEmail(e.target.value)} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
        <Form.Input onChange={(e)=>setPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
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
                      {!uploading ? "Upload Image For Profil" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    {/* Select File
                    <input
                      
                      type="file"
                      accept="image/*"
                      onChange={uploadProfileImage}
                    /> */}
                  </div>
                </>
      </FormGroup>
      <FormMoh.Group controlId="formFile" className="mb-3">      
        <FormMoh.Control type="file" accept="image/*"onChange={uploadProfileImage} />
      </FormMoh.Group>
        <Button onClick={()=>handleSignup()} color='teal' fluid size='large'>
            Sign Up
        </Button>
        </Segment>
    </Form>
    <Message>
        Already have? <a as={Link}  href='/Login'>Login</a>
    </Message>
    </Grid.Column>
</Grid>
</>
)
    }

export default Signup