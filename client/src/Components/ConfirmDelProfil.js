import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/Actions/UserActions';
import { useLocation, useNavigate } from 'react-router';
import { deleteProfil } from '../redux/Actions/AuthActions';

function ConfirmDelProfil({oneUser}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const handleDelete=()=>{
    handleClose()
    if (location.pathname.includes('/Profil')) {
      dispatch(deleteProfil(oneUser._id,navigate))
    } else {
      dispatch(deleteUser(oneUser._id,navigate))
    }
    
    
  }
  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comfire Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete {oneUser.name} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmDelProfil;