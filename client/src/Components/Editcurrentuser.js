import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { current, updateCurrentUser } from '../redux/Actions/AuthActions'
import axios from 'axios'
import FormMoh from 'react-bootstrap/Form'



const Editcurrentuser = () =>{
    const oneUser = useSelector(state => state.AuthReducer.user)

    useEffect(() =>{
        dispatch(current())
    },[])

    const [name,setName] = useState(oneUser.name)
    const [lastname,setLastname] = useState(oneUser.lastname)
    const [age,setAge] = useState(oneUser.age)
    const [adress,setAdress] = useState(oneUser.adress)
    const [email,setEmail] = useState(oneUser.email);
    const [image,setImage]=useState(oneUser.image)
    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    

    useEffect(()=>{
setName(oneUser.name)
setLastname(oneUser.lastname)
setAge(oneUser.age)
setAdress(oneUser.adress)
setEmail(oneUser.email)
setImage(oneUser.image)
    },[oneUser])

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
    }

    const handelUpdate=()=>{
        dispatch(updateCurrentUser({name,lastname,age,adress,email,image},id,navigate))
    }
    
    return(
<>
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg' /> Edit User
    </Header>
    <Form size='large'> 
        <Segment stacked>
        <Form.Input value={name} onChange={(e)=>setName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Name' />
        <Form.Input value={lastname} onChange={(e)=>setLastname(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Lastname' />
        <Form.Input value={age} onChange={(e)=>setAge(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Age' />
        <Form.Input value={adress} onChange={(e)=>setAdress(e.target.value)} fluid icon='at' iconPosition='left' placeholder='Address' />
        <Form.Input value={email} onChange={(e)=>setEmail(e.target.value)} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
        <>
                {image ? (
                    <img
                    src={`../../.${oneUser?.image?.replace('\\','/')}`}
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
            <Button as={Link} to='/Profil' >Cancel</Button>
            <Button.Or />
            <Button onClick={()=>handelUpdate()} positive>Save</Button>
        </Button.Group>
        </Segment>
    
    </Form>
    </Grid.Column>
</Grid>
</>
)
    }

export default Editcurrentuser