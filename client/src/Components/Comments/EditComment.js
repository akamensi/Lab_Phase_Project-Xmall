import { useState } from "react";
import {updateComment } from "../../redux/Actions/CommentAction"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch} from "react-redux";
import { Form, Grid, Segment } from "semantic-ui-react";

export const EditComment=({el})=>{

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const dispatch = useDispatch()

    const [text,setText] = useState(el.text)

    const HandelEdit=()=>{
    handleClose()
        dispatch(updateComment({text},el._id,el.product._id))
    }

    return(
        <div>


<Button style={{marginLeft :'10px',marginRight:'10px',marginBottom:'10px'}} variant="outline-warning" onClick={handleShow}>
        Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Grid textAlign='center'  verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Form size='large'>
        <Segment stacked>
        <Form.Input value={text} onChange={(e)=>setText(e.target.value)} fluid icon='comments' iconPosition='left' placeholder='Comment' />
        <Button onClick={()=>HandelEdit()} color='teal' fluid size='large'>
            Edit
        </Button>
        </Segment>
    </Form>
    </Grid.Column>
</Grid>
        </Modal.Body>
</Modal>
        </div>
    )
}


export default EditComment