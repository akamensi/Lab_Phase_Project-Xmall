import React from 'react'
import { Button, Form, Grid, Header, Image, TextArea, Segment } from 'semantic-ui-react'

const Contactus = () => (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='../1.jpg'/> BE FREE
    </Header>
    <Form size='large'>
        <Segment stacked>

        <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
        <TextArea placeholder='Tell us' style={{ minHeight: 100 }} />
        <Button color='teal' fluid size='large'>Send</Button>
        </Segment>
    </Form>
    </Grid.Column>
</Grid>
)

export default Contactus