import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState, useEffect}  from 'react'
import axios from 'axios'
import Header from './Header';
function BuyAndSell() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/api/items/getItems")
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
    <Row xs={1} md={3} className="g-4" id='cardRow'>
      {items.map((item) => (
        <Col>
          <Card border="success" style={{width: '24rem', height: '14rem', boxShadow: "10px 5px 5px gray", borderRadius: "25px"}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {
                  item.description
                }
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









