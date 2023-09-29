import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteProduct } from '../../redux/Actions/ProductAction';


function ConfirmeDelProduct({oneProduct}) { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleDelete=()=>{
    handleClose()
    dispatch(deleteProduct(oneProduct._id,navigate))
  }
  return (
    <>
      <Button className="buttCardUser" variant="outline-danger" onClick={handleShow}>
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
    </>
  )
}

export default ConfirmeDelProduct;