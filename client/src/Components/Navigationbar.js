import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Container, Menu, Segment, Dropdown } from 'semantic-ui-react';
import { logout } from '../redux/Actions/AuthActions';

const options = [
{ key: 1, text: 'About e-commerce', value: 1 },
{ key: 2, text: 'Social media strategy', value: 2 },
{ key: 3, text: 'Marketing', value: 3 },
{ key: 3, text: 'Our Solution', value: 4 },
];

const Navigationbar=()=> {

const [fixed, setFixed] = useState(false);
const token = localStorage.getItem('token')
const user = useSelector( state => state.AuthReducer.user )
const dispatch = useDispatch()
const navigate = useNavigate()




return (
    <Segment inverted textAlign='center' style={{ padding: '1em 0em'}} vertical>
    <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
    >
        <Container>
        <Menu.Item active>Xmall</Menu.Item>
        <Menu.Item as={Link} to='/' >Home</Menu.Item>
        
            
        {
            token && user ?
            <>
            <Menu.Item as={Link} to='/Listusers'>Users</Menu.Item>
            <Menu.Item as={Link} to="/ListMarket" >Markets</Menu.Item>
            <Menu.Item as={Link} to="/ListProduct" >Product</Menu.Item>
            <Menu.Item position='right'>
            <Button as={Link} to='/Profil' inverted={!fixed}>Profil</Button>
            <Button onClick={()=>{dispatch(logout());navigate('/')}} inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
            Logout
            </Button>
            </Menu.Item>
            </>
            :
            <>
            <Menu.Item as={Link} to='/Whoweare'>Who we are?</Menu.Item>
        <Menu.Item as='a'>
            <Dropdown text='Resources' options={options} />
        </Menu.Item>
        <Menu.Item as={Link} to='/Contactus'>Contact Us</Menu.Item>
            <Menu.Item position='right'>
            <Button as={Link} to='/Login' inverted={!fixed}>Log in</Button>
            <Button as={Link} to='/Signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
            Sign Up
            </Button>
        </Menu.Item>
            </>
        }
    </Container>
    </Menu>
    </Segment>
);
}



export default Navigationbar;