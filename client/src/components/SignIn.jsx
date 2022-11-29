import React, { useState, useEffect, useRef, useContext } from "react"
import AuthContext from "../context/AuthProvider";
import axios from 'axios'
import { json } from "react-router-dom";
import cors from "cors";

export default function (props) {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');
  useEffect(() =>{
    userRef.current.focus();
  }, [])
  useEffect(() => {
    setErrMsg('');
  }, [user, password])
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      console.log("success");
      // console.log(user);
      // console.log(password);
    //   const response = await axios.post("http://localhost:3001/api/user/Login",
      
    //   JSON.stringify({user, password}),
    //   {
    //     headers: {'content-type' : 'application/json'},
    //     withCredentials: false,
    //     // data : JSON.stringify(response?.data)
    //   }
    //   );
    //   console.log(JSON.stringify(response?.data));
    // }
      const data = {email: user, password : password};
      console.log(data);
      axios.post('http://localhost:3001/api/user/Login', data)
          .then((result) => {
            console.log(result);
          })
          .catch((result) => {
            console.log(result.message);})
    }
    catch(err) {
      console.log(err.errMsg);
  }
    // try {
    //   const response = await axios.post("http://localhost:3001/api/user/Login",
    //   JSON.stringify({user, password}),
    //   {
    //     headers: {'content-type' : 'application/json'},
    //     withCredentials: false
    //   }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setUser({user, password, roles, accessToken});
    //   setPassword('');
    //   setSuccess(true) ;
    // } 
    // catch(err){
    //   if(!err?.response){
    //     setErrMsg('No Server Response')
    //   } else if(err.response?.status === 400){
    //     setErrMsg('Missing username or password')
    //   } else if(err.response?.status === 401){
    //     setErrMsg('unauthorised')
    //   } else {
    //     setErrMsg('Login failed')
    //   }
    //   errRef.current.focus();
    // }
    //Axios
  }
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (authMode === "signin") {
    return (
      <>
      {success ? (
        <section>
          <h1>
          logged in
          </h1>
        </section>
      ) : (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
                id="userName"
                ref={userRef}
                autoComplete="off"
                className="form-control mt-1"
                placeholder="Enter email address"
                onChange={(e) => setUser(e.target.value)}
                value ={user}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                id="password"
                ref={userRef}
                onChange = {(e) => setPassword(e.target.value)}
                value ={password}
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
            </div>
            <div class="d-grid gap-2 mt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
                <a href="#" class="btn btn-light">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
      )}
      </>
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
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="janedoe@gmail.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control mt-1"
                  placeholder="111-222-3333"
                />
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter address"
                />
              </div>
          <div class="d-grid gap-2 mt-3">
                <a href="#" class="btn btn-primary">Submit</a>
          </div>
        </div>
      </form>
    </div>
  )
}