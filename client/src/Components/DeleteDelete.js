import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getOneuser } from '../redux/Actions/UserActions';
import { useNavigate } from 'react-router';

function DeleteDelete({id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{dispatch(getOneuser(id))},[])
  const user = useSelector(state => state.UserReducer.oneUser)
  const handleDelete=()=>{
    handleClose()
    dispatch(deleteUser(id,navigate))
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
        <Modal.Body>Delete {user.name} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteDelete;