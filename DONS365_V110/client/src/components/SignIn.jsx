import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios'

function SignIn() {
    const[fullName, setName] = useState("");
    const[address, setAddress] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const collectData=()=>{
        // e.preventDefault();
        console.log("function called")
        Axios.post("http://localhost:3001/api/user/RegisterUser", {
        'name': fullName,
        "address" : address,
        "email" : email,
        "password" : password,
        "phoneno" : phoneNumber,
    }).then((response) =>{
        alert("Registration Successful!")
    });
    // e.preventDefault();
  };
  return (
    <div className="Auth-form-container">
        <Form>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={fullName} onChange={(e)=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="(xxx-xxx-xxxx)" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={() => collectData()}>
                Submit
            </Button>
      </div>
    </Form>
    </div>
  )
}

export default SignIn





