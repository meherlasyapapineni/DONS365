import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Header from './Header'
import Table from 'react-bootstrap/esm/Table';
import ItemTable from './ItemTable';


export default function ProfileStatistics() {

  
  const name = JSON.parse(sessionStorage.getItem('name'));
  const email = JSON.parse(sessionStorage.getItem('email'));
  const phoneNo = JSON.parse(sessionStorage.getItem('phoneNo'));

  return (

    
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <Header />
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">{name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  <span className="mx-2">Email: {email} Contact: {phoneNo}</span>        
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <br></br>
            <MDBCol lg="15">
            </MDBCol>
          </MDBCol>
        </MDBRow>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ItemTable />
          </tbody>
        </Table>
        <br></br>
      </MDBContainer>

      
      
    </div>
  );
}