import {List, Grid, Header, Segment,Container} from 'semantic-ui-react'


const Footer=()=>{
    return(
    <>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
        <Grid divided inverted stackable>
        <Grid.Row>
        <Grid.Column width={3}>
        <Header inverted as='h4' content='About' />
        <List link inverted>
                <List.Item as='a'>Xmall</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Help Center</List.Item>
                <List.Item as='a'>God Plans</List.Item>
        </List>
        </Grid.Column>
        <Grid.Column width={3}>
        <Header inverted as='h4' content='Services' />
        <List link inverted>
                <List.Item as='a'>e-commerce</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
        </List>
            </Grid.Column>
            <Grid.Column width={7}>
            <Header as='h4' inverted>
                Footer Header
            </Header>
            <p>We can't wait to welcome you back to our platform! 
                Your online store journey is our top priority, 
                and we're committed to providing you with the best tools and support to make it a success. 
                Explore our latest features, templates, and resources to continue crafting your dream online store. 
                Your success story continues with us, and we're excited to be a part of it. 
                Visit us today and keep building your e-commerce empire with confidence!</p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Container>
    </Segment>

</>
    )
}


export default Footer