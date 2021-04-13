import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { removeEmpFromList } from "./action";
export default function RemoveEmp(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
console.log(props)
const handleButton=()=>{
  props.handleRemove(props.data)
  handleClose()
}
    return (
        <>

      <Button variant="danger" onClick={handleShow}>
        Remove
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Want to remove Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body> This will remove employee
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleButton}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      
    )
}
