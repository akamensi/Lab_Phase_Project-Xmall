import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import {  Form, Segment } from 'semantic-ui-react'
import { addProduct } from "../../redux/Actions/ProductAction"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FormGroup} from "reactstrap"
import axios from "axios"
import FormMoh from 'react-bootstrap/Form';

const AddProduct=({id})=>{


const [name,setName] = useState('')
const[description,setDescription]=useState('')
const[price ,setPrice ]=useState(0)
const [show, setShow] = useState(false);
const[image,setImage]=useState("")
const [uploading, setUploading] = useState(false);


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const dispatch = useDispatch()
const navigate=useNavigate()
const HandelAdd=()=>{
    dispatch(addProduct({image,name,description,price,market : id},navigate))
    handleClose()
}
const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  setUploading(true);
  axios
    .post("/api/uploads", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      setImage(response.data);
      setUploading(false);
    })
    .catch((err) => {
      console.log(err);
      setUploading(false);
    });
};

    return(
            <div>
<>
      <Button className="buttCardUser"   variant="outline-success"  onClick={handleShow}>
      Add a Product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add a Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form size='large'>
        <Segment stacked>
        <Form.Input onChange={(e)=>setName(e.target.value)} fluid icon='product hunt' iconPosition='left' placeholder='Product name' />
        <Form.Input onChange={(e)=>setDescription(e.target.value)} fluid icon='discourse' iconPosition='left' placeholder='Product discription' />
        <Form.Input onChange={(e)=>setPrice(e.target.value)} fluid icon='money bill alternate outline' iconPosition='left' placeholder='Product price' />
        <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select Image
                    <FormMoh.Group controlId="formFile" className="mb-3">      
        <FormMoh.Control type="file" accept="image/*"onChange={uploadProfileImage} />
      </FormMoh.Group>
                  </div>
                </>
      </FormGroup>
        </Segment>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandelAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}


export default AddProduct