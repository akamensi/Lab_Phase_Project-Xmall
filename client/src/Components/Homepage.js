import {Button,Icon,Container,Divider,Grid,Header,Image,Segment} from 'semantic-ui-react'
import ListProduct from './Product/ListProduct'
import { Link } from 'react-router-dom'
import CradProduct from './Product/CardProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../redux/Actions/ProductAction'


const Homepage=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[])



    const products = useSelector(state => state.ProductReducer.products)
    const mobile = 0
    return(
        <>
        <Segment style={{backgroundColor :"black",margin:'0'}}>
        <Container text style={{backgroundColor : 'black'}}>
    <Header
    as='h1'
    content='Imagine-e-Store'
    inverted
    style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: "10px",
        marginTop:"10px"
        
    }}
    />
    <Header
    as='h2'
    content='That Sells What Your Hands Have Made .'
    inverted
    style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
    }}
    />
    <Header
    as='h2'
    content='And Sell It Everywhere .'
    inverted
    style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
    }}
    />
    <Button as={Link} to='/Signup'  primary size='huge'>Get Started<Icon name='right arrow' /></Button>
    
    <br />
    <br />
    <Button as={Link} to='https://www.facebook.com/' basic inverted color='blue'><Icon name='facebook' /> Facebook</Button>
    <Button as={Link} to='https://www.instagram.com/' basic inverted color='teal'><Icon name='instagram' /> Instagram</Button>
</Container>
</Segment>
        <Segment style={{ padding: '2em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            we Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            We can give your company superpowers to do things that they never thought possible.
            Let us delight your customers and empower your needs... through pure data analytics.
            We provide you with everything necessary to market and sell your products.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
            We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
            bioengineered.
            </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='../2.jpg' />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column textAlign='center'>
            <Button size='huge'>Our Solution</Button>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            "I should Start earlier."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            <Image avatar src='../3.avif' />
            <b>Kamar</b> The world of jam's owner
            </p>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </Segment>

    <Segment style={{ padding: '2em 0em' }} vertical>
    <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Instead of focusing on content creation and hard work, we have learned how to master the
        art of doing nothing by providing massive amounts of whitespace and generic content that
        can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>Social media strategy</Button>
        <br /> <br />
        <br />

        <div className="centerCard">
        {products.length == 0 ? <h3>Pas de produit</h3>
        : 
        products.length == 4 ? products.map(el=><CradProduct key={el._id} el={el}/>)
        :
        products.slice(0,4).map(el=><CradProduct key={el._id} el={el}/>)}
        </div>
        <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        <a href='/'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
        Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
        it's really true. It took years of gene splicing and combinatory DNA research, but our
        bananas can really dance.
        </p>
        <Button as='a' size='large'>
        I'm Still Quite Interested
        </Button>
    </Container>
    </Segment>

    
    
        </>
    )
}

export default Homepage