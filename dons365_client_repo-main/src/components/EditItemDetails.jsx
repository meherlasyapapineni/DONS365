import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function EditNewItem(props) {
  const item = props.item;
  const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); window.location.reload();}
    const handleShow = () => setShow(true);
    const [id, setId] = useState(item._id);
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [status, setStatus] = useState(item.status);
    const [contact, setContact] = useState(item.phoneNo);
    
    const editItem=(e)=>{
      e.preventDefault();
      const form = e.currentTarget;
      if(form.checkValidity() === false){
        e.preventDefault();
        e.stopPropagation();
      }
      setValidated(true);
      console.log("function called")
      Axios.post("http://3.134.86.20/api/items/UpdateItem", { 
        "itemId" : id,     
        "name" : name,
        "description" : description,
        "price" : price,
        "userId" : JSON.parse(sessionStorage.getItem('userId')),
        "status" : status,
        "phoneNo" : contact, 
  }).then((response) =>{
      alert("Updated Successfully!")
  });
  // e.preventDefault();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={editItem}>
            <Form.Group hidden className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>id</Form.Label>
              <Form.Control type="text" placeholder="id" value={id} onChange={(e)=> setId(e.target.value)}/>
              {/* <Form.Control.Feedback type="invalid">Please enter item name.</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="item" autoFocus value={name} onChange={(e)=> setName(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter item name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter price.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e)=> setDescription(e.target.value)} />
              <Form.Control.Feedback type="invalid">Please enter description.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder="Status" value={status} onChange={(e)=> setStatus(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter item status.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control required name="contact" type="text" placeholder="xxx-xxx-xxxx" value={contact} onChange={(e)=> setContact(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter contact.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default EditNewItem
