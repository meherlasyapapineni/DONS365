import React from 'react'
import { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import AddNewPost from './AddNewPost';
import Header from './Header';
import axios from 'axios'

function UserFeed() { 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:3001/api/posts/GetPosts")
          .then((response) => {
              const allPosts = response.data.response;
              setPosts(allPosts)
              console.log(posts)
          })
          .catch(error => {
              console.log(error)
          });
    }, [])
  
    return (
    
    <div>
    <Header />
    <AddNewPost />
      {posts.map((post)=>(
        <MDBContainer className="py-5">
        
        <br />
        
        <MDBCard style={{ maxWidth: "42rem" }}>
          <MDBCardBody>
            <div className="d-flex mb-3">
              <div>
                  <strong>{post.title}</strong>
                <a
                  href="#!"
                  className="text-muted d-block"
                  style={{ marginTop: "-6px" }}
                >
                  <small>{post.upload_date}</small>
                </a>
              </div>
            </div>
            <div>
              <p>
                {post.description}
              </p>
            </div>
          </MDBCardBody>
          
          </MDBCard>
      </MDBContainer>
      
      ))}
    
      
    </div>
    )
}
    
export default UserFeed

