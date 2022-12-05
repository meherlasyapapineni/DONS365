import { Axios } from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddNewItem() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    
    function addNewItem() {
        console.log("this is function")
        Axios.post("http://localhost:3001/api/items/AddItem",{
            "name" : name,
            "description" : description,
            "price" : price,
            "status" : status,
        }).then((response) =>{
            alert("New Item added")
        });
    }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addNewItem}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="item" autoFocus value={name} onChange={(e)=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e)=> setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
                <Form.Select value={status} onChange={(e)=> setStatus(e.target.value)}>
                <option>Available</option>
                <option>Sold Out</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddNewItem