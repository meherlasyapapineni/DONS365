import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddNewPost.css'
import {useState} from 'react'
import Axios from 'axios'

function AddNewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function addNewPost() {
    Axios.post("http://localhost:3001/api/posts/CreatePost",{
      "title" : title,
      "description" : description,
    }).then((response) =>{
      alert("New Post Added!")
    });
  }
  
  return (
    <Form className='formAddPost' onSubmit ={addNewPost}>
      <Form.Group className="justify-content-center mb-1" controlId="formBasicPost">
      <Form.Label></Form.Label>
        <Form.Control placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>        
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPost">
        <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" value={description} onChange={(e)=> setDescription(e.target.value)} />        
      </Form.Group>
      <Button variant="primary" type="submit"> Post </Button>
    </Form>
  )
}

export default AddNewPost

