import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../redux/Actions/CommentAction';


const ConfirmeDeleteComment=({el})=>{


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const dispatch = useDispatch()
const handleDelete=()=>{
    handleClose()
    dispatch(deleteComment(el._id,el.product._id))
  }
    return(
        <div>
      <Button style={{marginLeft :'10px',marginRight:'10px',marginBottom:'10px'}}  variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"20px"}}>Delete Comment ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}


export default ConfirmeDeleteComment