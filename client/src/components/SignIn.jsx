import React, { useState} from "react"
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const[fullName, setName] = useState("");
  const[address, setAddress] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const registerUser=(e)=>{
      e.preventDefault();
      console.log("function called")
      Axios.post("http://localhost:3001/api/user/RegisterUser", {
      "name": fullName,
      "address" : address,
      "email" : email,
      "password" : password,
      "phoneno" : phoneNumber,
  }).then((response) =>{
      alert("Registration Successful!")
  });
  // e.preventDefault();
  };
  const loginUser=(e)=>{
    e.preventDefault();
    Axios.post("http://localhost:3001/api/user/Login", {
        "email" : email,
        "password" : password,
    }).then((response) =>{
        alert("Login Successful!")
        navigate('/UserFeed');
    }).catch((error) =>{
      console.error(error.message)
      alert("Please enter valid login credentials")
    })
    ;
  }
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email address"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div class="d-grid gap-2 mt-3">
                <button onClick = {(e) => loginUser(e)}class="btn btn-primary" >Submit</button>
                <a href="#" class="btn btn-light">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={fullName} 
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="janedoe@gmail.com"
              value={email} 
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password} 
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="111-222-3333"
                  value={phoneNumber} 
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter address"
                  value={address} 
                  onChange={(e)=> setAddress(e.target.value)}
                />
              </div>
          <div class="d-grid gap-2 mt-3">
                <button onClick = {(e) => registerUser(e)}class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}


