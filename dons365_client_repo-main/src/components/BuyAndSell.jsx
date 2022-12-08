import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState, useEffect}  from 'react'
import axios from 'axios'
import Header from './Header';
import './BuyAndSell.css';
import AddNewItem from './AddNewItem';

function BuyAndSell() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get("http://3.134.86.20/api/items/getItems")
    .then((response) => {
        const allItems = response.data.response;
        setItems(allItems)
        // console.log(items)
    })
    .catch(error => {
        console.log(error)
    })
}, [])
  
  return (
    
    <>
    <Header />

    <AddNewItem />
    <Row xs={1} md={3} class="row">
      {items.map((item) => (
        <Col class="column">
          <Card border="success" class="card">  
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><h4>{item.name}</h4></Card.Title>
              <Card.Text>
              <h6>
                { item.description }
              </h6>
              <h6>Contact: {item.phoneNo}</h6>
              <div><h6>Upload Date: {item.uploadDate}</h6></div>
              
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>

  );
}
export default BuyAndSell;








