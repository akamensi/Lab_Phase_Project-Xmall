import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteCommande } from '../../redux/Actions/CommandeActions';


const ConfirmDelCommande=({el,id})=>{

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const dispatch = useDispatch()
const handleDelete=()=>{
    handleClose()
    dispatch(deleteCommande(el._id,id))
  }
    return(
        <div>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"20px"}}>Delete Product ?</Modal.Body>
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


export default ConfirmDelCommande