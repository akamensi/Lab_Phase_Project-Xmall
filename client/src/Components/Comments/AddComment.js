import {useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { addComment } from '../../redux/Actions/CommentAction'




const AddComment=({id})=>{

    const dispatch = useDispatch()
    const [text,setText] = useState('')


    const HandelAdd=()=>{
        dispatch(addComment({text,product : id}))
        setText('')}
        

    return(
        <div>
    <Grid textAlign='center'  verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Form size='large'>
        <Segment stacked>
        <Form.Input value={text} onChange={(e)=>setText(e.target.value)} fluid icon='comments' iconPosition='left' placeholder='Comment' />
        <Button onClick={()=>HandelAdd()} color='teal' fluid size='large'>
            Add Comment
        </Button>
        </Segment>
    </Form>
    </Grid.Column>
</Grid>
        </div>
    )
}


export default AddComment