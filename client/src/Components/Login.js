import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { login } from '../redux/Actions/AuthActions';

const LoginForm = () =>{

    const [email,setEmail] = useState('');
    const[password,setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const HandelLogin=()=>{
        dispatch(login({email,password},navigate))
    }

    return(

<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg'/> Log-in to your account
    </Header>
    <Form size='large'>
        <Segment stacked>
        <Form.Input onChange={(e)=>setEmail(e.target.value)} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
        <Form.Input onChange={(e)=>setPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
        <Button onClick={()=>HandelLogin()} color='teal' fluid size='large'>Log In</Button>
        </Segment>
    </Form>
    <Message>New to us? <a as={Link} href='/Signup'>Sign Up</a></Message>
    </Grid.Column>
</Grid>
)
}


export default LoginForm