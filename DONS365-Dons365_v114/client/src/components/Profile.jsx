import React, { useState, useEffect} from 'react';
import { MDBCol,MDBDataTable, MDBTable,MDBTableHead,MDBTableBody,MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import { MDBDataTable } from "mdbreact";
import BasicTable from "./table"

export default function ProfileStatistics() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  const columns = [
      {
        Header: "S.No",
        accessor: "S.No" // accessor is the "key" in the data
      },
      {
        Header: "Item",
        accessor: "Item"
      },
      {
        Header: "Action",
        accessor: "Action" // couldnt do button
      }
    ];
const data = [
      {
        company: "Alfred",
        contact: "Maria Anders",
        country: "Germany"
      },
      {
        company: "Centro comercial Moctezuma",
        contact: "Francisco Chang",
        country: "Mexico"
      },
      {
        company: "Ernst Handel",
        contact: "Roland Mendel	",
        country: "Austria"
      }
    ];



  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Name</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Student at PFW<span className="mx-2"></span> <a href="#!"></a>
          
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <br></br>
            <MDBCol lg="15">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Items</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="">
                    <MDBCardText className="text-muted">Item name</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Price</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Price of item</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Actions</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">action to be taken</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <BasicTable columns={columns} data={data}/>
              </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
          </MDBCol>
        </MDBRow>


      

        
      </MDBContainer>



      
    </div>
  );
}