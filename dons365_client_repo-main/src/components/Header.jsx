import { useNavigate } from 'react-router-dom';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import UserFeed from './UserFeed';
import {LinkContainer} from 'react-router-bootstrap'

function Header() {

const navigate = useNavigate();

const logout =() =>{
  sessionStorage.clear();
  navigate('/');
}
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <LinkContainer to='/'><Navbar.Brand>DONS 365</Navbar.Brand></LinkContainer>            
            <Nav className="me-auto">
              <LinkContainer to='/UserFeed'><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to='/BuyAndSell'><Nav.Link>Buy/Sell</Nav.Link></LinkContainer>
              <LinkContainer to='/Profile'><Nav.Link>Profile</Nav.Link></LinkContainer>
            </Nav>
            {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                <Button variant="outline-success">Search</Button>
            </Form> */}
            <Navbar.Collapse className="justify-content-end">
                
                <Button onClick={logout} variant="outline-secondary">Logout</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
  )
}

export default Header